import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

const updateToolBodySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  collectionDate: z.string(),
  returnDate: z.string(),
  mechanic: z.string(),
});

export async function updateTool(app: FastifyInstance) {
  app.put("/tools/:id", async (request, reply) => {
    const { id, name, description, collectionDate, returnDate, mechanic } =
      updateToolBodySchema.parse(request.body);

    const tool = await prisma.tools.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        collectionDate,
        returnDate,
        mechanic,
      },
    });

    return reply.status(200).send(tool);
  });
}

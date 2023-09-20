import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

const createToolBodySchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.string(),
  collectionDate: z.string(),
  returnDate: z.string(),
  mechanic: z.string(),
});

export async function createTool(app: FastifyInstance) {
  app.post("/create", async (request, reply) => {
    const { name, description, collectionDate, returnDate, mechanic } =
      createToolBodySchema.parse(request.body);

    const tool = await prisma.tools.create({
      data: {
        name,
        description,
        collectionDate,
        returnDate,
        mechanic,
      },
    });

    return reply.status(201).send(tool);
  });
}

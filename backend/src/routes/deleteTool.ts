import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

const deleteToolBodySchema = z.object({
  id: z.number(),
});

export async function deleteTool(app: FastifyInstance) {
  app.delete("/delete/:id", async (request, reply) => {
    try {
      const deleteToolBodySchema = z.object({
        id: z.number(),
      });

      const id = parseInt(request.params.id);

      const { id: toolId } = deleteToolBodySchema.parse({ id });
      const tool = await prisma.tools.delete({
        where: {
          id: toolId,
        },
        select: {
          id: true,
        },
      });

      return tool;
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}

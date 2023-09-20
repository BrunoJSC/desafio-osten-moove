import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllTools(app: FastifyInstance) {
  app.get("/tools", async (request, reply) => {
    const tools = await prisma.tools.findMany({});

    return tools;
  });
}

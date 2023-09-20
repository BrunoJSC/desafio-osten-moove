import fastifyCors from "@fastify/cors";
import { fastify } from "fastify";
import { getAllTools } from "./routes/getAllTools";
import { createTool } from "./routes/createTool";
import { updateTool } from "./routes/updateTool";
import { deleteTool } from "./routes/deleteTool";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllTools);
app.register(createTool);
app.register(updateTool);
app.register(deleteTool);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP running");
  });

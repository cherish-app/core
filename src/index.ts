import { Elysia } from "elysia";
import { STATUS_CODES } from "https";

const app = new Elysia()
.get("/", (context) => context.set.status = 200)
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import { findAll } from "@/services/user.service";
import { userRoute } from "./routes/user.route";
import { Elysia } from "elysia";

const app = new Elysia()
.use(userRoute)
.get("/", (context) => context.set.status = 200)
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

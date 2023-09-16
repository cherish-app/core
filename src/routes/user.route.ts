import { User, create, findAll } from "@/services/user.service";
import Elysia, { t } from "elysia";

export const userRoute = new Elysia()
.get("/users", async (context) => {
  const users = await findAll()
  context.set.status = 200
  return users
})
.post("/users", ({ body }) => body, {
  body: t.Object({
    firstName: t.String(),
    lastName: t.String(),
    email: t.String(),
    password: t.String(),
  }),
  onResponse: (context) => {
    context.set.status = 201
    return create(context.body as User)
  }
})
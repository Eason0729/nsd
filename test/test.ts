import { superoak } from "./deps.ts";
import { app } from "../main.ts";
Deno.test('Regist user "/user/register"', async () => {
  const request = await superoak(app);
  await request.post("/user/register")
    .set("Content-Type", "application/json")
    .send('{"name":"superoak","password":"123456","privilege": 0}')
    .expect(200);
});

// interface test {
//   name: string;
//   fn: (t: Deno.TestContext) => void | Promise<void>;
// }

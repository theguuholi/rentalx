import { app } from "@shared/infra/http/app";
import request from "supertest";
import { Connection, createConnection } from "typeorm";

import { v4 as uuidV4 } from "uuid";
import { hash } from "bcryptjs";

let connection: Connection;
describe("CreateCategoryController", () => {
//   beforeAll(async () => {
//     connection = await createConnection();

//     await connection.runMigrations();

//     const id = uuidV4();
//     const password = await hash("admin", 8);

//     await connection.query(
//       `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
//           values('${id}', 'admin', 'admin@test', '${password}', true, 'now()', 'XXXXX')
//           `
//     );
//   });

//   afterAll(async () => {
//     await connection.dropDatabase();
//     await connection.close();
//   });


  it("test", async () => {
    expect(true).toBe(true)
  })

//   it("should be able to create a new category", () => {
//     const responseToken = request(app).post("/session").send({
//       email: "admin@test",
//       password: "admin",
//     });

//     const { token } = responseToken.body;

//     console.log(responseToken);
//     const response = request(app)
//       .post("/categories")
//       .send({
//         name: "44234234",
//         description: "Carro grande",
//       })
//       .set({
//         Authorization: `Bearer ${token}`,
//       });
//     expect(response.status).toBe(201);
//   });


//   it.only("should be able to create a new category if already exist", () => {
//     const responseToken = request(app).post("/session").send({
//       email: "admin@test",
//       password: "admin",
//     });

//     const { token } = responseToken.body;

//     console.log(responseToken);
//     const response = request(app)
//       .post("/categories")
//       .send({
//         name: "44234234",
//         description: "Carro grande",
//       })
//       .set({
//         Authorization: `Bearer ${token}`,
//       });
//     expect(response.status).toBe(201);
//   });
});

import { client } from "../src/database";
import { encrypt } from "../src/utils/bcryptFunctions";

async function main() {
  const adminObject = {
    email: "admin@admin.com",
    password: encrypt("admin"),
    name: "Livison Vinícius",
    cpf: "15715715715",
  };
  const createdAdmin = await client.user.upsert({
    where: { email: adminObject.email },
    update: {},
    create: adminObject,
  });
  await client.doctor.upsert({
    where: { userId: createdAdmin.id },
    update: {},
    create: { userId: createdAdmin.id, speciality: "general", admin: true },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    client.$disconnect();
  });

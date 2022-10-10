import { ExamTypes } from "@prisma/client";
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
    create: { userId: createdAdmin.id, speciality: "General", admin: true },
  });

  interface techArray {
    email: string;
    password: string;
    name: ExamTypes;
    cpf: string;
  }

  const technicianArray: techArray[] = [
    {
      email: "blood@blood.com",
      password: encrypt("blood"),
      name: "BloodCount",
      cpf: "15715715725",
    },
    {
      email: "genetic@genetic.com",
      password: encrypt("genetic"),
      name: "Genetic",
      cpf: "15715715735",
    },
    {
      email: "kidney@kidney.com",
      password: encrypt("kidney"),
      name: "Kidney",
      cpf: "15715716715",
    },
    {
      email: "laboratory@laboratory.com",
      password: encrypt("laboratory"),
      name: "Laboratory",
      cpf: "15728715715",
    },
    {
      email: "prenatal@prenatal.com",
      password: encrypt("prenatal"),
      name: "Prenatal",
      cpf: "25715715715",
    },
    {
      email: "thyroid@thyroid.com",
      password: encrypt("thyroid"),
      name: "Thyroid",
      cpf: "15715715795",
    },
    {
      email: "urinalysis@urinalysis.com",
      password: encrypt("urinalysis"),
      name: "Urinalysis",
      cpf: "15725715715",
    },
    {
      email: "radiology@radiology.com",
      password: encrypt("radiology"),
      name: "Radiology",
      cpf: "35715715715",
    },
    {
      email: "tomography@tomography.com",
      password: encrypt("tomography"),
      name: "Tomography",
      cpf: "55715715715",
    },
  ];
  await client.user.createMany({ data: technicianArray, skipDuplicates: true });
  for (let i = 2; i <= technicianArray.length + 1; i++) {
    await client.technician.upsert({
      where: { userId: i },
      update: {},
      create: {
        userId: i,
        speciality: technicianArray[i - 2].name,
      },
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    client.$disconnect();
  });

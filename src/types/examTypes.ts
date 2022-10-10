import { Exam } from "@prisma/client";

export type IExamType = Omit<Exam, "id">;

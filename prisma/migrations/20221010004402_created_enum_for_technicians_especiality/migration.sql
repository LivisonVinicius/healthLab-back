/*
  Warnings:

  - Changed the type of `speciality` on the `technicians` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ExamTypes" AS ENUM ('BloodCount', 'Genetic', 'Kidney', 'Laboratory', 'Prenatal', 'Thyroid', 'Urinalysis', 'Radiology', 'Tomography');

-- AlterTable
ALTER TABLE "technicians" DROP COLUMN "speciality",
ADD COLUMN     "speciality" "ExamTypes" NOT NULL;

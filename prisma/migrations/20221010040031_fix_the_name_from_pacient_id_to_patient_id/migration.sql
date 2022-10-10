/*
  Warnings:

  - You are about to drop the column `pacientId` on the `appointments` table. All the data in the column will be lost.
  - Added the required column `patientId` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appointments" DROP CONSTRAINT "appointments_pacientId_fkey";

-- AlterTable
ALTER TABLE "appointments" DROP COLUMN "pacientId",
ADD COLUMN     "patientId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

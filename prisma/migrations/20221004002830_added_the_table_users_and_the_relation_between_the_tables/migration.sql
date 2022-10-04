/*
  Warnings:

  - You are about to drop the column `email` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `technicians` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `technicians` table. All the data in the column will be lost.
  - You are about to drop the `patients` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `technicians` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `technicians` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "doctor_email_key";

-- DropIndex
DROP INDEX "technicians_email_key";

-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "email",
DROP COLUMN "password",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "technicians" DROP COLUMN "email",
DROP COLUMN "password",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "patients";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_userId_key" ON "doctor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "technicians_userId_key" ON "technicians"("userId");

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technicians" ADD CONSTRAINT "technicians_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

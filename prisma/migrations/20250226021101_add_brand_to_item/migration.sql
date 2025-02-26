/*
  Warnings:

  - Added the required column `brand` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "caseSize" INTEGER,
ADD COLUMN     "metalColor" TEXT,
ADD COLUMN     "movement" TEXT,
ADD COLUMN     "strapMaterial" TEXT;

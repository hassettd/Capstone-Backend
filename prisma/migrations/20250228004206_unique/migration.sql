/*
  Warnings:

  - A unique constraint covering the columns `[model]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Item_model_key" ON "Item"("model");

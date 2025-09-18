/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `ownerEmail` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Restaurant" DROP CONSTRAINT "Restaurant_userEmail_fkey";

-- AlterTable
ALTER TABLE "public"."Restaurant" DROP COLUMN "userEmail",
ADD COLUMN     "ownerEmail" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Restaurant_ownerEmail_idx" ON "public"."Restaurant"("ownerEmail");

-- AddForeignKey
ALTER TABLE "public"."Restaurant" ADD CONSTRAINT "Restaurant_ownerEmail_fkey" FOREIGN KEY ("ownerEmail") REFERENCES "public"."User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `userId` on the `GameSession` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameSession" DROP CONSTRAINT "GameSession_userId_fkey";

-- AlterTable
ALTER TABLE "GameSession" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE SET NULL ON UPDATE CASCADE;

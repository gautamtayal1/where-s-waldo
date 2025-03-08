/*
  Warnings:

  - You are about to drop the column `xCor` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `yCor` on the `Character` table. All the data in the column will be lost.
  - Added the required column `xEnd` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xStart` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yEnd` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yStart` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "xCor",
DROP COLUMN "yCor",
ADD COLUMN     "xEnd" INTEGER NOT NULL,
ADD COLUMN     "xStart" INTEGER NOT NULL,
ADD COLUMN     "yEnd" INTEGER NOT NULL,
ADD COLUMN     "yStart" INTEGER NOT NULL;

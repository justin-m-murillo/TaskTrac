/*
  Warnings:

  - You are about to drop the column `bgGradient` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `completedAt` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `bg_gradient` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "bgGradient",
DROP COLUMN "completedAt",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "dueDate",
DROP COLUMN "updatedAt",
ADD COLUMN     "bg_gradient" TEXT NOT NULL,
ADD COLUMN     "completed_at" TIMESTAMPTZ(6),
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ADD COLUMN     "due_date" TIMESTAMPTZ(6),
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

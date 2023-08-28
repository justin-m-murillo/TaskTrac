/*
  Warnings:

  - You are about to alter the column `dueDate` on the `Todo` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - Added the required column `hasDueDate` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "hasDueDate" BOOLEAN NOT NULL,
    "dueDate" DATETIME,
    "completed" BOOLEAN NOT NULL,
    "completedAt" DATETIME,
    "deleted" BOOLEAN NOT NULL,
    "deletedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Todo" ("completed", "completedAt", "createdAt", "deleted", "deletedAt", "description", "dueDate", "id", "location", "title", "updatedAt") SELECT "completed", "completedAt", "createdAt", "deleted", "deletedAt", "description", "dueDate", "id", "location", "title", "updatedAt" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

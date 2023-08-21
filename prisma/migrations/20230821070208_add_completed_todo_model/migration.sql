/*
  Warnings:

  - You are about to drop the column `completedAt` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `complete` on the `DeletedTodo` table. All the data in the column will be lost.
  - You are about to drop the column `completedAt` on the `DeletedTodo` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "CompletedTodo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "completedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Todo" ("createdAt", "id", "title", "updatedAt") SELECT "createdAt", "id", "title", "updatedAt" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
CREATE TABLE "new_DeletedTodo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "deletedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_DeletedTodo" ("deletedAt", "id", "title") SELECT "deletedAt", "id", "title" FROM "DeletedTodo";
DROP TABLE "DeletedTodo";
ALTER TABLE "new_DeletedTodo" RENAME TO "DeletedTodo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

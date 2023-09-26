/*
  Warnings:

  - Added the required column `todoCreatedAt` to the `DeletedTodo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `todoCreatedAt` to the `CompletedTodo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DeletedTodo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "todoCreatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_DeletedTodo" ("deletedAt", "id", "title") SELECT "deletedAt", "id", "title" FROM "DeletedTodo";
DROP TABLE "DeletedTodo";
ALTER TABLE "new_DeletedTodo" RENAME TO "DeletedTodo";
CREATE TABLE "new_CompletedTodo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "todoCreatedAt" DATETIME NOT NULL,
    "completedAt" DATETIME NOT NULL
);
INSERT INTO "new_CompletedTodo" ("completedAt", "id", "title") SELECT "completedAt", "id", "title" FROM "CompletedTodo";
DROP TABLE "CompletedTodo";
ALTER TABLE "new_CompletedTodo" RENAME TO "CompletedTodo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

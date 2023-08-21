/*
  Warnings:

  - You are about to drop the column `complete` on the `Todo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Todo" ("completedAt", "createdAt", "id", "title", "updatedAt") SELECT "completedAt", "createdAt", "id", "title", "updatedAt" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

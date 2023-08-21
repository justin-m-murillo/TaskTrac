/*
  Warnings:

  - You are about to drop the `CompletedTodo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeletedTodo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `completed` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CompletedTodo";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DeletedTodo";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "completedAt" DATETIME,
    "deleted" BOOLEAN NOT NULL,
    "deletedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Todo" ("createdAt", "id", "title", "updatedAt") SELECT "createdAt", "id", "title", "updatedAt" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

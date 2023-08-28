-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "dueDate" TEXT,
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

-- CreateTable
CREATE TABLE "DeletedTodo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "completedAt" DATETIME,
    "deletedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

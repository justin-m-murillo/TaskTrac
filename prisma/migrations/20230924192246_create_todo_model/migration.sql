-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT concat('usr_', replace(cast(gen_random_uuid() as text), '-', ''));

-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL DEFAULT concat('usr_', replace(cast(gen_random_uuid() as text), '-', '')),
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "dueDate" TIMESTAMP(3),
    "bgGradient" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

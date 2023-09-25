-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "id" SET DEFAULT concat(gen_random_uuid());

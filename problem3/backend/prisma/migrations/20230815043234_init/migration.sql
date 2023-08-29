-- DropForeignKey
ALTER TABLE "each_todo" DROP CONSTRAINT "each_todo_from_todo_fkey";

-- AlterTable
ALTER TABLE "each_todo" ALTER COLUMN "check" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "each_todo" ADD CONSTRAINT "each_todo_from_todo_fkey" FOREIGN KEY ("from_todo") REFERENCES "list_todo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "list_todo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "list_todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "each_todo" (
    "id" SERIAL NOT NULL,
    "name_todo" TEXT NOT NULL,
    "check" BOOLEAN NOT NULL,
    "from_todo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "each_todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "each_todo" ADD CONSTRAINT "each_todo_from_todo_fkey" FOREIGN KEY ("from_todo") REFERENCES "list_todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

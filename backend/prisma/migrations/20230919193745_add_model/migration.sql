-- CreateTable
CREATE TABLE "Tools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "collectionDate" TEXT,
    "returnDate" TIMESTAMP(3),
    "mechanic" TEXT,

    CONSTRAINT "Tools_pkey" PRIMARY KEY ("id")
);

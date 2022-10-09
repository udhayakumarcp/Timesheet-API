-- CreateSeqence
CREATE SEQUENCE User_id_seq START WITH 1001;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL DEFAULT concat('YT', nextval('User_id_seq' :: regclass)),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "relieved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

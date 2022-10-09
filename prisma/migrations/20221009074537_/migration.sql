-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT concat('YT', nextval('User_id_seq' :: regclass));

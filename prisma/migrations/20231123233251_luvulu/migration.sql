-- CreateEnum
CREATE TYPE "TypeNotification" AS ENUM ('APPOINTMENT');

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "type" "TypeNotification";

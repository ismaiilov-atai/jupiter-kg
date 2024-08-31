/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "_stickers_to_cart" DROP CONSTRAINT "_stickers_to_cart_A_fkey";

-- DropTable
DROP TABLE "Cart";

-- CreateTable
CREATE TABLE "Bag" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Bag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bag_userId_key" ON "Bag"("userId");

-- AddForeignKey
ALTER TABLE "Bag" ADD CONSTRAINT "Bag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_stickers_to_cart" ADD CONSTRAINT "_stickers_to_cart_A_fkey" FOREIGN KEY ("A") REFERENCES "Bag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_stickers_to_tag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_stickers_to_tag_AB_unique" ON "_stickers_to_tag"("A", "B");

-- CreateIndex
CREATE INDEX "_stickers_to_tag_B_index" ON "_stickers_to_tag"("B");

-- AddForeignKey
ALTER TABLE "_stickers_to_tag" ADD CONSTRAINT "_stickers_to_tag_A_fkey" FOREIGN KEY ("A") REFERENCES "Sticker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_stickers_to_tag" ADD CONSTRAINT "_stickers_to_tag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

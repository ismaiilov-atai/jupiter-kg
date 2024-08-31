export interface Sticker {
  title: string,
  description: string,
  src: string,
  price: Number,
  sizes: string[],
  tags: string[]
}

export interface IStickerInput {
  title: string;
  description: string;
  price: number;
  file: FileList;
}

export interface TagType {
  id: string;
  value: string;
  label: string;
}


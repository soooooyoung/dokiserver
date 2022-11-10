export interface Image {
  id: string;
  created: string;
  userId: string;
  data: string;
}

export type Album = Image[];

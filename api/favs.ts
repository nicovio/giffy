export const favs: Record<string, Fav[]> = {
  nicovio: [],
}

export type Fav = {
  id: string
  image: Image
  slug: string
  title: string
}

type Image = {
  height: string
  width: string
  mp4: string
  mp4_size: string
}

export function isNew(gif, currentGifs) {
  return currentGifs.every((currentGif) => currentGif.id !== gif.id)
}

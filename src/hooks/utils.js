export function compareGifsBySize(gif, gifToCompare) {
    const size = +gif.image.height
    const sizeToCompare = +gifToCompare.image.height
    if (size < sizeToCompare) return -1
    if (sizeToCompare > size) return 1
    return 0
}

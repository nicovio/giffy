export function compareGifsBySize(gif, gifToCompare) {
    const size = +gif.image.height * +gif.image.width
    const sizeToCompare = +gifToCompare.image.height * +gifToCompare.image.width
    if (size < sizeToCompare) return -1
    if (sizeToCompare > size) return 1
    return 0
}

export const renderAsHTML = (array, converter) => {
    return array.map(converter).join("")
}
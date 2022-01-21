export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

//Given an image return to Url

export const fromImageToUrl = (image) => {
    if (!image) return "/no-image.png";
    if (image.url.indexOf("/") === 0) return `${API_URL}${image.url}`
    return image.url;
}
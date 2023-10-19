import noImage from '../assets/Images/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string) =>{
    if (!url) return noImage;
    const target ='media/'
    // finds the index of 'm' of 'media/' then adds the length to make the slice where 'media/' ends 
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl;
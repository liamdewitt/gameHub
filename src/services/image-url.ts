const getCroppedImageUrl = (url: string) =>{
    const target ='media/'
    // finds the index of 'm' of 'media/' then adds the length to make the slice where 'media/' ends 
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl;
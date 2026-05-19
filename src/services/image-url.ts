const getCroppedImageUrl = (url: string) => {
    const index = url.indexOf('media/') + 'media/'.length;
    url.slice(0, index)
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImageUrl;
import noImage from "../assets/no-image.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const index = url.indexOf("media/") + "media/".length;
  url.slice(0, index);
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;

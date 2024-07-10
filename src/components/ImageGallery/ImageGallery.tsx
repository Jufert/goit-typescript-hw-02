import {IImage} from "../../App"
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: IImage[];
  onImageClick: (image: IImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {Array.isArray(images) &&
          images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} onClick={() => onImageClick(image)} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
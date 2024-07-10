import css from "./ImageCard.module.css";
interface ImageProps {
  urls: {
    small: string;
    // regular: string;
    // large: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: ImageProps;
  onClick: (image: ImageProps) => void;
}

const ImageCard: React.FC<ImageCardProps>= ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div className={css.container}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;

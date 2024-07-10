import {IImage} from "../../App"
import css from "./ImageModal.module.css";
import Modal from "react-modal"

const customStyles = {
  content: {
    padding: "0",
    background: "unset",
    overflow: "unset",
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
interface ImageModalProps {
  image: IImage | null;
  onRequestClose: () => void;
  isOpen: boolean;
}
const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onRequestClose }) => {
  if (!image) {
    return null;
  }
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={css.overlays}
        contentLabel="Image Modal"
        appElement={document.getElementById("root") as HTMLElement}
      >
        <img src={image.urls.regular} alt={image.alt_description} />
      </Modal>
    </div>
  );
};

export default ImageModal;
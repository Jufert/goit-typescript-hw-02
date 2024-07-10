import { useEffect, useState } from "react";
import css from "./App.module.css";
import { requestImagesByQuery } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export interface IImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    // large: string;
  };
  alt_description: string;
}

interface IData {
  results: IImage[];
  // total: number;
}
const App: React.FC = () => {
  const [images, setImages] = useState<IImage[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null);

  useEffect(() => {
    const fetchImagesByQuery = async () => {
      try {
        setIsLoading(true);
        const data: IData = await requestImagesByQuery(query, page);
        setImages((prevImages) => {
          if (page === 1) {
            return data.results;
          } else {
            return prevImages ? [...prevImages, ...data.results] : data.results;
          }
        });
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length > 0) {
      fetchImagesByQuery();
    } else {
      setImages(null);
    }
  }, [query, page]);

  const onSetSearchQuery = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const handleMoreImages = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: IImage) => {
    setModalIsOpen(true);
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} onImageClick={openModal} />}
      {images && <LoadMoreBtn onClick={handleMoreImages} />}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default App;

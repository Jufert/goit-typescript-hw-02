import axios from "axios";

const accessKey = "QYGvSCvu4kVIq5ZXUAS_9p-XDZ5oEyrkC9zybg4yjLo";
const apiUrl = "https://api.unsplash.com/";

interface IImage {
  urls: {
    small: string;
    regular: string;
    // full:string;
  };
  alt_description: string;
}

export const requestImages = async (): Promise<IImage[]> => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}`
  );
  return data;
};

export const requestImagesByQuery = async (query = "", page = 1) => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
  );
  return data;
};

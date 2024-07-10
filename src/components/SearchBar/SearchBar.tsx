import { useState } from "react";
import css from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";
import { showError } from "../../services/toaster";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [topic, setTopic] = useState<string>("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (topic.trim() === "") {
      showError("Please enter a search query");
      return;
    }
    onSubmit(topic);
    console.log(topic);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(evt.target.value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <Toaster />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

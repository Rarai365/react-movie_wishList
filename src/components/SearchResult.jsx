/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Badge, Button, Card, Form, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";

const SearchResult = (props) => {
  const { movie, setMovieWishList } = props;

  const selectBoxRef = useRef(null);

  const handleOnClick = () => {
    // Get the genre value
    const selectedGenre = selectBoxRef.current.value;
    console.log("selectedGenre", selectedGenre);
    const selectedMovie = { ...movie, genre: selectedGenre };

    setMovieWishList((prevState) => [...prevState, selectedMovie]);
  };

  return (
    <>
      <h3>Search Result</h3>

      <MovieCard movie={movie} />

      {/* Button To add it to wishlist */}
      <Stack gap={4} className="mt-4">
        <Form.Select aria-label="Default select example" ref={selectBoxRef}>
          <option>Select Genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="sifi">SiFi</option>
        </Form.Select>

        <Button
          onClick={handleOnClick}
          disabled={selectBoxRef.current?.value === "Select Genre"}
        >
          Add To WishList
        </Button>
      </Stack>
    </>
  );
};

export default SearchResult;

/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

const HandleRemoveMovie = ({ imdbID, movieWishList, setMovieWishList }) => {
  const handleOnClick = () => {
    // Filter out the movie to remove by its imdbID
    const updatedMovieWishList = movieWishList.filter(
      (movie) => movie.imdbID !== imdbID
    );

    // Update the state with the new movie list
    setMovieWishList(updatedMovieWishList);
  };

  return (
    <Button variant="danger" onClick={handleOnClick}>
      Remove
    </Button>
  );
};

export default HandleRemoveMovie;

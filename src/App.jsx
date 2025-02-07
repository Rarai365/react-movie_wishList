/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import SearchResult from "./components/SearchResult";
import MovieWishList from "./components/movieWishList";

function App(props) {
  const { handleOnClick } = props;
  const [movie, setMovie] = useState({});
  const [movieWishList, setMovieWishList] = useState([]);

  console.log("movie", movie);

  return (
    <Container>
      <Header />
      <SearchBar setMovie={setMovie} />

      <Row className="mt-4">
        {/* Search Result */}
        <Col xs={3}>
          {!!movie.Title && (
            <SearchResult movie={movie} setMovieWishList={setMovieWishList} />
          )}

          {!movie.Title && <p>Please Search a movie</p>}
        </Col>

        {/* Movie Wishlist */}
        <Col xs={9}>
          <MovieWishList
            movieWishList={movieWishList}
            setMovieWishList={setMovieWishList}
            handleOnClick={handleOnClick}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

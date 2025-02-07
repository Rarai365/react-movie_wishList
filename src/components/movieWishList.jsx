/* eslint-disable react/prop-types */
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import MovieCard from "./MovieCard";
import HandleRemoveMovie from "./HandleRemoveMovie";

const MovieWishList = (props) => {
  const { movieWishList, setMovieWishList, handleOnClick } = props;

  const actionMovies = movieWishList.filter(
    (movie) => movie.genre === "action"
  );
  const comedyMovies = movieWishList.filter(
    (movie) => movie.genre === "comedy"
  );
  const sifiMovies = movieWishList.filter((movie) => movie.genre === "sifi");

  return (
    <>
      <h3>My WishList</h3>

      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
          <Row gap={2}>
            {movieWishList.map((movie) => (
              <Col key={movie.imdbID} className="mb-4">
                <MovieCard movie={movie} />
                <HandleRemoveMovie handleOnClick={handleOnClick} />
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="action" title="Action">
          <Row gap={2}>
            {actionMovies.map((movie) => (
              <Col key={movie.imdbID} className="mb-4">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="comedy" title="Comedy">
          <Row gap={2}>
            {comedyMovies.map((movie) => (
              <Col key={movie.imdbID} className="mb-4">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="sifi" title="SiFi">
          <Row gap={2}>
            {sifiMovies.map((movie) => (
              <Col key={movie.imdbID} className="mb-4">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </>
  );
};

export default MovieWishList;

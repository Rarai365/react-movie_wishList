/* eslint-disable react/prop-types */
import { Badge, Button, Card, Stack } from "react-bootstrap";

const MovieCard = (props) => {
  const { movie, handleRemoveMovie } = props;

  return (
    <Card style={{ width: "18rem" }} key={movie.Title}>
      <Card.Img variant="top" src={movie.Poster} style={{ height: "9rem" }} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Plot}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={2}>
          {movie.Genre.split(",").map((genre) => (
            <Badge key="genre" bg="info">
              {genre}
            </Badge>
          ))}
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;

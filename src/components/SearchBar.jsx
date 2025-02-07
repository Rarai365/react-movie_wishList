import axios from "axios";
import { useRef } from "react";
import { Button, Form, Stack } from "react-bootstrap";

const API_URL =
  " http://www.omdbapi.com/?i=tt3896198&apikey=2ecadd1&type=movie&t=";

const SearchBar = (props) => {
  const { setMovie } = props;

  const searchBarRef = useRef(null);

  const handleOnClick = async () => {
    const searchText = searchBarRef.current.value;

    try {
      const response = await axios.get(API_URL + searchText);

      setMovie(response.data);

      //clear searched movie from input field

      searchBarRef.current.value = "";
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Stack direction="horizontal" gap={4}>
      <Form.Control
        type="text"
        size="lg"
        placeholder="Enter a Movie Name"
        ref={searchBarRef}
      />
      <Button variant="primary" size="lg" onClick={handleOnClick}>
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;

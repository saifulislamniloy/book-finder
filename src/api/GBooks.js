import axios from "axios";

const GBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/",
});

const getBooksByTerm = (SearchTerm/*, setMovies, page_number, setTotalPages*/) => {
  return GBooks.get("v1/volumes/", {
    params: {
      q: SearchTerm,
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
    },
  }).then((response) => {
    console.log(response.data);
    return response.data;
    // setMovies(response.data.results);
    // setTotalPages(response.data.total_pages);
  });
};

const getBookDetails = (movieID, setCurrentMovie) => {
  GBooks.get("movie/" + movieID, {
    params: {
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
    },
  }).then((response) => {
    console.log(response.data);
    // setCurrentMovie(response.data);
  });
};

export { getBooksByTerm, getBookDetails };

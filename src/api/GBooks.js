import axios from "axios";

const GBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/",
});

const getBooksByTerm = (SearchTerm, currentPage, sortOrder) => {
  return GBooks.get("v1/volumes/", {
    params: {
      q: SearchTerm,
      orderBy:sortOrder,
      startIndex:currentPage,
      maxResults:10,
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
    },
  }).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export { getBooksByTerm};

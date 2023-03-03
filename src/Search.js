import { TextField } from "@mui/material";
const SearchBar = ({ setImages }) => {
  const showResult = (e) => {
    e.preventDefault();
    const query = e.target.value;
    const url =
      query === ""
        ? "https://api.unsplash.com/photos/?client_id=5KGmQQgRFlk00p-4mW8RK6Smtmo1MU9sNHK1ZP2Z71Q"
        : "https://api.unsplash.com/search/photos/?client_id=5KGmQQgRFlk00p-4mW8RK6Smtmo1MU9sNHK1ZP2Z71Q&query=" +
          query;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        return query === "" ? setImages(data) : setImages(data.results);
      });
  };

  return (
    <>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        onChange={showResult}
      />
      {/* <form onSubmit={showResult}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search ..."
          type="text"
          name="query"
        ></input>
      </form> */}
    </>
  );
};

export default SearchBar;

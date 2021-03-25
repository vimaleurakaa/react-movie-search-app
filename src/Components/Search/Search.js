import React from "react";

const Search = ({ clicked, changed }) => {
  return (
    <div className="input-group mt-5 ">
      <input
        type="text"
        className="form-control"
        placeholder="Search for movie..."
        onChange={changed}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={clicked}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

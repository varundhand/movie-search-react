import { useState } from "react";

const Searchbar = () => {
  const [text,setText] = useState('')

  const handleOnChange = ({target:{value}}) => {
    setText(value)
    console.log(value)
  }

  return ( 
    <div className="input-group rounded d-flex w-25 mx-auto" id="input-movie-bar">
      <input className="form-control rounded " onChange={handleOnChange} value={text} id="search-btn" placeholder="Enter Movie Name" aria-label="Search" aria-describedby="search-addon" />
      <span className="input-group-text border-0 p-0"  id="search-addon">
        <button type="button" className="btn btn-danger"  onClick={() => {console.log(text)}}>Search</button>
      </span>
    </div>
  );
}
 
export default Searchbar;
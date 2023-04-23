import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";

const Pagination = () => {

  const dispatch =useDispatch()

  const searchTerm = useSelector((state) => state.movie.searchTerm);
  const totalResults = useSelector(state => state.movie.totalResults)
  const totalPages =  parseInt(totalResults/10)
  console.log(totalPages)
  const pages = Array.from(Array(totalPages).keys())
  console.log(pages)

  const handlePageClick = (page) => {
    console.log(page)
    dispatch(fetchMovies({searchTerm,pageNo: page+1}))
  }

  return ( 
    <div className="paginator">
      <nav>
        <ul class="pagination pagination-sm">
          {pages.map((page) => {
            return (
              <li className="page-item"><a className="page-link" onClick={() => handlePageClick(page)} >{page + 1}</a></li>
            )
          })}
        </ul>
      </nav>
    </div>
   );
}
 
export default Pagination;
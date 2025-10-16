import React, { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movieAllData, setMovieAllData] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [searchKeyword, setSearchKeyword] = React.useState("movie");
  const [isDataAvailable, setIsDataAvailable] = React.useState(true);
  const [page, setPage] = React.useState(1); 
  const [totalResults, setTotalResults] = React.useState(0); 

  const getMoviedata = async () => {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=e9b7fc46&s=${searchKeyword}&page=${page}`
      );
      if (data?.Response === "True") {
        setMovieAllData(data?.Search);
        setTotalResults(Number(data?.totalResults));
        setIsDataAvailable(true);
      } else {
        setIsDataAvailable(false);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getMoviedata();
  }, [searchKeyword, page]); 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchKeyword(inputValue);
    setPage(1);
  };


  const handleNext = () => {
    if (page * 10 < totalResults) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row px-4 ">
          <div className="col-6 d-flex flex-column gap-5">
            <div>
              <h1 className="heading-color">Watch Your Favourite Here!</h1>
              <p className="heading-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                veritatis rerum similique praesentium explicabo perferendis
                error, numquam, dignissimos perspiciatis fugit quis omnis? Iure
                beatae necessitatibus inventore sint quia deserunt error?
              </p>
            </div>
            <div className="d-flex gap-2 ">
              <input
                type="text"
                className="input-field w-75 border-0 px-2"
                placeholder="Search for a movie"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className="w-25 border-0 search-button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="row px-4 my-5 row-gap-4 gap-3 justify-content-between ">
          {isDataAvailable ? (
            movieAllData?.map((movie) => (
              <div className="col-2" key={movie?.imdbID}>
                <NavLink
                  className={"text-decoration-none"}
                  to={`/single/${movie?.imdbID}`}
                >
                  <div className="card-bg rounded">
                    <div>
                      <img
                        src={movie?.Poster}
                        alt="movie-cart"
                        className="movie-card p-2 pb-0"
                      />
                    </div>
                    <div className="py-2">
                      <p className="heading-color fs-5 text-center m-0 text-overflow px-2">
                        {movie?.Title}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
          ) : (
            <h1 className="text-center heading-color ">No Result Found</h1>
          )}
        </div>

        {isDataAvailable && movieAllData.length > 0 && (
          <div className="pagination-container d-flex justify-content-center align-items-center gap-3 my-4">
            <button
              className="pagination-btn prev-btn"
              onClick={handlePrev}
              disabled={page === 1}
            >
              ◀ Previous
            </button>

            <span className="heading-color fw-bold">
              Page {page} of {Math.ceil(totalResults / 10) || 1}
            </span>

            <button
              className="pagination-btn next-btn"
              onClick={handleNext}
              disabled={page * 10 >= totalResults}
            >
              Next ▶
            </button>
          </div>

        )}
      </div>
    </>
  );
};

export default Home;

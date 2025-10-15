import React, { use, useEffect } from 'react';
import axios from 'axios';


const Home = () => {

  const [movieAllData, setMovieAllData] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [searchKeyword, setSearchKeyword] = React.useState("movie");
  const [isDataAvailable, setIsDataAvailable] = React.useState(true);

  const getMoviedata = async () => {
    try {
      const { data } = await axios.get(`http://www.omdbapi.com/?apikey=e9b7fc46&s=${searchKeyword}`);
      if (data?.Response == "True") {
        setMovieAllData(data?.Search);
        setMovieAllData(true)
      }
      if (data?.Response == "False") {

        setIsDataAvailable(false);
      }

    } catch (error) {
      console.log("error:", error);
    }

  }
  useEffect(() => {
    getMoviedata();
  }, [searchKeyword]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchKeyword(inputValue);
  }



  return (
    <>
      <div className="container-fluid">
        <div className="row px-4 ">
          <div className="col-6 d-flex flex-column gap-5">
            <div>
              <h1 className='heading-color'>WatchY our Favourite Here!</h1>
              <p className='heading-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis rerum similique praesentium explicabo perferendis error, numquam, dignissimos perspiciatis fugit quis omnis? Iure beatae necessitatibus inventore sint quia deserunt error?
              </p>
            </div>
            <div className='d-flex gap-2 '>
              <input type="text" className='input-field w-75  border-0 px-2' placeholder='Search for a movie'
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className='w-25 border-0 search-button' onClick={handleSearch}>Search</button>
            </div>

          </div>
        </div>
        <div className="row px-4 my-5 row-gap-4 gap-3 justify-content-between ">
          {isDataAvailable ?movieAllData?.map((movie) => {
              return (
                <div className="col-2" key={movie.imdbID}>
                  <div className='card-bg rounded'>
                    <div>
                      <img src={movie?.Poster} alt="movie-cart" className='movie-card p-2 pb-0' />
                    </div>
                    <div className='py-2'>
                      <p className='heading-color fs-5 text-center m-0 text-overflow px-2'>{movie?.Title}</p>
                    </div>
                  </div>
                </div>

              )
            }): <h1 className='text-center heading-color '>No Result Found</h1>
          }

        </div>
      </div>
    </>
  );
}

export default Home;
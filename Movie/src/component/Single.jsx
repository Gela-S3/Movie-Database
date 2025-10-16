import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleMovie, setSingleMovie] = useState("");

  const getSingleData = async () => {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=e9b7fc46&i=${id}`
      );
      setSingleMovie(data);
    } catch (error) {
      console.log("Error fetching single movie:", error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, [id]);


  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid">
      <div className="row px-4 my-4">

        <div className="col-4">
          <div>
            <img
              src={singleMovie?.Poster}
              alt={singleMovie?.Title}
              className="single-poster"
            />
          </div>
        </div>

        <div className="col-8">
          <div>
            <h2 className="text-light">{singleMovie?.Title}</h2>
          </div>
          <div>
            <p className="text-light text-grey">{singleMovie?.Plot}</p>
          </div>

          <div className="mt-2">
            <p className="m-0 fs-5 text-grey">Rating</p>
            <p className="m-0 card-bg py-1 px-2 text-yellow rounded d-inline-block">
              <span>
                <i className="fa-solid fa-star font-size-12"></i>
              </span>{" "}
              {singleMovie?.imdbRating}
            </p>
          </div>

          <div className="mt-2">
            <p className="m-0 fs-5 text-grey">Country</p>
            <p className="m-0 text-light font-size-14">
              {singleMovie?.Country}
            </p>
          </div>

          <div className="mt-2">
            <p className="m-0 fs-5 text-grey">Language</p>
            <p className="m-0 text-light font-size-14">
              {singleMovie?.Language}
            </p>
          </div>

          <div className="mt-2">
            <p className="m-0 fs-5 text-grey">Duration</p>
            <p className="m-0 text-light font-size-14">
              {singleMovie?.Runtime}
            </p>
          </div>

          <div className="mt-2">
            <p className="m-0 fs-5 text-grey">Year</p>
            <p className="m-0 text-light font-size-14">{singleMovie?.Year}</p>
          </div>

          <div className="col-12 py-4">
            <button className="btn-back search-button" onClick={handleGoBack}>
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;

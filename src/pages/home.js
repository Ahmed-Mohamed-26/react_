import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "../componants/card.js";


const Home = () => {
  const [movies, setmovies] = useState([]);
  
  

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3b81a2f804f13886d671ff7875dd6f42"
      )
      .then((res) => {
        setmovies(res.data.results);
        console.log("fffff", res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section id="Blog ">
        <div className="blog-head text-center mt-2">
          <h2>MY Blog</h2>
          <p>
            Nullam Viverra nibh viate Neque condimentum
            <br />
            mattis phasellus fermentum puli
          </p>
        </div>
        <div className="container">
          <div className="row">
            {movies.map((movie, index) => {
              return (
                <div className="col-md-4 mt-3 mb-5" key={index}>
                  <div>
                    <MyCard
                      id={movie.id}
                      image={movie.backdrop_path}
                      name={movie.original_title}
                      release_date={movie.release_date}
                      url={`/details/${movie.id}`}
                      btnName="View Details"
                    />
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

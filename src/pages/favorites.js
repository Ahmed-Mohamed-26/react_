import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../redux/action/fav.js";
import MyCard from "../componants/card.js";


const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
             console.log("Movie backdrop path:", favorites);

  return (
    <div className="container">
      <h2>Favorites</h2>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div
              key={movie.id}
              className="col-md-4"
              style={{ marginBottom: "20px" }}
            >
              <MyCard
                id={movie.id}
                image={movie.image}
                name={movie.title}
                release_date={movie.release_date}
                url={movie.url}
                btnName="Remove"
                onFavoriteClick={() => dispatch(removeFromFavorites(movie.id))}
              />
            </div>
          ))
        ) : (
          <p>No favorite movies.</p>
        )}
      </div>
    </div>
  );
  
};

export default Favorites;

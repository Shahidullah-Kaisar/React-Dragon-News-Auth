import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NewsCard = ({ news }) => {

  const {_id, title, image_url, details } = news;
  
  return (
    <div className="card bg-base-100 shadow-xl mb-16">
      <figure>
        <img
          src={image_url}
          alt="news"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
            {
               details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600">Read More...</Link></p> 
                :
                <p>{details}</p>
            }
        </p>
        
      </div>
    </div>
  );
};

export default NewsCard;

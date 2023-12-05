import React from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const MovieCard = ({ id, title, description, posterUrl, rating }) => {
  return (
    <Link to={`/movies/${id}`} className="no-underline">
      <Card
        hoverable
        cover={
          <img
            alt="example"
            className="h-[500px] object-cover"
            src={posterUrl}
          />
        }
      >
        <Meta
          style={{
            marginBottom: "1rem",
          }}
          title={title}
          description={description.slice(0, 100)}
        />
        <Rate disabled defaultValue={rating} />
      </Card>
    </Link>
  );
};
export default MovieCard;

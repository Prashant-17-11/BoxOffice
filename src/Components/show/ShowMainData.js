import React from "react";

import IMG_PLACEHOLDER from "../../images/not-found.png";
import { Star } from "../Styled";
import { MainDataWrapper, Headline, TagList } from "./ShowMainData.styled";

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div className="text-slide">
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star active />
            <span>{rating.average || "N/A"}</span>
          </div>
        </Headline>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <div>
          Tags:{" "}
          <TagList>
            {tags.map((tag, id) => (
              <span key={id}>{tag}</span>
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  );
};

export default ShowMainData;

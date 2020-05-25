import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Link,
} from "@material-ui/core";
import styled from "styled-components";

const MiniArticle = (props) => {
  const { id, title, imgSrc } = props;

  return (
    <TurboCard>
      <Link href={"/article/" + id}>
        <CardActionArea>
          <TurboCardMedia image={imgSrc} title={title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="secondary"
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </TurboCard>
  );
};

export default MiniArticle;

const TurboCard = styled(Card)`
  max-width: 750px;
  width: 100%;
  padding: 1rem;
`;

const TurboCardMedia = styled(CardMedia)`
  max-width: 1000px;
  width: 100%;
  height: 150px;
`;

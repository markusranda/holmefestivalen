import React from "react";
import { Typography, List } from "@material-ui/core";
import styled from "styled-components";

const Article = (props) => {
  const { articles, match } = props;
  const id = match.params.id;
  const { title, imgMain, imgSec, ingress, paragraph } = articles[id];
  return (
    <TurboList>
      <Typography variant="h3" color="primary">
        {title}
      </Typography>
      {imgMain ? <img alt="Hovedbilde" src={"../" + imgMain} /> : ""}
      <Ingress align="center" color="primary" variant="p">
        {ingress}
      </Ingress>
      {imgSec ? <img alt="sekundærbilde" src={"../" + imgSec} /> : ""}
      <Paragraph align="center" color="primary" variant="p">
        {paragraph}
      </Paragraph>
    </TurboList>
  );
};

export default Article;

const Ingress = styled(Typography)`
  && {
    margin: 25px;
    max-width: 1000px;
  }
`;

const Paragraph = styled(Typography)`
  margin: 25px;
  max-width: 1000px;
`;

const TurboList = styled(List)`
  margin-bottom: 115px;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  && {
    margin-top: 155px;
  }
  img {
    width: 100%;
    max-width: 1000px;
    height: auto;
  }
`;

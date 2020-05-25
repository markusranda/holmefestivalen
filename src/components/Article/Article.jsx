import React from "react";
import { Typography, List } from "@material-ui/core";
import styled from "styled-components";

const Article = (props) => {
  const { articles, match } = props;
  const id = match.params.id;
  const { title, imgMain, ingress, paragraph } = articles[id];
  return (
    <TurboList>
      <Typography gutterBottom align="center" color="primary" variant="h1">
        {title}
      </Typography>
      <img alt="Hovedbilde" src={"../" + imgMain} />
      <Ingress align="center" color="primary" variant="p">
        {ingress}
      </Ingress>
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
  max-width: 1000px;
`;

const TurboList = styled(List)`
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

import React from "react";
import styled from "styled-components";
import MiniArticle from "../Article/MiniArticle";
import { List } from "@material-ui/core";

const LandingPageScreen = () => {
  const articles = [
    {
      id: 0,
      title: "Nye muligheter",
      imgSrc: "https://via.placeholder.com/750",
    },
    {
      id: 1,
      title: "Gamle muligheter",
      imgSrc: "https://via.placeholder.com/750",
    },
    {
      id: 2,
      title: "Fine muligheter",
      imgSrc: "https://via.placeholder.com/750",
    },
  ];

  return (
    <PageContainer>
      <CoverImage src="https://via.placeholder.com/1000" />
      <TurboList container spacing={3}>
        {articles.map((a) => {
          return (
            <List item>
              <MiniArticle title={a.title} imgSrc={a.imgSrc} />
            </List>
          );
        })}
      </TurboList>
    </PageContainer>
  );
};

export default LandingPageScreen;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

const TurboList = styled(List)``;

const CoverImage = styled.img`
  max-width: 100%;
  overflow: hidden;
`;

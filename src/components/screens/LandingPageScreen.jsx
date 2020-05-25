import React from "react";
import styled from "styled-components";
import MiniArticle from "../Article/MiniArticle";
import { List } from "@material-ui/core";

const LandingPageScreen = (props) => {
  const { articles } = props;

  return (
    <PageContainer>
      <CoverImage src="https://via.placeholder.com/1000" />
      <TurboList container spacing={3}>
        {articles.map((a) => {
          return (
            <TurboList item>
              <MiniArticle id={a.id} title={a.title} imgSrc={a.imgHeader} />
            </TurboList>
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

const TurboList = styled(List)`
  max-width: 750px;
  width: 100%;
`;

const CoverImage = styled.img`
  max-width: 100%;
  overflow: hidden;
`;

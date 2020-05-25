import React from "react";
import styled from "styled-components";
import MiniArticle from "../Article/MiniArticle";
import { List, Typography } from "@material-ui/core";
import PageContainer from "../PageContainer";
import { faq } from "../../data/faq";

const LandingPageScreen = (props) => {
  const { articles } = props;

  return (
    <PageContainer>
      <CoverImage src="landing_page.png" />
      <Title gutterBottom variant="h4" color="primary">
        Rykende Ferske nyheter
      </Title>
      <TurboList container spacing={3}>
        {articles.map((a) => {
          return (
            <TurboList item>
              <MiniArticle id={a.id} title={a.title} imgSrc={a.imgHeader} />
            </TurboList>
          );
        })}
      </TurboList>
      <TurboPaper>
        <Title gutterBottom variant="h4" color="primary">
          Ofte stilte spørsmål
        </Title>
        <TurboList container spacing={3}>
          {faq.map((object) => {
            return (
              <TurboList item>
                <Typography variant="p" color="primary">
                  {object.question}
                </Typography>
                <br />
                <Typography variant="p" color="secondary">
                  {object.answer}
                </Typography>
              </TurboList>
            );
          })}
        </TurboList>
      </TurboPaper>
    </PageContainer>
  );
};

export default LandingPageScreen;

const TurboPaper = styled.div`
  padding: 1rem;
  max-width: 750px;
  width: 100%;
  margin-top: 55px;
`;

const Title = styled(Typography)`
  margin-top: 55px;
`;

const TurboList = styled(List)`
  max-width: 750px;
  width: 100%;
  margin: 5px;
`;

const CoverImage = styled.img`
  height: auto;
  width: 100%;
  overflow: hidden;
`;

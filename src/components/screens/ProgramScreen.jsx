import React from "react";
import PageContainer from "../PageContainer";
import { List, Typography } from "@material-ui/core";
import styled from "styled-components";
import { d_two, d_one } from "../../data/program";

const ProgramScreen = () => {
  return (
    <PageContainer>
      <TurboList>
        {d_one.map((obj) => {
          return (
            <List item>
              <Typography variant={obj.variant} color={obj.color}>
                {obj.text}
              </Typography>
            </List>
          );
        })}
        {d_two.map((obj) => {
          return (
            <List item>
              <Typography variant={obj.variant} color={obj.color}>
                {obj.text}
              </Typography>
            </List>
          );
        })}
      </TurboList>
    </PageContainer>
  );
};

export default ProgramScreen;

const TurboList = styled(List)`
  margin-top: 150px;
  margin-bottom: 150px;
`;

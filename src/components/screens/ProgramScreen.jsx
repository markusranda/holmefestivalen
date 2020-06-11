import React from "react";
import PageContainer from "../PageContainer";
import { List, Typography, Divider } from "@material-ui/core";
import styled from "styled-components";
import { d_two, d_one } from "../../data/program";

const ProgramScreen = () => {
  const renderEvents = (events) => {
    return (
      <EventList>
        {events.map((obj) => {
          return (
            <Typography variant="subtitle1" color="primary">
              {obj.text}
            </Typography>
          );
        })}
      </EventList>
    );
  };
  return (
    <PageContainer>
      <TurboList>
        {d_one.map((obj) => {
          return (
            <List key={obj.id}>
              <Typography variant="overline" color="primary">
                {obj.time}
              </Typography>
              <Typography variant={obj.variant} color={obj.color}>
                {obj.text}
              </Typography>
              {obj.event ? renderEvents(obj.events) : ""}
            </List>
          );
        })}
        <TurboDivider variant="fullWidth" />
        {d_two.map((obj) => {
          return (
            <List key={obj.id}>
              <Typography variant="overline" color="primary">
                {obj.time ? obj.time : ""}
              </Typography>
              <Typography variant={obj.variant} color={obj.color}>
                {obj.text}
              </Typography>
              {obj.event ? renderEvents(obj.events) : ""}
            </List>
          );
        })}
      </TurboList>
    </PageContainer>
  );
};

export default ProgramScreen;

const EventList = styled(List)`
  margin-left: 25px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const TurboDivider = styled(Divider)`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const TurboList = styled(List)`
  margin-top: 150px;
  margin-bottom: 150px;
`;

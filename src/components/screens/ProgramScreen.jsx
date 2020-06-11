import React from "react";
import PageContainer from "../PageContainer";
import { List, Typography, Divider } from "@material-ui/core";
import styled from "styled-components";
import { d_two, d_one } from "../../data/program";
import { useEffect } from "react";
import { useState } from "react";

const ProgramScreen = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    var body = document.body,
      html = document.documentElement;

    setHeight(
      Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
    );

    console.log(height);
  }, [height]);

  const renderEvents = (events) => {
    return (
      <EventList>
        {events.map((obj) => {
          return (
            <Typography key={obj.id} variant="subtitle1" color="primary">
              {obj.text}
            </Typography>
          );
        })}
      </EventList>
    );
  };
  return (
    <React.Fragment>
      <PageContainer id="pageContainer">
        <LeftBgImage height={height} />
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
        <RightBgImage height={height} />
      </PageContainer>
    </React.Fragment>
  );
};

export default ProgramScreen;

const LeftBgImage = styled.div`
  min-width: 150px;
  height: ${(props) => (props.height ? props.height + "px" : "100vh")};
  background-image: url(build/bg_left.png);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
  background-repeat: repeat-y;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const RightBgImage = styled.div`
  min-width: 150px;
  height: ${(props) => (props.height ? props.height + "px" : "100vh")};
  background-image: url(build/bg_left.png);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
  background-repeat: repeat-y;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

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

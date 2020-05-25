import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Buttons>
        <Grid container>
          <Grid item>
            <TurboLink underline="none" color="secondary" href="/">
              Home
            </TurboLink>
          </Grid>
          <Grid item>
            <TurboLink underline="none" color="secondary" href="/program">
              Program
            </TurboLink>
          </Grid>
        </Grid>
      </Buttons>
      <Logo>
        <Typography variant="h4" color="primary">
          Holmefestivalen
        </Typography>
      </Logo>
    </Container>
  );
};

export default Navbar;

const Buttons = styled.div`
  align-content: flex-start;
  margin-right: auto;
`;

const Logo = styled.div`
  align-content: flex-end;
  margin-right: 25px;
  font-weight: 700;
  font-size: 1rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem !important;
  }
`;

const TurboLink = styled(Link)`
  font-weight: 700;
  font-size: 1rem;
  && {
    border: none;
    padding: 16px 32px;
    text-align: center;
    transition: 0.3s;
    :hover {
      background-color: #333333;
      color: white;
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem !important;
    padding: 8px 16px !important;
  }
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.6);
  position: fixed;
  top: 0;
  width: 100%;
  && {
    padding: 12px;
  }
  z-index: 99999;
`;

import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item>
          <a>Home</a>
        </Grid>
        <Grid item>
          <a>Program</a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  && {
    padding: 12px;
  }
`;

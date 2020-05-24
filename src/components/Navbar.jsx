import React from "react";
import { Grid, Link } from "@material-ui/core";
import styled from "styled-components";

const Navbar = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item>
          <Link href="/">Home</Link>
        </Grid>
        <Grid item>
          <Link href="/program">Program</Link>
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

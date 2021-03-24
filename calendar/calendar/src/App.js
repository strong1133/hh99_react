import React from 'react';
import styled from 'styled-components';

import { withRouter } from "react-router"
import { Route, Switch } from "react-router-dom";

import Calendar from './Calendar'

function App() {
  return (
    <Wrap>
      <Container>
        <Calendar/>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 100%;
  height: 100vh;
  padding: 15px;
  background-color: #f0e9d8;
`;

const Container = styled.div`
  width: 650px;
  margin: auto;
`;
export default App;

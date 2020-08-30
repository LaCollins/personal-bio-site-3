import React from 'react';
import './App.scss';
import {
  ThemeProvider, createTheme, Arwes, Button, Header, Heading,
  Row, Col,
} from 'arwes';

class App extends React.Component {
  render() {
    return (
        <ThemeProvider theme={createTheme()}>
          <Arwes animate show>
            {anim => (
              <div style={{ padding: 20 }}>
              <Header animate>
                <Row>
                <Col s={12} m={8} l={8} xl={8}>
                <Heading animate show={anim.entered}>
                  <h1 style={{ margin: 0 }}>Test</h1>
                </Heading>
                </Col>
                <Col s={12} m={4} l={4} xl={4} className="buttonContainer">
                  <Button animate show={anim.entered} style={{ margin: 10 }}>Test</Button>
                </Col>
                </Row>
              </Header>
            </div>
            )}
          </Arwes>
        </ThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { render } from 'react-dom';
import Headers from './Display/00_Header'
import Routers from './Components/Routers';
import styled from 'styled-components';

class App extends Component{
  render(){
    return (
      <Layout>
        <Headers />
        <Routers />
      </Layout>
        
      
    )
  }
}
const Layout = styled.div`
  margin: 0 auto;
  width: 100%;
`

export default App;
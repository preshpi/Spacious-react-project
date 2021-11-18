import React from 'react'
import './index.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';



const App = () => {
 
    return (
     <div className="main">
      <Container className="p-5">
          <Row className="justify-content-center">
             <Navbar/>
           </Row>
           <Tabs/>   
            
    </Container>

  </div>
    )
}

export default App

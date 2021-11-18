import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Planet from './Planet';
import Cast from './Cast';

function App() {
  return (
    <div>
      <Tabs variant="pills" defaultActiveKey="second">
        <Tab eventKey="first" title="PLANETS" >
        <Planet/>
        </Tab>
        <Tab eventKey="second" title="CHARATERS">
        <Cast/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App
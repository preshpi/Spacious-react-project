import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Castsidebar from './Castsidebar';
import Pform from './Pform';




const Planet = ({Plantes}) => {

   
    const [isOpen, setisOpen] = useState(false)
    const [isPlus, setisPlus] = useState(false)

    const Planet =[
        {
           name:"Planet Alpha",
           number:"Pop 235",
           id:1,
           src:"./planet-1.svg"

        },

        {
            name:"Planet Alpha",
            number:"Pop 235",
            id:2,
            src:"./planet-2.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:3,
            src:"./planet-3.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:4,
            src:"./planet-4.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:5,
            src:"./planet-5.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:6,
            src:"./planet-6.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:7,
            src:"./planet-7.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:8,
            src:"./planet-8.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:9,
            src:"./planet-9.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:1,
            src:"./planet-1.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:4,
            src:"./planet-4.svg"

         },

         {
            name:"Planet Alpha",
            number:"Pop 235",
            id:7,
            src:"./planet-7.svg"

         },
    ]
    return (
        <Container>
             
      <Row>
        
          {
              Planet.map(each=>(
        
          <Col className="py-3 col-lg-3 col-md-4 col-sm-6 ">
             
                 
                          
                  
               <div className="box mb-3" style={{ width: '12rem' }} key={each.id}  onClick={()=> setisOpen(true)}>             
               <div className="text-center image"><img src={each.src} alt="" /></div>
                     <h5 className="py-2 mx-2">{each.name}</h5>
                     <h6 className="py-1 mx-3 ">{each.number} </h6>
                     
                    { isOpen?<Castsidebar />:"" }

               </div>
          </Col>
              ))
          }
     <div>
                <div variant="dark" ><img src="icons-plus.svg" alt="" className="plus mt-5" onClick={()=> setisPlus(true)} />  </div>
                {isPlus ? <Pform/> : "" }
            </div> 
     
      </Row>
      </Container>
       
      
    )
}

export default Planet



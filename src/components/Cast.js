import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Charside from './Charside';
import Cform from './Cform';


const Cast = () => {
        
        const [isOpen, setisOpen] = useState(false)
        const [isPlus, setisPlus] = useState(false)

        const character=[
                {
                        name:"Brooklyn Simmons",
                        number:"13 friends",
                        id: 1,
                        src:'./character-1.png'

                },

                {
                        name:"Cameron Williamson",
                        number:"20 friends",
                        id: 3,
                        src:'./character-3.png'

                },

                {
                        name:"Leslieey Alexander",
                        number:"21 friends",
                        id: 2,
                        src:'./character-15.png'

                },


              

                {
                        name:"Marvin McKinney",
                        number:"23 friends",
                        id: 4,
                        src:'./character-4.png'

                },

                {
                        name:"Kristin Watson",
                        number:"24 friends",
                        id: 5,
                        src:'./character-5.png'

                },

                {
                        name:"Jenny Wilson",
                        number:"55 friends",
                        id: 6,
                        src:'./character-6.png'

                },

                {
                        name:"Jerome Bell",
                        number:"24 friends",
                        id: 7,
                        src:'./character-7.png'

                },

                {
                        name:"Robert Fox",
                        number:"22 friends",
                        id: 8,
                        src:'./character-15.png'

                },

                {
                        name:"Praise William",
                        number:"16 friends",
                        id: 9,
                        src:'./character-16.png'

                },

                {
                        name:"Albert Roddie",
                        number:"20 friends",
                        id: 9,
                        src:'./character-14.png'

                },

                {
                        name:"Desmond Prince",
                        number:"10 friends",
                        id: 9,
                        src:'./character-13.png'

                },

                {
                        name:"Gorgeia Lizzie",
                        number:"13 friends",
                        id: 9,
                        src:'./character-12.png'

                },

              

        ] 
      
    return (
       
  <Container >
        <Row>
            {
                character.map(each=>(
           <Col className="py-3 col-lg-3 col-md-4 col-sm-6">
                <Card style={{ width: '12rem' }} key={each.id}className="mb-3"  onClick={()=> setisOpen(true)}>
                       <Card.Img variant="top" src={each.src} />
                     <Card.Body>
                        <Card.Title>{each.name}</Card.Title>
                        <Card.Text>{each.number}</Card.Text>
                        
                        { isOpen?<Charside />:"" }
                    </Card.Body>
                </Card>
          </Col>
                ))
            }
             <div variant="dark" ><img src="icons-plus.svg" alt="" className="plus mt-5" onClick={()=> setisPlus(true)} />  </div>
                {isPlus ? <Cform/> : "" }
             
           
            
        </Row>
  </Container>
                    
                
      
    )
}



export default Cast

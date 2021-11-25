import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container,CloseButton } from 'react-bootstrap';
import { useState } from 'react';
import Charside from './Charside';
import Cform from './Cform';
import character1 from "../assets/characters/character-1.png";
import character2 from "../assets/characters/character-2.png";
import character3 from "../assets/characters/character-3.png";
import character4 from "../assets/characters/character-4.png";
import character5 from "../assets/characters/character-5.png";
import character6 from "../assets/characters/character-6.png";
import character7 from "../assets/characters/character-7.png";
import character8 from "../assets/characters/character-8.png";
import character9 from "../assets/characters/character-9.png";
import character10 from "../assets/characters/character-10.png";
import character11 from "../assets/characters/character-11.png";
import character12 from "../assets/characters/character-12.png";
import character13 from "../assets/characters/character-13.png";
import character14 from "../assets/characters/character-14.png";
import character15 from "../assets/characters/character-15.png";
import character16 from "../assets/characters/character-16.png";




const Cast = () => {
        
        const [isOpen, setisOpen] = useState(false)
       const [value, setValue] = useState({})
      const rollit = (person) => {
        setisOpen(true)
        setValue({title: person.title,
        friend:person.friend})
      }


        const allCharacters=[
          {
              id: 1,
              image: character1,
              title: 'Brooklyn Simmons',
              friend: 13
          },
          {
              id: 2,
              image: character2,
              title: 'Cameron Williamson',
              friend: 20
          },
          {
              id: 3,
              image: character3,
              title: 'Lilzy Alexander',
              friend: 34
          },
          {
              id: 4,
              image: character4,
              title: 'Jenny Willson',
              friend: 10
          },
          {
              id: 5,
              image: character5,
              title: 'Marvin McKinney',
              friend: 43
          },
          {
              id: 6,
              image: character6,
              title: 'Cameron Williamson',
              friend: 35
          },
          {
              id: 7,
              image: character7,
              title: 'Guy Hawkins',
              friend: 64
          },
          {
              id: 8,
              image: character8,
              title: 'Robert Fox',
              friend: 50
          },
          {
              id: 9,
              image: character9,
              title: 'Brooklyn Simmons',
              friend: 22
          },
          {
              id: 10,
              image: character10,
              title: 'Adam Joseph',
              friend: 10
          },
          {
              id: 11,
              image: character11,
              title: 'Guy Sharon',
              friend: 35
          },
          {
              id: 12,
              image: character12,
              title: 'Amine Kate',
              friend: 70
          },
          {
              id: 13,
              image: character13,
              title: 'Astra Complli',
              friend: 40
          },
          {
              id: 14,
              image: character14,
              title: 'Phey Max',
              friend: 30
          },
          {
              id: 15,
              image: character15,
              title: 'Astra Stephaine',
              friend: 50
          },
          {
              id: 16,
              image: character16,
              title: 'Clark Ville',
              friend: 20
          },
          ]
          
          

    return (
     
  <Container >
        <Row> 
             {    
                allCharacters.map(each=>( 
                <Col className=" py-3 col-lg-3 col-md-4 col-sm-6 "> 
                    <Card  className="box m-3 pb-2" style={{width:'12rem'}} onClick={(e)=>rollit(each)}>
                         <div className="text-center">          
                            <img src={each.image} alt="" className="card-img" />
                         </div>
                            <p className="px-2">{each.title}</p>
                            <h6 className="px-2">Friends: {each.friend}</h6>
                </Card>
               </Col>   
                ))
                }
                     <div>
                      <Cform name="CHARACTER"/>
                  </div>
                    
        </Row>
                  {
                    isOpen?
                   
                    <div className="sidebar p-3">
                       <CloseButton onClick={()=>setisOpen(false)} className="ms-auto" />
                       <div className="pt-4">
                       <h2 className="fw-bold" >{value.title}</h2>
                       <p className="text1 text-secondary">{value.title} is really a nice person. <br/>She’s been living on planet Alpha for the last 10 years.
                      </p>
                      <div className="d-flex ">
                       <div>
                          <h5 className="text2">Planet</h5>
                          <h5 className="text2 fw-bold">Alpha</h5>
                       </div>
                       <div className="mx-4">
                        <h5 className="text2">Friends</h5>
                        <h5 className="text2 fw-bold">{value.friend}</h5>
                    </div>
                      </div>    
                `   

                      </div>  
                    <Charside />
                    </div>:""
                }
        


  </Container>
                    
                
      
    )
}



export default Cast

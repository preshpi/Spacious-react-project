import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Container } from 'react-bootstrap';
import { useState } from 'react';
import Castsidebar from './Castsidebar';
import Pform from './Pform';
import { PlusSquareFill } from 'react-bootstrap-icons'
import { CloseButton } from 'react-bootstrap';
import planet1 from "../assets/planets/planet-1.svg";
import planet2 from "../assets/planets/planet-2.svg";
import planet3 from "../assets/planets/planet-3.svg";
import planet4 from "../assets/planets/planet-4.svg";
import planet5 from "../assets/planets/planet-5.svg";
import planet6 from "../assets/planets/planet-6.svg";
import planet7 from "../assets/planets/planet-7.svg";
import planet8 from "../assets/planets/planet-8.svg";
import planet9 from "../assets/planets/planet-9.svg";
const Planet = ({Plantes}) => {

   
    const [isOpen, setisOpen] = useState(false)
    const [value, setValue] = useState({})

    const rollit = (person) => {
        setisOpen(true)
        setValue({title: person.title,
        friend:person.friend})
      }

    const allPlanets = [
        {   id: 1,
            image: planet1,
            title: ' Alpha',
            likes:    'Pop 115'
        },
        {   id: 2,
            image: planet2,
            title: 'Saturn ',
            likes:    'Pop 340'
        },
        {   id: 3,
            image: planet3,
            title: ' Pluto',
            likes:    'Pop 264'
        },
        {   id: 4,
            image: planet4,
            title: 'Venus',
            likes:    'Pop 246'
        },
        {   id: 5,
            image: planet7,
            title: 'Ceres',
            likes:    'Pop 431'
        },
        {   id: 6,
            image: planet9,
            title: 'Charon',
            likes:    'Pop 451'
        },
        {   id: 7,
            image: planet8,
            title: 'Earth',
            likes:    'Pop 330'
        },
        {   id: 8,
            image: planet6,
            title: ' Alpha',
            likes:    'Pop 315'
        },
        {   id: 9,
            image: planet2,
            title: 'Uranus',
            likes:    'Pop 125'
        },
        {   id: 10,
            image: planet5,
            title: 'Neptune',
            likes:   ' Pop 250'
        },
        {   id: 11,
            image: planet2,
            title: 'Mars',
            likes:  'Pop 410'
        },
        {   id: 11,
            image: planet1,
            title: ' Jupiter',
            likes:    'Pop 560'
        },
    ]
    return (
        <Container>
             
      <Row>
        
          {
              allPlanets.map(each=>(
        
               <Col className="py-3 col-lg-3 col-md-4 col-sm-6 "> 
               <div className="box mb-3 pb-2" style={{width:'12rem'}} onClick={(e)=>rollit(each)}>
                    <div className="text-center charImg">
                    <img src={each.image} alt="" className="card-img" />
                      </div>
                       <p className="py-2 mx-2 fw-bold">{each.title}</p>
                      <h6 className=" mx-2 ">{each.likes}</h6>
           </div>
          </Col>   
              ))
          }
   
              <div>
                 <Pform name="PLANET"/>
              </div>
     
      </Row>

      {
                    isOpen?<div className="sidebar p-2">
                         <CloseButton onClick={()=>setisOpen(false)} className="ms-auto m-2" />
                          <h2 className="fw-bold">{value.title}</h2>
                    <p className="text1 text-secondary ms-3">{value.title} is the place to be if 
                    you like <br/> everything related to planets. <br/>
                    I know it is a bit meta,but come see by yourself
                    </p>
                    <div className="d-flex ">
                    <div>
                        <h5 className="text2 ms-2">Population</h5>
                        <h5 className="text2 fw-bold ms-2">{value.friend}</h5>
                    </div>
                </div>    
                    <div className="row justify-content-between">
                       <div class="col-4">
                           <div className="py-3"><h6 className="text-secondary">CHARACTERS</h6></div>
                       </div>
                        <div class="col-4">
                           <div className="plus fs-2 py-1 text-secondary"><PlusSquareFill /></div>
                        </div>
                       
                    </div>
                    <Castsidebar/>
                    </div>:""
                }
      </Container>
       
      
    )
}

export default Planet



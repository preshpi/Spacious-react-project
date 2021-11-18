import React from 'react'
import { CloseButton } from 'react-bootstrap';



  

const Castsidebar = () => {

    
  return (
      
    <div>
        <div className="sidebar p-3"  >
            <div className="pt-4">
              
              <CloseButton />
                <h2 className="fw-bold" >Planet Alpha</h2>
                <p className="text1 text-secondary">Planet Alpha is the place to be if you like <br/>  everything related to planets.I
                 know it’s a bit meta, <br/>  but come see by yourself.
                </p>

                <div className="d-flex ">
                    <div>
                        <h5 className="text2">Population</h5>
                        <h5 className="text2 fw-bold">234</h5>
                    </div>
                </div>              
            </div>
               
                <div class="row justify-content-between">
                   <div class="col-4">
                         <div className="py-3"><h6 className="text-secondary">CHARACTERS</h6></div>
                    </div>
                        <div class="col-4">
                            <div><img src="./picon.png" className="bg-light" /> </div>   
                         </div>
                </div>
               
            <div className="d-flex pb-2">
                <div>
                    <img src="./character-12.png" alt="img" className="pics"/>
                </div>
                <div className="pt-1 mx-2">
                    <h3 className="name">Eleanor Pena</h3>
                    <h6 className="name1 text-secondary">23 Friends</h6>
                </div>
            </div>

            <div className="d-flex pb-2">
                <div>
                    <img src="./character-13.png" alt="" className="pics"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="name">Brooklyn Simmons</h4>
                    <h6 className="name1  text-secondary">56 Friends</h6>
                </div>
            </div>

            <div className="d-flex pb-2">
                <div>
                <img src="./character-14.png" alt="" className="pics"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="name">Lesile Alexander</h4>
                    <h6 className="name1  text-secondary">47 Friends</h6>
                </div>
            </div>

            <div className="d-flex pb-2">
                <div>
                <img src="./character-15.png" alt="" className="pics"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="name">Marvin Mckinney</h4>
                    <h6 className="name1  text-secondary">60 Friends</h6>
                </div>
            </div>
           
            <div className="d-flex pb-2">
                <div>
                <img src="./character-1.png" alt="" className="pics"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="name">Marvin Mckinney</h4>
                    <h6 className="name1  text-secondary">60 Friends</h6>
                </div>
            </div>

            <div className="d-flex pb-2">
                <div>
                <img src="./character-3.png" alt="" className="pics"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="name">Marvin Mckinney</h4>
                    <h6 className="name1  text-secondary">60 Friends</h6>
                </div>
            </div>

            <div className="d-flex pb-2">
                <div>
                <img src="./character-10.png" alt="" className="pics"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="name">Marvin Mckinney</h4>
                    <h6 className="name1  text-secondary">60 Friends</h6>
                </div>
            </div>
           

        </div>
     </div>
  )
}

export default Castsidebar

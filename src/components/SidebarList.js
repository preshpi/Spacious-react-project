import React from 'react'
import character1 from "../assets/characters/character-1.png";
import character2 from "../assets/characters/character-2.png";
import character3 from "../assets/characters/character-3.png";
import character4 from "../assets/characters/character-4.png";
import character5 from "../assets/characters/character-5.png";
import character6 from "../assets/characters/character-6.png";

const SidebarList = () => {

    const sidebarCharacters=[
        {
            id: 1,
            image: character1,
            title: 'Brooklyn Simmons',
            friend: 23
        },
        {
            id: 2,
            image: character2,
            title: 'Cameron Williamson',
            friend: 30
        },
        {
            id: 3,
            image: character3,
            title: 'Leslie Alexander',
            friend: 34
        },
        {
            id: 4,
            image: character4,
            title: 'Jenny Wilson',
            friend: 20
        },
        {
            id: 5,
            image: character5,
            title: 'Marvin McKinney',
            friend: 23
        },
        {
            id: 6,
            image: character6,
            title: 'Cameron Williamson',
            friend: 30
        }]
    return (
        <div>
             {
                sidebarCharacters.map(each=>(
                    <div className="d-flex m-1">
                        <div className="imgBox">
                        <img src={each.image} alt="" className="pics" />
                        </div>
                        <div className='px-2'>
                            <h6>{each.title}</h6>
                            <p>{each.friend} friends</p>
                        </div>
                            
                    </div>
                ))
            }
        </div>
    )
}

export default SidebarList

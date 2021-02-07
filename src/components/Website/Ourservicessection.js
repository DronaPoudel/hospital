import React from 'react'
import './componentstyles.css'
const whyuseData =[{
    id : 1,
    // img : "require(./assets/fimg1.png)",
    img : 'https://i.ibb.co/q7RT7rb/1.png',
    title : "xfjnbksjfksjvn",
    description : "loremkzjsdosjdosa djivuoasdvosdv nosudhvous dhvusohvsu",
},
{
    id : 2,
    img : 'https://i.ibb.co/zsR4tXZ/2.png',
    title : "xfjnbksjfksjvn",
    description : "loremkzjsdosjdosadjivuoasdvosdvnosudhvousdhvusohvsu",
},
{
    id : 3,
    img : 'https://i.ibb.co/n357znQ/3.png',
    title : "xfjnbksjfksjvn",
    description : "loremkzjsdosjdosadjivuoasdvosdvnosudhvousdhvusohvsu",
},
{
    id : 4,
    img : 'https://i.ibb.co/QbG4ns5/4.png',
    title : "xfjnbksjfksjvn",
    description : "loremkzjsdosjdosadjivuoasdvosdvnosudhvousdhvusohvsu",
}
]
function Ourservicessection() {
    return (
        <div>
            <div className="why-use">
                <h3>Why use our services</h3>
                <div className ="container">
                    <div className="grid">
                        {whyuseData.map((Item) => {
                            return(
                                <div className="whyuseItem">
                                    <img src={Item.img} alt=""/>
                                    <div className="card-content">
                                        <h4>{Item.title}</h4>
                                        <p>{Item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                </div>
            </div> 
        </div>
    )
}

export default Ourservicessection

import React, {useState} from 'react'

const Departlist = ({text, departs, setDeparts}) => {
    // Events
    const deleteHandler = (i) => {
        console.log(i,' random')
        // setDeparts(departs.filter(el => el.id !== departs.id))
    };
    const deleteItem = (item) => {
        setItems(currentItems => currentItems.filter((item, index) => index !== item));
      }
      
    
    // const submitDepartHandler = (e) => {
    //     e.preventDefault();
    //     setDeparts([
    //         ...departs, {text: inputText, id: Math.random()*1000}
    //     ]);
    //     setInputText("")
    // }
const [items, setItems] = useState([{ name: "", quantity: "", unit: "" }]);

    return ( 
        
        <div className="departslist">
            <li>{text} <button onClick = {()=>deleteItem() }  className = "remove-btn">x</button></li>
        </div>
     );
}
 
export default Departlist;
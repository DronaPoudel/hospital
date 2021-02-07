import React from 'react'
import './componentstyles.css'

const Departform = ({setInputText, departs, setDeparts, inputText}) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitDepartHandler = (e) => {
        e.preventDefault();
        setDeparts([
            ...departs, {text: inputText, id: Math.random()*1000}
        ]);
        setInputText("")
    }
    return ( 
        <form >
            <input type="text" onChange = {inputTextHandler} value = {inputText} placeholder = "Department Name"/>
            {/* <input type="text" placeholder = "Department Name" className = "departmentInput-form"/> */}
            <button onClick = {submitDepartHandler}><input type="submit" value="Add"/></button>
        </form>
     );
}
 
export default Departform;

// export default () => {
//     return (
//         <div>
//             <div className="department-section">
//                 <div className="department-input">
                    
//                     <form >
//                         <input type="text" />
//                         <input type="text" placeholder = "Department Name" className = "departmentInput-form"/>
//                         <button><input type="submit" value="Add"/></button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

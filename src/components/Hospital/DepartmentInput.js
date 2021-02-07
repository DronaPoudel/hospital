import React, {useState} from 'react'
import Departform from './Departform'
import Departlist from './Departlist'
function DepartmentInput({departs}) {
    // const [inputText, setInputText] = useState("") ;
    
    return (
        <div>
            <h2>Departments</h2>

            <div className="departscontainer">
                <ol >
                    {departs.map(departs => (
                        <Departlist departs = {departs} text = {departs.text} key = {departs.id}/>
                    ))}
                </ol>
                {/* <Departform/> */}
            </div>
        </div>
    )
}

export default DepartmentInput

import React, {useState} from 'react';
import DepartmentInput from './DepartmentInput';
import Departform from './Departform'
function DepartDisplayer() {
    const [inputText, setInputText] = useState("");
    const [departs, setDeparts] = useState([]);
    return (
        <div>
            <div className="Departs-section">
                {/* <h2>{inputText}</h2> */}
                <DepartmentInput setDeparts = {setDeparts} departs = {departs}/>
                <Departform inputText={inputText} departs={departs} setDeparts={setDeparts} setInputText = {setInputText}/>
            </div>
        </div>
    )
}

export default DepartDisplayer;

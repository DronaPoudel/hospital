import React, {useState} from 'react'
import './componentstyles.css'

const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return{
        value,
        onChange: e=> setValue(e.target.value)
    }
}

export default ({onSubmit}) => {
    const text = useInputValue("");
    return (
        <div>
            <div className="department-section">
                <h2>Departments</h2>
                <div className="department-input">
                    <ol>
                        <li>Gyno</li>
                    </ol>
                    <form onSubmit={e=>{e.preventDefault();
                    onSubmit(text.value)
                    }}>
                        <input type="text" {...text} />
                        {/* <input type="text" placeholder = "Department Name" className = "departmentInput-form"/> */}
                        <button><input type="submit" value="Add"/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

//  DepartmentInput

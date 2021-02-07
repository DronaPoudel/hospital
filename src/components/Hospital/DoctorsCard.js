import React from 'react'
import './componentstyles.css'
import DocAvaibility from './DocAvaibility'
import DocImage from './images/DocPhoto.png'
const DoctorList = [
    {
        DocPhoto : "./images/DocPhoto.png",
        Name : 'Dr. Jaya Satyal',
        Depart : 'GYANECOLOGY AND OBSTRETICS',
        Qualification : 'MBBS, MS'
    },
    {
        DocPhoto : "./images/DocPhoto.png",
        Name : 'Dr. Jaya Satyal',
        Depart : 'GYANECOLOGY AND OBSTRETICS',
        Qualification : 'MBBS, MS'
    }
]
function DoctorsCard() {
    return (
        <div>
            <h2>Add Doctors</h2>
            <div className="doc-card">
                <div className="card-left">
                    <div className="doc-img">
                        <img src= {DocImage} alt=""/>
                    </div>
                    <div className="doc-details">
                        <h4>Jaya</h4>
                        <div className="doc-detail">
                            <p>Gyno</p>
                            <p>,MS</p>
                        </div>
                        <div className="doc-avaibility">
                            <DocAvaibility />
                        </div>
                    </div>
                </div>
                <div className="card-right">
                    <div className="options">
                        <p><button>delete</button></p>
                        <p><button>edit</button></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DoctorsCard

import React from 'react'
import Header from './Header'
import DepartDisplayer from './DepartDisplayer'
import DoctorsCard from './DoctorsCard'
import DoctorsInput from './DoctorsInput'
function Hospital() {
    return (
        <div>
            <Header />
            <DepartDisplayer />
            <DoctorsCard />
            <DoctorsInput />
        </div>
    )
}

export default Hospital

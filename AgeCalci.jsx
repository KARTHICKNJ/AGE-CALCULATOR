import React, { useState } from 'react'
import './Age.css';

const AgeCalci = () => {
    const [birthdate,setBirthdate]=useState('');
    const [age,setAge]=useState(0);

    const calculateage = ()=>{
        const today= new Date();
        const date1 = new Date(birthdate);

        let age=today.getFullYear()  - date1.getFullYear();
        const month =today.getMonth()-date1.getMonth();
        if(month<0||(month ===0 && today.getDate()<date1.getDate())){
            age--;
        }
        setAge(age);
    }
    const reset = ()=>{
        setBirthdate('');
        setAge(0);
    }

  return (
    <div className="container">
        <h1 className="header">AGE CALCULATOR</h1>
        <p className="para">This age calculator has been designed to calculate your current age based on the input provided in the 'Date of Birth' field</p>
        <div className="container_middle">

            <div className="right">
                <h4>DATE OF BIRTH</h4>
                <input type="date" className='date' value={birthdate} onChange={(e)=>setBirthdate(e.target.value)} />
                <div className="div_button">
                    <button className="buttons" onClick={calculateage}>Calculate Age</button>
                    <button className="buttons" onClick={reset} >Reset</button>

                </div>


            </div>

            <div className="left">
                <div className="leftside">
                    <h1>YOUR AGE IS</h1>
                    <h1>{age>0?`${age}`:''}</h1>
                </div>


            </div>


        </div>
    
    </div>
  )
}

export default AgeCalci
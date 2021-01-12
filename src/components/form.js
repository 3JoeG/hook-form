import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [FormInfo, setFormInfo] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        Confirm:""
    });


    
const ReturnInfo =(e)=>{
    setFormInfo({...FormInfo,[e.target.name]:e.target.value})
}

    return(
        <>
        <form>
            <div>
                <label>Firstname: </label> 
                <input type="text" name="FirstName" onChange={ReturnInfo} value={FormInfo.value} />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" name="LastName" onChange={ReturnInfo} value={FormInfo.value}/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" name="Email" onChange={ReturnInfo} value={FormInfo.value}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="Password" onChange={ReturnInfo} value={FormInfo.value}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="Confirm" onChange={ReturnInfo} value={FormInfo.value}/>
            </div>
   
        </form>
        <div>
            <p>First Name: {FormInfo.FirstName}</p>
            <p>Last Name: {FormInfo.LastName}</p>
            <p>Email: {FormInfo.Email}</p>
            <p>Password: {FormInfo.Password}</p>
            <p>Confirm Password: {FormInfo.Confirm}</p>
        </div>
        </>
    );
};

export default UserForm;
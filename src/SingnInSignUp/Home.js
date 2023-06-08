import React from 'react';
import './SignInSignUp.css';
// import registrationForm from './registrationForm';
function Home(){
    const SignIn=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const NewAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    const i={
        color: 'white'
    }
    
    return(
        <div className='head'>
            <button className='b'>Home Page</button>
            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <h1 style={i}>Wellcome {localStorage.getItem('name')}.....</h1>
            <button onClick={SignIn} className="SignIn">Sign-In</button>
            <button onClick={NewAccount} className="New">Create New Account</button>
                    
        </div>
    );
}
export default Home;
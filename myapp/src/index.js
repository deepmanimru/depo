import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function First(){
return <center><h1>REGISTRATION FORM</h1></center>}
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<First/>)
function Second(){
return<center><form action="">
                <label for="first"
                    >First Name:</label
                >
                <input
                    type="text"
                    id="first"
                    name="first"
                    required/>
<br></br>
                <label for="last"
                    >Last Name:</label>
               
                <input
                    type="text"
                    id="last"
                    name="last"
                    required
                /> <br></br>
 
                <label for="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                /> <br></br>

 
                <label for="password"
                    >Password:</label
                >
                <input
                    type="password"
                    id="password"
                    name="password"
                    pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
                    title="Password must contain at least one number,
                           one alphabet, one symbol, and be at
                           least 8 characters long"
                    required
                /> <br></br>

 
                <label for="repassword"
                    >Re-type Password:</label
                >
                <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    required
                /> <br></br>

 
                <label for="mobile"
                    >Contact:</label
                >
                <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    maxlength="10"
                    required
                /> <br></br>

 
                <label for="gender"
                    >Gender:</label
                >
                <select
                    id="gender"
                    name="gender"
                    required
                > <br></br>

                    <option value="male">
                        Male
                    </option>
                    <option value="female">
                        Female
                    </option>
                    <option value="other">
                        Other
                    </option>
                </select> <br></br>
<h2 id="MyHeading"></h2>

 
                <button type="submit">
                    Submit
                </button>
 
            </form></center>}
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Second/>)
reportWebVitals();

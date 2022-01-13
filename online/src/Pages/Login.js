import React, { useState } from 'react';
import './LoginStyle.css';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Axios from 'axios';





function Login(props) {

    const [name, setName] = useState("");
    const [MotherName, setMothername] = useState("");
    const [CNICno, setCNIC] = useState("");
    const [CNICissuedt, seselectedDate] = useState("");
    // const [CnicIssueDt, setCNICIssueDate] = useState(0);

    const userlogin = () => {
        Axios.post('http://localhost:3001/dashboard', {
            Name: name,
            Mothername: MotherName,
            CNIC: CNICno,
            selectedDate: CNICissuedt
        }).then(() => {
            console.log("scuessfuly login")
        });
    };

    const [selectedDate, handleDateChange] = useState(new Date());
    console.log(selectedDate)
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title"> Login</h2>
                            <form className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="Name">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    <input type="text" name="Name" id="Name" autoComplete="off" placeholder="Your Name"
                                        onChange={
                                            (event) => {
                                                setName(event.target.value);
                                            }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Mothername">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    <input type="text" name="Mothername" id="Mothername" autoComplete="off" placeholder="Mother Name"
                                        onChange={
                                            (event) => {
                                                setMothername(event.target.value);
                                            }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="CNIC">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    <input type="num" name="CNIC" id="CNIC" autoComplete="off" placeholder="XXXXX-XXXXXXX-X"
                                        onChange={
                                            (event) => {
                                                setCNIC(event.target.value);
                                            }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="CnicIssueDate" >
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    issue date
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            variant="inline"
                                            openTo="year"
                                            views={["year", "month"]}
                                            helperText="Start from year selection"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                        />
                                    </LocalizationProvider>
                                    

                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="CnicExpiryDate">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    expiry date
                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                        <DatePicker
                                            views={['year', 'month']}
                                            minDate={new Date('1947-01-01')}
                                            maxDate={new Date('2022-12-31')}
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                        />

                                    </LocalizationProvider>
                                </div> */}
                                <div className="form-button">
                                    <button onClick={userlogin}>Login</button>
                                    <NavLink to="/Signup" className="login-link">Not register? <span>Signup?</span> </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;



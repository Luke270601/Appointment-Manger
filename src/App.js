import './App.css';
import logo from './images/img.png';

function App() {
    return (
        <div className="Main">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="row row-cols-2">
                        <div className="col-5">
                            <img className="App-logo" src={logo}/>
                        </div>
                        <div className="col-1">
                            <span className="navbar-brand-font-size">Booking Management</span>
                        </div>
                    </div>
                    <button id="login" type="button" className="btn btn-outline-light">Login</button>
                </div>
            </nav>
            <header className="Main-header">
                <form className="appointment-form">
                    <label>Name:</label>
                    <input id="name" type="text"/><br/>
                    <label>Date of Appointment:</label>
                    <input id="appointmentDate" type="date"/><br/>
                    <label>Contact Information:</label>
                    <input id="contactInformation" type="text" placeholder="email/phone"/><br/>
                    <label>Appointment Options:</label>
                    <select id="selectedAppointment">
                        <option disabled selected>Select your option</option>
                        <option>Hair</option>
                        <option>Eyebrows</option>
                        <option>Nails</option>
                        <option>Eyelashes</option>
                    </select><br/>
                </form>
                <button id="submit" onClick={submitAppointment} type="button"
                        className="btn btn-outline-light m-2">Submit
                </button>
            </header>
        </div>
    )
        ;
}

function submitAppointment() {
    let phoneTest = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im;
    let emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let name = document.getElementById("name").value;
    let dateOfAppointment = document.getElementById("appointmentDate").value;
    let contactInformation = document.getElementById("contactInformation").value;
    let selectedAppointment = document.getElementById("selectedAppointment").value;

    if (name !== "" && name.length < 20) {
        if (dateOfAppointment !== "") {
            if (contactInformation !== "" && phoneTest.test(contactInformation)) {
                if (selectedAppointment !== "Select your option") {
                    alert("Appointment Booked")
                } else {
                    alert("Must select appointment")
                }
            } else if (contactInformation !== "" && emailTest.test(contactInformation)) {
                if (selectedAppointment !== "Select your option") {
                    alert("Appointment Booked")
                } else {
                    alert("Must select appointment")
                }
            }

            else {
                alert("Contact info invalid. Please try again")
            }
        } else {
            alert("Appointment date selected invalid")
        }
    } else {
        alert("Name invalid")
    }
}

export default App;

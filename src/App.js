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
                    <input type="text"/><br/>
                    <label>Date of Appointment:</label>
                    <input type="date"/><br/>
                    <label>Contact Information:</label>
                    <input type="text" placeholder="email/phone"/><br/>
                    <label>Appointment Options:</label>
                    <select>
                        <option disabled selected>Select your option</option>
                        <option>Hair</option>
                        <option>Eyebrows</option>
                        <option>Nails</option>
                        <option>Eyelashes</option>
                    </select><br/>
                </form>
                <button id="submit" type="button" className="btn btn-outline-light m-2">Submit</button>
            </header>
        </div>
    )
        ;
}


export default App;

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
                    <button type="button" className="btn btn-outline-light">Login</button>
                </div>
            </nav>
            <header className="Main-header">
            </header>

            <input type="text"/>
            <input type=""/>
            <input type="text"/>
            <input type="text"/>
        </div>
    );
}

export default App;

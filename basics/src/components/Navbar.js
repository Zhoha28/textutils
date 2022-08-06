import '../styles/Navbar.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid ">
                <a className="navbar-brand" href="/">{props.companyName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-right" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <Link className="nav-link" to="/about">About {props.companyName}</Link>
                        {/* <Link className="nav-link" to={`https://github.com/${props.userName}`}>Github</Link> */}

                    </div>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox"  id="flexSwitchCheckChecked" onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable dark mode</label>
                </div>

            </div>
        </nav>
    )
}


// typechecking for props
Navbar.propTypes = {
    companyName: PropTypes.string,
    userName: PropTypes.string
}

export default Navbar;


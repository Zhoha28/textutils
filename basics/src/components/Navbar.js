import '../styles/Navbar.css';
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid ">
                <a className="navbar-brand" href="/">{props.companyName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-right" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/about">About {props.companyName}</a>
                        <a className="nav-link" href={`https://github.com/${props.userName}`}>Github</a>

                    </div>
                </div>
            </div>
        </nav>
    )
}


// typechecking for props
Navbar.propTypes = {
    companyName : PropTypes.string,
    userName : PropTypes.string
}

export default Navbar;


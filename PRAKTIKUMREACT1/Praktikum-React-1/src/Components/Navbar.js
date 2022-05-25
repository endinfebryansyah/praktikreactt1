import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-primary navbar-light">
                <a className="navbar-brand" href="#">
                    Conversion App
                </a>

                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/bank" className="nav-link">
                                Bank
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/binary" className="nav-link">
                                Binary
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bmi" className="nav-link">
                                BMI
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ppn" className="nav-link">
                                PPN
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  static propTypes = {}

  render() {
    
    return (
      <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
       <Link className="navbar-brand" to="/general">News-App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
            
             <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/general">General</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
            </li>
           
            

                      

          </ul>
          
        </div>
      </div>
    </nav></div>
    )
  }
}

export default Navbar
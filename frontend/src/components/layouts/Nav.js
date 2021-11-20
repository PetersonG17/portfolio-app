import { Link } from 'react-router-dom';

function Nav() {

  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to='/'><i className="fas fa-laptop-code"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/skills'>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/projects'>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/certifications'>Certifications</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Nav;
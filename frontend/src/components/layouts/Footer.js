function Footer() {

  return (
      <footer className='footer fixed-bottom bg-dark'>
          <div className='container text-white pt-4 pb-4'>
            <div className="row">
                <div className="col">
                    <a href="https://www.linkedin.com/in/john-peterson-dev" target="_blank" className="text-white text-decoration-none">
                        {/* TODO: Why does the pr and pl not work in bootstrap? */}
                        <i className="fab fa-linkedin-in p-2"></i>
                        <p className="fw-light m-0 d-inline-block">www.linkedin.com/in/john-peterson-dev</p>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                </div>
            </div>
            <div className="row">
                <div className="col">
                    
                </div>
            </div>
          </div>
      </footer>
  );
}

export default Footer;
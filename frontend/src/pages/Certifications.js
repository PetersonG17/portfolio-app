import CertificationCard from "../components/CertificationCard";

function CertificationsPage() {
    return (
        <div className="container">
              <section className="py-1">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8">
                        <h1 className="fw-light">Certifications</h1>
                        <p className="lead text-muted">Below you will see all of the certifications that I have acheived.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div classNAme="col">
                        <CertificationCard></CertificationCard>
                    </div>
                    <div classNAme="col">
                        <CertificationCard></CertificationCard>
                    </div>
                    <div classNAme="col">
                        <CertificationCard></CertificationCard>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CertificationsPage;
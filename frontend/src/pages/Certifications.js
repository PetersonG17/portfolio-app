import CertificationCard from "../components/CertificationCard";

function CertificationsPage() {
    return (
        <div className="container">
            <section className="py-1">
                <div className="row py-lg-5">
                    <div className="col-lg-12">
                        <h1 className="fw-light">Certifications</h1>
                        <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Pellentesque massa placerat duis ultricies. At lectus urna duis convallis convallis tellus. Neque egestas congue quisque egestas diam in arcu cursus euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Amet mauris commodo quis imperdiet massa tincidunt. Integer enim neque volutpat ac tincidunt vitae semper. Lacus sed viverra tellus in hac habitasse platea. A cras semper auctor neque. Tellus molestie nunc non blandit massa enim nec dui. Ut etiam sit amet nisl. Gravida arcu ac tortor dignissim convallis. Ultricies mi eget mauris pharetra.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div classNAme="col">
                        <CertificationCard></CertificationCard>
                    </div>
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
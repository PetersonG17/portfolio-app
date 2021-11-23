
import SkillCard from "../components/SkillCard";

function SkillsPage() {
    return <div className="container">
                <section className="py-1">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8">
                            <h1 className="fw-light">Skills</h1>
                            <p className="lead text-muted">Listing of skills</p>
                        </div>
                    </div>
                </section>
                <div className="row">
                    <div className="col">
                        <SkillCard></SkillCard>
                    </div>
                    <div className="col">
                        <SkillCard></SkillCard>
                    </div>
                    <div className="col">
                        <SkillCard></SkillCard>
                    </div>
                    <div className="col">
                        <SkillCard></SkillCard>
                    </div>
                </div>
            </div>;
}

export default SkillsPage;
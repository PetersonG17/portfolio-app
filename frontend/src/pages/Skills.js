
import SkillCard from "../components/SkillCard";

function SkillsPage() {
    return <div className="container">
                <section className="py-1">
                    <div className="row py-lg-5">
                    <div className="col-lg-12">
                        <h1 className="fw-light">Skills</h1>
                        <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Pellentesque massa placerat duis ultricies. At lectus urna duis convallis convallis tellus. Neque egestas congue quisque egestas diam in arcu cursus euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent.</p>
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
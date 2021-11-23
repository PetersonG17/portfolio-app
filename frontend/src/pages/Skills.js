
import SkillCard from "../components/SkillCard";

function SkillsPage() {
    return <div className="container">
                <div className="row">
                    <div className="col">
                        Something about skills here.
                    </div>
                </div>
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
import '../App.css';

function SkillCard() {
    return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Skill Title</h5>
                    <div className="progress">
                        <div className="progress-bar w-75 purple-progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>;
}

export default SkillCard;
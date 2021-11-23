import '../App.css';
import classes from './CertificationCard.module.css';

function CertificationCard() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Certification Title</h5>
                <img src="https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png" className="card-img-top {classes.card-img}" alt="Solutions Architect"/>
                <div className="card-body">
                    <p className="card-text">Some sample text about the certification</p>
                    <a href="https://www.credly.com/badges/c07d8c41-6523-4d4f-809d-c06e5685ca60?source=linked_in_profile" className="btn btn-light text-success"><i class="far fa-check-circle pr-2 text-success"></i>Verify</a>
                </div>
            </div>
        </div>
    );
}

export default CertificationCard;
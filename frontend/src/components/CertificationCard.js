import '../App.css';
import classes from './CertificationCard.module.css';

function CertificationCard() {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">Certification</div>
            <div className="card-body">
                {/* TODO: Center this image and make it smaller */}
                <img src="https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png" className="card-img-top" alt="Solutions Architect"/>
                <div className="card-body">
                    <a href="https://www.credly.com/badges/c07d8c41-6523-4d4f-809d-c06e5685ca60?source=linked_in_profile" className="btn btn-secondary text-white" target="_blank" rel="noopener noreferrer"><i className="far fa-check-circle pe-1"></i>Verify</a>
                </div>
            </div>
        </div>
    );
}

export default CertificationCard;
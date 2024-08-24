import AreasOfExpertise from "./areas-of-expertise";
import Education from "./education";
import ProfessionalExperience from "./professional-experience";
import ProfileSummary from "./profile-summary";

export default function CVBody() {
    return (
        <div className="col-span-4 sm:col-span-9">
            <ProfileSummary />
            <ProfessionalExperience />
            <Education />
        </div>
    );
}

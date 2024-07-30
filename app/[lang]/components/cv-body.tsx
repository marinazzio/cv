import AreasOfExpertise from "./areas-of-expertise";
import Education from "./education";
import ProfessionalExperience from "./professional-experience";
import ProfileSummary from "./profile-summary";

export default function CVBody() {
    return (
        <div className="mt-6">
            <ProfileSummary />
            <AreasOfExpertise />
            <ProfessionalExperience />
            <Education />
        </div>
    );
}

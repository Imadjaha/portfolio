import SOCIAL_PROFILES from "../../data/socialProfiles";
import Image from "next/image";
function SocialProfiles() {
  return (
    <div style={{ textAlign: "center" , marginBottom: 50}}>
      <h3>Contact Me</h3>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
    {SOCIAL_PROFILES.map((PROFILE) => (
      <SocialProfile key={PROFILE.id} {...PROFILE} />
    ))}
  </div>
</div>
  );
}

export default SocialProfiles;

function SocialProfile({ link, image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image
        className="social-icon"
        src={image}
        alt="social profile"
        style={{ width: 30, height: 30, margin: 10 , cursor:"pointer",}}
      />
    </a>
  );
}

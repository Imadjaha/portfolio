import SOCIAL_PROFILES from "../../data/socialProfiles"
import Image from "next/image"
function SocialProfiles() {
  return (
    <div style={{ textAlign: "center"}}>
      <h3>Contact Me</h3>
      {
        SOCIAL_PROFILES.map(PROFILE =>{
          return <SocialProfile key={PROFILE.id} {...PROFILE} />
        })
        }
      
    </div>
  )
}

export default SocialProfiles


function SocialProfile({link, image}) {
  return (
  
      <a href={link} target="_blank" rel="noreferrer">
        <Image className="social-icon" src={image} alt="social profile" style={{width:30,height:30, margin:10 }} />
      </a>
   
  )
}


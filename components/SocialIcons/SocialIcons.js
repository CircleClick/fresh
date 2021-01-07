import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faInstagram, faTwitter, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import styles from './SocialIcons.module.css'

config.autoAddCss = false;
library.add(faLink, faInstagram, faTwitter, faLinkedin, faGithub, faFacebook);

const icons = {
  web: ['fas', 'link'],
  instagram: ['fab', 'instagram'],
  twitter: ['fab', 'twitter'],
  linkedin: ['fab', 'linkedin'],
  github: ['fab', 'github'],
  facebook: ['fab', 'facebook'],
};

export function SocialIcon({platform}) {
  return (
    <FontAwesomeIcon icon={icons[platform]} />
  );
}

export default function SocialIcons({ socialLinks = [], newWindow = false }) {
  return (
    <>
    {socialLinks.map(socialLink => (
      <a 
        href={socialLink.url}
        key={socialLink.url}
        target={newWindow ? '_blank' : '_self'}
        className={styles.icon}>
        <SocialIcon platform={socialLink.platform}/>
      </a>
    ))}
    </>
  );
}
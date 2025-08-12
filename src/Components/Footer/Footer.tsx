import FacebookIcon from '../../assets/Facebook Icon.png';
import TwitterIcon from '../../assets/Twitter Icon.png';
import InstagramIcon from '../../assets/Instagram Icon.png';
import BehanceIcon from '../../assets/Behance Icon.png';

import { 
    FooterContainer, 
    SectionFooter, 
    PrimaryFooter,
    SecondaryFooter, 
    CircleFooter, 
    SectionSecondary,
    FooterContent,
    NavList,
    LineFooter,
    IconsFooter,
    FooterBottom
} from './styles'


const socialLinks = [
  { href: '#', icon: FacebookIcon, alt: 'Facebook' },
  { href: '#', icon: TwitterIcon, alt: 'Twitter' },
  { href: '#', icon: InstagramIcon, alt: 'Instagram' },
  { href: '#', icon: BehanceIcon, alt: 'Behance' }
];

const navLinks = ["About Company", "Our Careers", "Services", "Contact"];

export default function Footer() {
  return (
    <FooterContainer>
      <SectionFooter>
        <PrimaryFooter>
          <h1>Let's Create <br />Something Great</h1>
          <p>We shift you from today’s reality to tomorrow’s potential, ensuring</p>
        </PrimaryFooter>
        <SecondaryFooter>
          <CircleFooter>Let’s Talk</CircleFooter>
        </SecondaryFooter>
      </SectionFooter>

      <SectionSecondary>
        <FooterContent>
          <NavList>
            {navLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </NavList>

          <NavList>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </NavList>
        </FooterContent>

        <LineFooter />

        <FooterBottom>
          <IconsFooter>
            {socialLinks.map(({ href, icon, alt }, index) => (
              <a key={index} href={href}>
                <img src={icon} alt={`${alt} icon`} />
              </a>
            ))}
          </IconsFooter>

          <p>Copyright © 2025 Nex. All Rights Reserved.</p>
        </FooterBottom>
      </SectionSecondary>

    </FooterContainer>
  );
}

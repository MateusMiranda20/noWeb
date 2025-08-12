import { 
    HeaderContainer, 
    NavBar, 
    LogoWrapper, 
    NavMenu, 
    NavActions, 
    HeroSection, 
    HeroLeft, 
    HeroTitle, 
    HeroSubtitle, 
    HeroRight, 
    ServiceButton, 
    ReviewSection,
    ReviewAvatarsWrapper,
    ReviewText, 
    HeroCenter
} from './styles';

import LogoIcon from '../../assets/Vector.png';
import LogoText from '../../assets/Nexin.png';
import SearchIcon from '../../assets/Search.png';
import QuoteButton from '../../assets/Get A Quote.png';
import AvatarImage from '../../assets/image.png';
import ReviewAvatars from '../../assets/Avatar.png';

import CepModal from '../CepModal/cepModal'

import { useState } from 'react'

export default function Header() {

  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <HeaderContainer>
        <NavBar>
          <LogoWrapper>
            <img src={LogoIcon} alt="Nexin Logo Icon" />
            <img src={LogoText} alt="Nexin Logo Text" />
          </LogoWrapper>

          <NavMenu>
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </NavMenu>

          <NavActions>
            <div className='search' onClick={() => setModalOpen(true)} style={{cursor: 'pointer'}}>
                <img src={SearchIcon} alt="Search" />
            </div>
            <button>
              <img src={QuoteButton} alt="Get a Quote" />
            </button>
          </NavActions>
        </NavBar>
      </HeaderContainer>

      <HeroSection>
        <HeroLeft>
          <small>Great Design Services Without the Pretentiousness!</small>
          <HeroTitle>Digital</HeroTitle>
          <HeroSubtitle>
            <img src={AvatarImage} alt="Avatar" />
            <h1>Solution</h1>
          </HeroSubtitle>
        </HeroLeft>
        <HeroCenter>
            <p>
                We believe that the surest measure of success is when our partners win.
                It's more than just the visual, we're here to support your growth.
            </p>
            <ServiceButton>
                View All Services <span>↗</span>
            </ServiceButton>
        </HeroCenter>
        <HeroRight>
            <ReviewSection>
                <ReviewAvatarsWrapper>
                <img src={ReviewAvatars} alt="Customers" />
                </ReviewAvatarsWrapper>
                <ReviewText>
                Excellent <strong>4,000+</strong> Reviews
                </ReviewText>
            </ReviewSection>
            </HeroRight>
      </HeroSection>
      <CepModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}

import {AboutSection, AboutHeader, AboutGrid, AboutCard, PartnersSection, DividerTitle} from './styles'

import Ellipses from '../../assets/Ellipses.png'
import Tech from '../../assets/Group.png'
import Technology from '../../assets/Techno.png'
import Technology2 from '../../assets/Technolo.png'
import Technology3 from '../../assets/Techno4.png'
import Isolation from '../../assets/Isolation Mode.png'

function About() {
  return (
    <>
     <AboutSection>
            <AboutHeader>
                <h2>
                We Collaborate With A Few Disability Service Providers To Create
                Inclusive Goods That Meet Their Requirements.
                </h2>
                <img src={Ellipses} alt="Ellipses decoration" />
            </AboutHeader>

            <AboutGrid>
                <AboutCard>
                <h2>25+</h2>
                <span>Years Of Experience</span>
                </AboutCard>

                <AboutCard>
                <p>
                    Established in 1995, NEXIN has been a leading force in the digital
                    landscape for over two decades. We're a passionate team of designers.
                </p>
                <a href="#">More About Us →</a>
                </AboutCard>

                <AboutCard>
                <p>
                    Established in 1995, NEXIN has been a leading force in the digital
                    landscape for over two decades. We're a passionate team of designers.
                </p>
                <a href="#">Get In Touch →</a>
                </AboutCard>
            </AboutGrid>

            <PartnersSection>
                <DividerTitle>We Worked With Global Largest Brands</DividerTitle>
                <div className="logos-row">
                <img src={Tech} alt="Tech Logo" />
                <img src={Technology} alt="Technology" />
                <img src={Technology2} alt="Technology" />
                <img src={Technology3} alt="Technology" />
                <img src={Isolation} alt="System" />
                </div>
            </PartnersSection>
        </AboutSection>
    </>
  )
}

export default About

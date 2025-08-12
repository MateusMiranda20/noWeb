import {AboutSection, AboutHeader, AboutGrid, AboutCard, PartnersSection, DividerTitle} from './styles'

function About() {
  return (
    <>
     <AboutSection>
            <AboutHeader>
                <h2>
                We Collaborate With A Few Disability Service Providers To Create
                Inclusive Goods That Meet Their Requirements.
                </h2>
                <img src="/src/assets/Ellipses.png" alt="Ellipses decoration" />
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
                <img src="/src/assets/Group.png" alt="Tech Logo" />
                <img src="/src/assets/Techno.png" alt="Technology" />
                <img src="/src/assets/Technolo.png" alt="Technology" />
                <img src="/src/assets/Techno4.png" alt="Technology" />
                <img src="/src/assets/Isolation Mode.png" alt="System" />
                </div>
            </PartnersSection>
        </AboutSection>
    </>
  )
}

export default About

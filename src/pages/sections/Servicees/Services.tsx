import {ServicesSection, ServicesHeader, ServicesGrid, ServiceItem, StatsGrid, StatCircle} from './styles'

import Shape from '../../../assets/shape.png'

export default function Services() {
  return (
    <>
        <ServicesSection>
            <ServicesHeader>
                <span className="subtitle"><img src={Shape} alt="logo" /> Services</span>
                <div className='header-services'>
                    <h2>Empowering Brands Through <br/> Strategic Digital Services</h2>
                </div>
                <p>
                    Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades...
                </p>
            </ServicesHeader>

            <ServicesGrid>
                <ServiceItem>
                    <span className="category">Visual Branding</span>
                    <h3>Web Design And Development</h3>
                    <img src="/src/assets/Vector02.png" alt="Web design icon" />
                    <p>Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate</p>
                </ServiceItem>

                <ServiceItem>
                    <span className="category">Brand Strategy</span>
                    <h3>Branding And Creative Services</h3>
                    <img src="/src/assets/Vector01.png" alt="Branding icon" />
                    <p>Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate</p>
                </ServiceItem>

                <ServiceItem>
                    <span className="category">Identity Build</span>
                    <h3>Creative Digital Agency</h3>
                    <img src="/src/assets/Vector03.png" alt="Creative agency icon" />
                    <p>Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate</p>
                </ServiceItem>
            </ServicesGrid>

            <StatsGrid>
                <StatCircle>
                <strong>35k+</strong>
                <span>Project Complete</span>
                </StatCircle>
                <StatCircle>
                <strong>10k+</strong>
                <span>Happy Customers</span>
                </StatCircle>
                <StatCircle>
                <strong>25+</strong>
                <span>Years Experience</span>
                </StatCircle>
                <StatCircle>
                <strong>88</strong>
                <span>Awards Achievement</span>
                </StatCircle>
            </StatsGrid>
        </ServicesSection>
    </>
  )
}



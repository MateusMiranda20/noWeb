import {
    SectionWork,
    TitleWork,
    StepWrapper,
    Line,
    StepNumber,
    Section,
    WorkAbout,
    SectionTwo,
    ColumnOne,
    Img,
    ColumnTwo,
    ColumnThree
} from './styles'

import Shape from '../../../assets/shape.png'
import Icon1 from '../../../assets/icon1.png'
import Icon2 from '../../../assets/icon2.png'
import Icon from '../../../assets/icon.png'
import TeamWork from '../../../assets/Team_work.png'
import TeamTime from '../../../assets/team-time.png'
import ButoonText from '../../../assets/Button Text.png'
import IconCard1 from '../../../assets/icon-card01.png'
import IconCard2 from '../../../assets/icon-card02.png'


function Work() {
    return (
        <>
            <SectionWork>
                <TitleWork>
                    <Img><img src={Shape} alt="" />WORKFLOW</Img>
                    <h2>How We Work</h2>
                </TitleWork>
                <Section>
                    <WorkAbout>
                        <StepWrapper>
                            <img src={Icon1} alt="Ícone foguete" />
                            <Line />
                            <StepNumber>01</StepNumber>
                        </StepWrapper>
                        <h3>Research and Strategy</h3>
                        <p>Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks</p>
                    </WorkAbout>
                    <WorkAbout>
                        <StepWrapper>
                            <img src={Icon2} alt="Ícone foguete" />
                            <Line />
                            <StepNumber>02</StepNumber>
                        </StepWrapper>
                        <h3>Plan Customization</h3>
                        <p>Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks</p>
                    </WorkAbout>
                    <WorkAbout>
                        <StepWrapper>
                            <img src={Icon} alt="Ícone foguete" />
                            <Line />
                            <StepNumber>03</StepNumber>
                        </StepWrapper>
                        <h3>Finish & User Testing</h3>
                        <p>Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks</p>
                    </WorkAbout>
                </Section>

                <SectionTwo>
                    <ColumnOne>
                        <div>
                            <Img> <img src={Shape} alt="" /> WHAT SETS US APART</Img>
                            <h2>Driving Digital Success With Strategy Design</h2>
                            <p>We Believe That The Surest Measure...</p>
                        </div>
                        <img src={TeamWork} alt="Team working" />
                    </ColumnOne>

                    <ColumnTwo>
                        <div className="image-block">
                            <img src={TeamTime} alt="Meeting" />
                        </div>
                        <div className="image-block">
                            <p>Conduct thorough market research to the fast target audience behaviours. Submit as many design tasks</p>
                        </div>

                        <button className="image-block"><img src={ButoonText} alt="" /></button>
                    </ColumnTwo>

                    <ColumnThree>
                        <div className="mission">
                            <p>We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.</p>
                            <br />
                            <p>We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.</p>
                        </div>

                        <div className="mission">
                            <h3>Our Mission</h3>
                            <p>Conduct thorough market research...</p>
                        </div>

                        <div className="icon">
                            <div className='icon-card'>
                                <img src={IconCard1} alt="Marketing" />
                                <span>Marketing Strategy</span>
                            </div>
                            <div className='icon-card'>
                                <img src={IconCard2} alt="UI/UX" />
                                <span>UX/UI Solution</span>
                            </div>
                        </div>
                    </ColumnThree>
                </SectionTwo>
            </SectionWork>
        </>
    )
}

export default Work

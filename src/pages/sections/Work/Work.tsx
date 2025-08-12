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




function Work() {
    return (
        <>
            <SectionWork>
                <TitleWork>
                    <Img><img src="/src/assets/shape.png" alt="" />WORKFLOW</Img>
                    <h2>How We Work</h2>
                </TitleWork>
                <Section>
                    <WorkAbout>
                        <StepWrapper>
                            <img src="/src/assets/icon1.png" alt="Ícone foguete" />
                            <Line />
                            <StepNumber>01</StepNumber>
                        </StepWrapper>
                        <h3>Research and Strategy</h3>
                        <p>Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks</p>
                    </WorkAbout>
                    <WorkAbout>
                        <StepWrapper>
                            <img src="/src/assets/icon2.png" alt="Ícone foguete" />
                            <Line />
                            <StepNumber>02</StepNumber>
                        </StepWrapper>
                        <h3>Plan Customization</h3>
                        <p>Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks</p>
                    </WorkAbout>
                    <WorkAbout>
                        <StepWrapper>
                            <img src="/src/assets/icon.png" alt="Ícone foguete" />
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
                            <Img> <img src="/src/assets/shape.png" alt="" /> WHAT SETS US APART</Img>
                            <h2>Driving Digital Success With Strategy Design</h2>
                            <p>We Believe That The Surest Measure...</p>
                        </div>
                        <img src="/src/assets/Team_work.png" alt="Team working" />
                    </ColumnOne>

                    <ColumnTwo>
                        <div className="image-block">
                            <img src="/src/assets/team-time.png" alt="Meeting" />
                        </div>
                        <div className="image-block">
                            <p>Conduct thorough market research to the fast target audience behaviours. Submit as many design tasks</p>
                        </div>

                        <button className="image-block"><img src="/src/assets/Button Text.png" alt="" /></button>
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
                                <img src="/src/assets/icon-card01.png" alt="Marketing" />
                                <span>Marketing Strategy</span>
                            </div>
                            <div className='icon-card'>
                                <img src="/src/assets/icon-card02.png" alt="UI/UX" />
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

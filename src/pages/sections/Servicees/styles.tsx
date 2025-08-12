import styled from 'styled-components'

export const ServicesSection = styled.section`
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 8rem);
  background-color: #fff;
  color: #000;
`;

export const ServicesHeader = styled.header`
    gap: 4rem;
    margin-bottom: 4rem;
    padding: 2rem 11rem;
    align-items: start;
    
    .header-services{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        margin-bottom: 10px;
    }

    .subtitle {
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: bold;
        margin-left: 8rem;
        color: #555;
    }

  h2 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: bold;
    line-height: 1.2;
    margin: 0.5rem 0;
  }

  p {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
    margin-left: 20rem;
    width: 40%;
  }

  @media (max-width: 900px) {
    .header-services{
        display: flex;
        text-align: center;
        margin-bottom: 10px;
    }

    p {
    color: #666;
    font-size: 1rem;
    text-align: center;
    line-height: 1.6;
    margin: 0;
    width: 360px;
  }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const ServiceItem = styled.article`
  padding: 2rem;
  border: 1px solid #bff747;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.3s ease;

  .category {
    display: block;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  img {
    margin: 1rem 0;
    max-width: 50px;
  }

  p {
    color: #555;
    font-size: 0.95rem;
    margin-top: 0.8rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const StatsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StatCircle = styled.div`
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.3);
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    margin-left: -20px;

    &:first-child {
        margin-left: 0;
    }

  strong {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #000;
  }

  span {
    font-size: 0.9rem;
    color: #555;
  }
`;

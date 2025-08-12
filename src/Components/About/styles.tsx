import styled from "styled-components"

export const AboutSection = styled.section`
  background-color: #111;
  color: #fff;
  padding: 4rem 2rem;
`;

export const AboutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 3rem;
  gap: 2rem;

  h2 {
    max-width: 480px;
    line-height: 1.4;
    font-size: clamp(1.5rem, 2vw, 2rem);
  }

  img {
    max-height: 80px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  span {
    font-size: 1rem;
    color: #aaa;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #bff747;
    }
  }
`;

export const DividerTitle = styled.h2`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  gap: 1rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #555;
  }
`;

export const PartnersSection = styled.div`
  margin-top: 3rem;
  text-align: center;

  .logos-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3rem;

    img {
      max-height: 40px;
      filter: grayscale(100%);
      transition: filter 0.3s ease;
      &:hover {
        filter: grayscale(0%);
      }
    }
  }
`;

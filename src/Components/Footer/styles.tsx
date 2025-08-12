import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #111; 
  color: #fff;
`;

export const SectionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem 5rem;
`;

export const PrimaryFooter = styled.div`
  flex: 1;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

export const SecondaryFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const CircleFooter = styled.button`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #BFF747;
  border: none;
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SectionSecondary = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 2rem 9rem;
  color: #000;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;

  li {
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #bff747;
    }
  }
`;

export const LineFooter = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 1.5rem 0;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    font-size: 0.85rem;
    opacity: 0.7;
  }
`;

export const IconsFooter = styled.div`
  display: flex;
  gap: 1rem;

  a img {
    width: 15px;
    height: 15px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

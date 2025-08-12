import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 1rem 3rem;
  border-bottom: 1px solid #eee;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

    img{
        height: 30px;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  li {
    cursor: pointer;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #ff5a5f;
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .search{
    img{
        height: 35px;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

/* Hero section */
export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 3rem 8rem;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  max-width: 50%;

  small {
    color: #888;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 6rem;
  margin: 1rem;
`;

export const HeroSubtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img{
    width: 60%;
    height: auto;
  }

  h1{
      font-size: 6rem;
  }
    
  @media (max-width: 900px) {
    display: flex ;
    align-items: center;
    flex-direction: column;
  }
`;

export const HeroRight = styled.div`
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: #000;
    font-size: 1rem;
    line-height: 1.6;

  }
`;

export const HeroCenter = styled.div`
  font-size: 0.9rem;
  margin-top: 3.5rem;

  p{
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
    padding: 0 2rem;
  }

  strong {
    font-weight: 700;
  }

`;

export const ServiceButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: 0.2s ease;
  margin-left: 17rem;
  margin-top: 10px;

  span {
    font-size: 1.2rem;
  }

  &:hover {
    border-color: #000;
  }

   @media (max-width: 900px) {
    margin-left: 0;
  }
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  width: 160;
`;

export const ReviewAvatarsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem;
  background-color: #fff;
  border-radius: 50px;
  border: 1px solid #ccc;

  img {
    height: 40px;
    object-fit: contain;
  }
`;

export const ReviewText = styled.span`
  font-size: 0.9rem;

  strong {
    font-weight: 700;
  }
`;

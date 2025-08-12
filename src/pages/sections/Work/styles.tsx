import styled from 'styled-components'

export const SectionWork = styled.div`
    width:100%;
    margin-top: 5rem;
`;

export const TitleWork = styled.div`
    text-align: center;
    
    p{
        margin: 1rem;
        font-size: 1rem;
        color: #797e88;
        font-weight: 700;
        font-style: Bold;
    }

    h2{
        font-size: 3rem;
    }
`

export const StepWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;;

    img{
        width: 50px;
        height: 51px;
    }
`;

export const Line = styled.div`
    flex: 1;
    height: 1px;
    background-color: black;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border-left: 8px solid black; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }
`;

export const StepNumber = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.3);
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5rem;
    gap: 3rem;
    margin: 5rem 0;
`

export const WorkAbout = styled.div`
    width: 400px;
`

export const SectionTwo = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* 3 colunas */
  gap: 2rem;
  padding: 4rem 3rem;
  align-items: start;
  background-color:#F8F8F8;

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* empilha no mobile */
  }
`;

export const ColumnOne = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

img {
    width: 90%;
    object-fit: cover;
}

h2{
    font-weight: 400;
    font-style: Regular;
    font-size: 54px;
    line-height: 64px;
    letter-spacing: 0%;
    text-transform: capitalize;
    margin-bottom: 1rem;
}

p{
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0%;
    text-transform: capitalize;
    color: #797E88;
}
`;

export const Img = styled.div`
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: #797E88;
    
    img{
        width: 20px;
        margin-right: 10px;
    }
`;

export const ColumnTwo = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

button{
    width: 80px;
    height: 80px;
    padding: 0.3rem;
    border-radius: 50%;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    font-size: 0.9rem;
}

.image-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    img {
        width: 100%;
        object-fit: cover;
    }

    p {
        font-size: 0.9rem;
        color: #555;
        line-height: 23px;
    }
}
`;

export const ColumnThree = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;

  .mission {
    margin-bottom: 3rem;

    h3 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-top: 4rem;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-transform: capitalize;
      color: #797e88;
    }
  }

  .icon {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
  }

  .icon-card {
    background: #d3ff6a;
    border-radius: 26px;
    padding-top: 3rem;
    text-align: center;
    height: 121px;
    width: 123px;
    position: relative;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
    }

        span {
        display: block;
        margin-top: 1rem;
        font-weight: bold;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;

    .mission{
        h3{
            text-align: center;
        }
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;

    .mission{
        h3{
            text-align: center;
        }
    }
  }
  
`;
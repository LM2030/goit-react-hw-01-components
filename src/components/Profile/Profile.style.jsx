import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: white;
  display: block;
  width: 300px;
  margin: 20px auto;
  }
`;

export const Text = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
text-align: center;
`;

export const UserName = styled.p`
  color: black;
  font-size: 30px;
  font-weight: 700;
`;

export const InfoUser = styled.p`
  font-weight: 500;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: blue;

`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  width: calc(100% / 3);
  padding: 20px;
`;

export const LabelStats = styled.span`
color: #fff;
font-weight: 500;
font-size: 15px;
`;

export const Quantity = styled.span`
color: #fff;
font-weight: 700;
font-size: 18px;
`;

import styled from "styled-components";

const BackgroundGreen = styled.div`
  background-color: rgb(61, 167, 81); //#b1b1b1;
  color: white;
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.3s;
`;

const BackgroundYellow = styled.div`
  background-color: rgb(252, 146, 18); //#b1b1b1;
  color: white;
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.3s;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

export const StatusOperational = () => (
  <BackgroundGreen>
    <Title>All Systems Operational</Title>
  </BackgroundGreen>
);

export const StatusPartialOutage = () => (
  <BackgroundYellow>
    <Title>Some Systems Have Outages</Title>
  </BackgroundYellow>
);

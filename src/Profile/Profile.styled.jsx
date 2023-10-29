import styled from '@emotion/styled';

export const ContainerProfile = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  width: 370px;
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgAvatar = styled.img`
  width: 300px;
  box-shadow: 0 0 3px 0px #0000004d;
  border-radius: 50%;
  background-color: #e7eeeeed;
  padding: 20px 10px 0px 10px;
  margin-bottom: 15px;
`;

export const ProfName = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
`;

export const ProfTag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 15px;
`;

export const ProfLocation = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 15px;
`;

export const UlStats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
  background-color: #6ea0fd;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const LiStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
`;

export const SpanLabel = styled.span`
  margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const SpanQuantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;

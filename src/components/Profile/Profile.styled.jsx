import styled from 'styled-components';

export const ProfileBox = styled.div`
  margin: 0 auto;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
`;

export const Avatar = styled.img`
  width: 120px;
  border: 2px solid #000;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  width: 150px;
  height: auto;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  color: #737373;
`;

export const Location = styled.p`
  font-weight: 500;
  color: #737373;
`;

export const StatsBox = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  border-top: 1px solid #737373;
  padding: 15px 10px;
  background-color: #cedadb;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid #737373;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
  color: #737373;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;

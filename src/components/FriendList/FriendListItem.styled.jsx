import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Avatar = styled.img`
  width: 60px;
  margin-right: 20px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Span = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
  margin-right: 20px;
`;

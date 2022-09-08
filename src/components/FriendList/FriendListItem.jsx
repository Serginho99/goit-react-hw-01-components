import PropTypes from 'prop-types';
import { Item, Name, Avatar, Span } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Span isOnline={isOnline}>{isOnline}</Span>
      <Avatar src={avatar} alt={`${name} avatar`} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

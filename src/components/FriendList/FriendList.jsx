import PropTypes from 'prop-types';
import { FriendListBox } from './FriendList.styled';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <FriendListBox>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListBox>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
    })
  ).isRequired,
};

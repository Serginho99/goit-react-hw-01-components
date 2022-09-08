import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import {
  ProfileBox,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsBox,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileBox>
      <Description>
        <Avatar src={avatar} alt={`${username} avatar`} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>{' '}
      </Description>
      <StatsBox>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsBox>
    </ProfileBox>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

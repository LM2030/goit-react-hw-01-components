import {
  Container,
  Text,
  UserName,
  InfoUser,
  StatsList,
  ItemStats,
  LabelStats,
  Quantity,
} from './Profile.style.jsx';
import PropTypes from 'prop-types';

function Profile({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
) {
  return (
    <Container>
      <Text>
        <img src={avatar} alt={username} className="avatar"/>

        <UserName>{username}</UserName>
        <InfoUser>{tag}</InfoUser>
        <InfoUser>{location}</InfoUser>
      </Text>

      <StatsList>
        <ItemStats>
          <LabelStats>Followers</LabelStats>
          <Quantity>{followers}</Quantity>
        </ItemStats>
        <ItemStats>
          <LabelStats>Views</LabelStats>
          <Quantity>{views}</Quantity>
        </ItemStats>
        <ItemStats>
          <LabelStats>Likes</LabelStats>
          <Quantity>{likes}</Quantity>
        </ItemStats>
      </StatsList>
    </Container>
  );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };


export { Profile };

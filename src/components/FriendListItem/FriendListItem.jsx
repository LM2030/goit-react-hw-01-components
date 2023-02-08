import PropTypes from 'prop-types';
import {
    Item,
    Status,
    Name,
} from './FriendListItem.style'

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <img className='avatar' src={avatar} alt={name} width="100" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };
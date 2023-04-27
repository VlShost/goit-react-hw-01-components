import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

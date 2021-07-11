import React from 'react';
import defaultAvatar from "./defaultAvatar.png";
import PropTypes from 'prop-types';
import './Profile-card.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
      return(
            <div class="profile">
                <div class="description">
                    <img
                    src={avatar}
                    alt={name}
                    class="avatar"
                    />
                    <p class="name">{name}</p>
                    <p class="tag">{tag}</p>
                    <p class="location">{location}</p>
                </div>

        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </li>
        </ul>
        </div>
      );
};

Profile.defaultProps = {
    avatar: defaultAvatar,
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,
}

export default Profile;
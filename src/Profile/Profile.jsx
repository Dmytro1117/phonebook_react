import PropTypes from 'prop-types';
import {
  ContainerProfile,
  ContainerDescription,
  ImgAvatar,
  ProfName,
  ProfTag,
  ProfLocation,
  UlStats,
  LiStats,
  SpanLabel,
  SpanQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ContainerProfile>
      <ContainerDescription>
        <ImgAvatar src={avatar} alt={username} />
        <ProfName>{username}</ProfName>
        <ProfTag>@{tag}</ProfTag>
        <ProfLocation>{location}</ProfLocation>
      </ContainerDescription>

      <UlStats>
        <LiStats>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{stats.followers}</SpanQuantity>
        </LiStats>
        <LiStats>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{stats.views}</SpanQuantity>
        </LiStats>
        <LiStats>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{stats.likes}</SpanQuantity>
        </LiStats>
      </UlStats>
    </ContainerProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

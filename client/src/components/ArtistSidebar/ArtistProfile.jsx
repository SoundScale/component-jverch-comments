import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from './styledArtist';
import PremiumPlan from './premiumPlan.jsx';
import FollowButton from './FollowButton.jsx';

class ArtistProfile extends React.Component {
  constructor(props) {
    super(props);
    const { artist } = props;
    this.state = {artist};
    this.changeFollowStatus = this.changeFollowStatus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { artist } = this.props;
    console.log(nextProps.artist);
    if (nextProps.artist !== artist) {
      this.setState({ 
        artist: nextProps.artist,
        followStatus: nextProps.artist.followStatus,
      });
    }
  }

  changeFollowStatus() {
    this.setState((previousState) => {
      return {
        artist: {
          ...previousState.artist,
          followStatus: !previousState.artist.followStatus,
        },
      };
    });
  }

  render() {
    const { artist } = this.state;
    const { Avatar } = styledComponents;
    const { ProfileDiv } = styledComponents;
    const { ArtistContentDiv } = styledComponents;
    const { ArtistNameStatus } = styledComponents;
    const { ArtistName } = styledComponents;
    const { FollowerTracksRow } = styledComponents;
    const { FollowerIcon } = styledComponents;
    const { FollowerCount } = styledComponents;
    const { TracksIcon } = styledComponents;
    const { TracksCount } = styledComponents;
    return (
      <ProfileDiv>
        <Avatar src={artist.dp} alt="Avatar" id="dp" />
        <ArtistContentDiv>
          <ArtistNameStatus>
            <ArtistName>{artist.userName}</ArtistName>
            <PremiumPlan premium={artist.premium} />
          </ArtistNameStatus>
        </ArtistContentDiv>
        <FollowerTracksRow>
          <FollowerIcon />
          <FollowerCount>{artist.followers}</FollowerCount>
          <TracksIcon />
          <TracksCount>{artist.numTracks}</TracksCount>
        </FollowerTracksRow>
        <div>
          <FollowButton followStatus={artist.followStatus} changStatus={this.changeFollowStatus} />
        </div>
      </ProfileDiv>
    );
  }
}

ArtistProfile.propTypes = {
  artist: PropTypes.object,
};

export default ArtistProfile;

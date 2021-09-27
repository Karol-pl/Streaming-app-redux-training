import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { StyledButtonSmall } from "../../style/Button.style";
import {
  Title,
  ListContainer,
  ListItemContainer,
  ContentContainer,
  ButtonsContainer,
  StyledLink,
} from "../../style/StreamList.style";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <ButtonsContainer>
          <StyledButtonSmall>Edit</StyledButtonSmall>
          <StyledButtonSmall>Delete</StyledButtonSmall>
        </ButtonsContainer>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <ListItemContainer key={stream.id}>
          <ContentContainer>
            <div>
              <h3>{stream.title}</h3>
            </div>
            <div>
              <p>{stream.description}</p>
            </div>
          </ContentContainer>
          {this.renderAdmin(stream)}
        </ListItemContainer>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <StyledLink to="/streams/new">Create Stream</StyledLink>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Title>Streams</Title>
        <ListContainer>{this.renderList()}</ListContainer>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);

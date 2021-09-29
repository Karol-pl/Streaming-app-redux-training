import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams, editStream } from "../../actions";
import {
  Title,
  Header,
  ListContainer,
  ListItemContainer,
  ContentContainer,
  ButtonsContainer,
  StyledLink,
  StyledLinkSmall,
} from "../../style/StreamList.style";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <ButtonsContainer>
          <StyledLinkSmall to={`/streams/edit/${stream.id}`}>
            Edit
          </StyledLinkSmall>
          <StyledLinkSmall to={`/streams/delete/${stream.id}`}>
            Delete
          </StyledLinkSmall>
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
              <Header to={`/streams/${stream.id}`}>
                <h3>{stream.title}</h3>
              </Header>
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

export default connect(mapStateToProps, { fetchStreams, editStream })(
  StreamList
);

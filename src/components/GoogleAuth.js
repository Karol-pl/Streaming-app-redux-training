import React, { Component } from "react";
import { StyledButton } from "../style/Button.style";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "185147240206-sirs2todankp9jkg375gt5bh61l6cr65.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderLoginButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <StyledButton onClick={this.onSignOutClick}>
          <i className="fab fa-google"></i> Log Out
        </StyledButton>
      );
    } else {
      return (
        <StyledButton onClick={this.onSignInClick}>
          <i className="fab fa-google"></i> Sign In with Google
        </StyledButton>
      );
    }
  }

  render() {
    return <div>{this.renderLoginButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

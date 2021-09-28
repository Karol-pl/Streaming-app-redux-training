import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
import { FormContainer } from "../../style/Containers.style";

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <FormContainer>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </FormContainer>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

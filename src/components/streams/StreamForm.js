import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FieldContainer, Form } from "../../style/StreamForm.style";
import { StyledButton } from "../../style/Button.style";
import { ErrorContainer } from "../../style/ErrorMessage.style";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <ErrorContainer>{error}</ErrorContainer>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <FieldContainer>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </FieldContainer>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <StyledButton>Submit</StyledButton>
      </Form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);

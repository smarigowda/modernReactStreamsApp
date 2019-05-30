import React, { useCallback } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';

import { Input } from "../../styled/input";
import { Form } from "../../styled/form";
import { Label } from "../../styled/label";
import { P } from "../../styled/p";
import { createStream } from '../../actions'

const Component = props => {
  console.log("props", props);
  const renderInput = ({ input, label, meta }) => {
    console.log("formProps.input", input);
    console.log("meta", meta);
    const error = meta.touched && meta.error ? true : false;
    if(error) {
      label = label + ' ...mandatory';
    }
    return (
      <div>
        <Label error={error}>{label}</Label>
        <Input {...input} />
        {/* {error ? <P>{meta.error}</P> : ""} */}
      </div>
    );
  };
  const memoizedRenderInput = useCallback(renderInput, []);
  const onSubmit = values => {
    console.log("valuse", values);
    props.createStream(values);
  };
  return (
    <Form onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        name="title"
        component={memoizedRenderInput}
        label="Title:"
      />
      <Field
        name="description"
        component={memoizedRenderInput}
        label="Description:"
      />
      <button>Submit</button>
    </Form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "title is required";
  }
  if (!values.description) {
    errors.description = "description is required";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(Component);

const mapDispatchToProps = dispatch => {
  return {
    createStream: values => {
      dispatch(createStream(values))
    }
  }
}

export default connect(null, mapDispatchToProps)(formWrapped);

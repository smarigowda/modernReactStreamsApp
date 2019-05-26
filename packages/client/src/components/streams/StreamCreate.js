import React, { useCallback } from "react";

import { Field, reduxForm } from "redux-form";
import { Input } from "../../styled/input";
import { Form } from "../../styled/form";
import { Label } from "../../styled/label";

const Component = props => {
  console.log('props', props);
  const renderInput = ({ input, label }) => {
    console.log("formProps.input", input);
    return (
      <div>
        <Label>{label}</Label>
        <Input {...input} />
      </div>
    );
  };
  const memoizedRenderInput = useCallback(renderInput, []);
  const onSubmit = values => {
    console.log('valuse', values);
  }
  return (
    <Form onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={memoizedRenderInput} label="Enter Title:"/>
      <Field name="description" component={memoizedRenderInput} label="Enter Description:"/>
      <button>Submit</button>
    </Form>
  );
};

const StreamCreate = reduxForm({
  form: "streamCreate"
})(Component);

export { StreamCreate };

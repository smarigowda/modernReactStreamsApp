import React, { useCallback } from "react";

import { Field, reduxForm } from "redux-form";
import { Input } from "../../styled/input";
import { Form } from "../../styled/form";
import { Label } from "../../styled/label";

const Component = props => {
  console.log(props);
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
  return (
    <Form>
      <Field name="title" component={memoizedRenderInput} label="Enter Title:"/>
      <Field name="description" component={memoizedRenderInput} label="Enter Description:"/>
    </Form>
  );
};

const StreamCreate = reduxForm({
  form: "streamCreate"
})(Component);

export { StreamCreate };

import React, { useCallback } from "react";

import { Field, reduxForm } from "redux-form";
import { Input } from "../../styled/input";
import { Form } from "../../styled/form";
import { Label } from "../../styled/label";

const Component = props => {
  console.log(props);
  const renderInput = ({ input }) => {
    console.log("formProps.input", input);
    return (
      <div>
        <Label>{input.name}:</Label>
        <Input {...input} />
      </div>
    );
  };
  const memoizedRenderInput = useCallback(renderInput, []);
  return (
    <Form>
      <Field name="title" component={memoizedRenderInput} />
      <Field name="description" component={memoizedRenderInput} />
    </Form>
  );
};

const StreamCreate = reduxForm({
  form: "streamCreate"
})(Component);

export { StreamCreate };

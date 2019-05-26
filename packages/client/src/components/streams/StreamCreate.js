import React from "react";

import { Field, reduxForm } from "redux-form";
import { Input } from "../../styled/input";
import { Form } from "../../styled/form";
import { Label } from "../../styled/label";

const Component = props => {
  console.log(props);
  const renderInput = formProps => {
    console.log("formProps", formProps);
    return (
      <div>
        <Label>{formProps.input.name}:</Label>
        <Input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        />
      </div>
    );
  };
  return (
    <Form>
      <Field name="title" component={renderInput} />
      <Field name="description" component={renderInput} />
    </Form>
  );
};

const StreamCreate = reduxForm({
  form: "streamCreate"
})(Component);

export { StreamCreate };

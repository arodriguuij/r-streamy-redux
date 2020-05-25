import React from "react";
import { Field, reduxForm } from "redux-form";

const StreamForm = ({ handleSubmit, onSubmit }) => {
  const renderError = (error, touched) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta: { error, touched } }) => (
    <div className={`field ${error && touched ? "error" : ""}`}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(error, touched)}
    </div>
  );

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = ({ title, description }) => {
  console.log();
  const errors = {};
  if (!title) errors.title = "You must enter a title";
  if (!description) errors.description = "You must enter a description";
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);

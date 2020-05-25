import React from "react";
import { connect } from "react-redux";
import { createStream, editStream } from "../actions";
import StreamForm from "./StreamForm";

const StreamCreate = ({ createStream }) => {
  const onSubmit = (formValues) => createStream(formValues);

  return (
    <>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </>
  );
};

export default connect(null, { createStream, editStream })(StreamCreate);

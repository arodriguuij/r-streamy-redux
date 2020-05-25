import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ match, stream, fetchStream, editStream }) => {
  const id = match.params.id;
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  const onSubmit = (formValues) => editStream(id, formValues);

  return !stream ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={{ title: stream.title, description: stream.description }}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

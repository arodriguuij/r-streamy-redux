import React, { useEffect } from "react";
import Modal from "../modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../actions";
import { Link } from "react-router-dom";

const StreamDelete = ({ fetchStream, deleteStream, match, stream }) => {
  const id = match.params.id;

  useEffect(() => {
    console.log(id);
    fetchStream(id);
  }, [fetchStream, id]);

  const actions = (
    <>
      <button className="ui button negative" onClick={() => deleteStream(id)}>
        Delete
      </button>
      <Link className="ui button" to="/">
        Cancel
      </Link>
    </>
  );

  const renderContent = () =>
    !stream
      ? "Are you sure you want to delete this stream"
      : `Are you sure you want to delete the stream with title: ${stream.title}?`;

  return !stream ? (
    <div>Loading...</div>
  ) : (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

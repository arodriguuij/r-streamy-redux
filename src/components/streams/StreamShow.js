import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";

const StreamShow = ({ match, fetchStream, stream }) => {
  const id = match.params.id;

  useEffect(() => {
    fetchStream(id);
  }, [id, fetchStream]);

  return !stream ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps, { fetchStream })(StreamShow);

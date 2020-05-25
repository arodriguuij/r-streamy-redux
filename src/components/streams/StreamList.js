import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../actions";
import { Link } from "react-router-dom";

const StreamList = ({ streams, fetchStreams, currentUserId, isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const renderAdmin = (stream) =>
    stream.userId === currentUserId ? (
      <div className="right floated content">
        <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
          Edit
        </Link>
        <Link
          className="ui  button negative"
          to={`/streams/delete/${stream.id}`}
        >
          Delete
        </Link>
      </div>
    ) : null;

  const renderList = () =>
    streams.map((stream) => (
      <div className="item" key={stream.id}>
        {renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));

  const renderCreate = () =>
    isSignedIn ? (
      <div style={{ textAlign: "right" }}>
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    ) : (
      ""
    );

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreate()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);

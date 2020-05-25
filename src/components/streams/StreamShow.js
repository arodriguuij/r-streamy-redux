import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";
import flv from "flv.js";

const StreamShow = ({ match, fetchStream, stream }) => {
  const id = match.params.id;
  const videoRef = useRef(null);

  useEffect(() => {
    fetchStream(id);
  }, [id, fetchStream]);

  useEffect(() => {
    let player = null;
    if (player || !stream) return;
    else {
      player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    }
    return () => {
      player.destroy();
    };
  }, [id, stream]);

  return !stream ? (
    <div>Loading...</div>
  ) : (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps, { fetchStream })(StreamShow);

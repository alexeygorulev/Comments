import React from "react";
import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from './redux/actions'


const Likes = props => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
      <button onClick={props.onIncrementDislikes}>👎 {props.dislikes}</button>
    </div>
  );
};

function mapStateToProps(state) {
  const { likes } = state
  return {
    likes: likes.likes,
    dislikes: likes.dislikes,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onIncrementDislikes: () => dispatch(decrementLikes())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);

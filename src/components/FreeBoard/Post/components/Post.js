import React from 'react';

var styles = {
  postBody: {
    margin: "1em 20%"
  }
}

const Post = (props) => (
  <div className="panel panel-default" style={styles.postBody}>
    <div className="panel-body">
      {
        props.postBody.map((postPart, idx) => (
          <div key={idx}>{postPart}</div>
        ))
      }
    </div>
  </div>
);

Post.propTypes = {
  postBody: React.PropTypes.any.isRequired
}

export default Post;

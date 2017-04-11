import React, { Component } from 'react';

var styles = {
  postEditor: {
    margin: "1em 20%"
  },
  postEditorButton: {
    float: "right",
    marginTop: "1em"
  }
}

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPostBody: '',
    };

    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handlePostEditorInputChange(ev) {
    this.setState({
      newPostBody: ev.target.value
    });
  }

  createPost() {
    this.props.addPost(this.state.newPostBody);
    this.setState({
      newPostBody: '',
    });
  }

  render() {
    return (
      <div className="panel panel-default" style={styles.postEditor}>
        <div className="panel-body">
          <textarea className="form-control" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} />
          <button className="btn btn-success" style={styles.postEditorButton} onClick={this.createPost}>Post</button>
        </div>
      </div>
    )
  }
}

PostEditor.propTypes = {
  addPost: React.PropTypes.any.isRequired
}

export default PostEditor;

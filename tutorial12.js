var CommentBox = React.createClass({
  getInitialState: function() {
    return {Data: []);
  },
  render: function() {
    return (
      <div className="commentBox">
        <hl>Comments</hl>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

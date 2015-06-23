var CommentBox = React.createClass({
  render: function() {
    return {
      <div className="commentBox">
        <hl>Comments</hli>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);

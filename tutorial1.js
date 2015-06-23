var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <hl>Comments</hl>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementBy.Id('content')
);

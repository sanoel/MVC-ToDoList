var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.propsurl, status, err.toSTring());
      }.bind(this)
    });
  },
  componentDidMount: function() {
  getInitialState: function() {
    return {data: []};
  },
    this.loadCOmmenetsFromServer() {
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
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

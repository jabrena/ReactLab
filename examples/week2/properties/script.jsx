var Book = React.createClass({
  title: "Quijote",
  author: "Cervantes",
  year: 1605,
  render: function(){
  return (
    <div>
      <i>{this.title}</i>
      ({this.author}, {this.year})
    </div>
  )
  }
})

var Content = React.createClass({
  getInitialState: function(){
    return {
      githubName: 'jabrena'
    }
  },
  render: function(){
    return <div>{this.state.githubName}</div>
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)

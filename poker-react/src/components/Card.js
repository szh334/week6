var React = require('react')

var Card = React.createClass({

  render: function() {
    return (
      <div>
        <div className="col-sm-2">
          <h1><img className="img-responsive" src={this.props.picture} /></h1>
        </div>
      </div>
    )
  }

})

module.exports = Card

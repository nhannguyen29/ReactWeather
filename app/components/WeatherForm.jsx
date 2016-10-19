var React = require('react');
var {Button} = require('react-mdl');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;
        if (location.length > 0)
        {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },

    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input style={{width: '100%'}} type="text" ref="location" placeholder="Enter a city"/>
                </div>
                <br/>
                <div style={{textAlign: 'center'}}>
                    <Button raised ripple>Get Weather</Button>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;
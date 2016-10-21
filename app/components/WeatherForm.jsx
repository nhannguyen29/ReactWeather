var React = require('react');
var {Button, Textfield} = require('react-mdl');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.inputRef.value;
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
                    <Textfield label="Enter a city" style={{width: '100%'}} ref="location"/>
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
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorDialog = require('ErrorDialog');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
            openDialog: false,
            errorDialogMessage: undefined
        };
    },

    handleSearch: function(location) {
        var that = this;

        this.setState({
            isLoading: true,
            openDialog: false
        });

        OpenWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false,
                openDialog: false
            });
        }, function(err) {
            that.setState({
                isLoading: false,
                openDialog: true,
                errorDialogMessage: err.message
            });
        });
    },

    handleDialogClose: function() {
        this.setState({
            openDialog: false,
            errorDialogMessage: undefined
        });
    },

    render: function() {
        var {isLoading,location,temp, openDialog, errorDialogMessage} = this.state;
        
        var that = this;
        function renderMessage() {
            if (isLoading) {
                return <h3 style={{textAlign: 'center'}}>Getting the weather...</h3>
            } 
            else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        };

        function renderError() {
            if (openDialog && errorDialogMessage)
            {
                return <ErrorDialog onClose={that.handleDialogClose} message={errorDialogMessage} />
            }
        };

        return (
            <div>
                <h1 className="page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
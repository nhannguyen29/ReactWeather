var React = require('react');
var {Button, Dialog, DialogTitle, DialogContent, DialogActions} = require('react-mdl');

var ErrorDialog = React.createClass({
    getInitialState: function() {
        return {
            openDialog: false
        };
    },

    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },

    propsTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
        this.setState({
            openDialog: true
        });
    },

    handleCloseDialog: function(e) {
        e.preventDefault();
        this.props.onClose();
    },

    render: function() {
        var {title,message} = this.props
        return (
            <div>
                <Dialog open={this.state.openDialog}>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogContent>
                        <p>{message}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' onClick={this.handleCloseDialog}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );   
    }


});

module.exports = ErrorDialog;
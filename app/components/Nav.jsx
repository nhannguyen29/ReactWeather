var React = require('react');
var {Link, IndexLink} = require('react-router');
var {Layout,Header,Navigation,Content, Textfield} = require('react-mdl');

var Nav = React.createClass({
    onSearch : function(e) {
        e.preventDefault();
        var location = this.refs.search.inputRef.value;
        var encodedLocation = encodeURIComponent(location);
        if (location.length > 0)
        {
            this.refs.search.inputRef.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },

    render: function() {
        return (
            <div>
                <Header title={<span><span style={{ color: '#ddd' }}>ReactWeather</span></span>}>
                    <Navigation>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
                    </Navigation>
                    <form onSubmit={this.onSearch}>
                        <Textfield label="Search..." expandable expandableIcon="search" ref="search"/>
                        <input type="submit" style={{ visibility: 'hidden' }} />
                    </form>
                </Header> 
            </div>
        );
    }
});



module.exports = Nav;
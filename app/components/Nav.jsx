var React = require('react');
var {Link, IndexLink} = require('react-router');
var {Layout,Header,Navigation,Content} = require('react-mdl');

var Nav = () => {
    return (
        <div>
            <Header title={<span><span style={{ color: '#ddd' }}>ReactWeather</span></span>}>
                <Navigation>
                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                    <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
                </Navigation>
            </Header> 
        </div>
    );
};



module.exports = Nav;
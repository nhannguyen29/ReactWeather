var React = require('react');
var {Grid,Cell} = require('react-mdl')
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="page-title">Example</h1>
            <p>Welcome to example page</p>
            <ol>
                <li>
                    <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Example;
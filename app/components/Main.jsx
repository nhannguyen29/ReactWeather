var React = require('react');
var Nav = require('Nav');
var {Layout,Content} = require('react-mdl');

var Main = (props) => {
    return (
        <div>
            <Layout fixedHeader>
                <Nav />
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </div>
    );
};
module.exports = Main;
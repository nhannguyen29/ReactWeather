var React = require('react');
var Nav = require('Nav');
var {Layout, Content, Grid, Cell} = require('react-mdl');

var Main = (props) => {
    return (
        <div>
            <Layout fixedHeader>
                <Nav />
                <Content>
                    <Grid>
                        <Cell col={4} offset={4}>
                            {props.children}
                        </Cell>
                    </Grid>

                </Content>
            </Layout>
        </div>
    );
};

module.exports = Main;
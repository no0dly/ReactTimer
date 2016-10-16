var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <p>Main component was rendered</p>
            {props.children}
        </div>
    );
};

module.exports = Main;

var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div className="top-bar top-nav">
            <div className="top-bar-left">
                <ul className="dropdown menu color-black" data-dropdown-menu>
                    <li className="menu-text nav-title">React timer app</li>
                    <li>
                        <IndexLink to="/" activeClassName="active">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="active">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu color-black">
                    <li className="nav-author">
                        Created by
                    </li>
                    <li>
                        <a target="_blank" className="nav-author__link" href="https://github.com/no0dly">noodly</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

module.exports = Nav;

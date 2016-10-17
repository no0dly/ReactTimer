var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="column">
                    <h1 className="text-center page-title"> Timer</h1>
                    <Clock totalSeconds={62}/>
                </div>
            </div>
        );
    }
});

module.exports = Timer;

var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState() {
        return {count: 0};
    },
    handleSetCoundown(seconds){
        this.setState({
            count: seconds
        })
    },
    render() {
        var {count} = this.state;
        return (
            <div className="row">
                <div className="column">
                    <h1 className="text-center page-title">Timer</h1>
                    <Clock totalSeconds={count}/>
                    <CountdownForm onSetCountdown={this.handleSetCoundown}/>
                </div>
            </div>
        );
    }
});

module.exports = Countdown;

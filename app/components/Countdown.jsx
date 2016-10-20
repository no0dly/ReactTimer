var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    handleSetCoundown(seconds){
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    componentDidUpdate(prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },

    startTimer(){
        this.timer = setInterval( () => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
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

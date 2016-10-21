var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
                case 'stopped':
                    this.setState({count: 0});

                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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
            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'});
            }
        }, 1000);
    },
    handleStatusChange(newStatus) {
        this.setState({countdownStatus: newStatus});
    },
    render() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {

            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCoundown}/>
            }
        };

        return (
            <div className="row">
                <div className="column">
                    <h1 className="text-center page-title">Timer</h1>
                    <Clock totalSeconds={count}/>
                    {renderControlArea()}
                </div>
            </div>
        );
    }
});

module.exports = Countdown;

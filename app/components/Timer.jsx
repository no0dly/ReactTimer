var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState() {
        return {
            count: 0,
            timerStatus: 'stopped'
        }
    },

    handleStatusChange(newStatus) {
        this.setState({timerStatus: newStatus});
    },

    componentDidUpdate(prevProps, prevState) {
        if(this.state.timerStatus !== prevState.timerStatus ) {

            switch( this.state.timerStatus ) {
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

    startTimer() {
        this.timer = setInterval(() => {
            var newSecValue = this.state.count + 1;
            this.setState({count: newSecValue});
        }, 1000 );
    },

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    },

    render() {
        var {count, timerStatus} = this.state;
        var renderControlArea = () => {
            if (timerStatus !== 'stopped') {
                return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            }
        }
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

module.exports = Timer;

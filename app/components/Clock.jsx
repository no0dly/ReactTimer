var React = require('react');

var Clock = React.createClass({
    getDefaultProps() {
        totalSeconds: 0;
    },
    propTypes() {
        totalSeconds = React.propTypes.number;
    },
    formatSeconds(seconds) {
        let mins = ~~(seconds / 60);
        let secs = seconds % 60;

        if( mins < 10) {
            mins = '0' + mins;
        }

        if( secs < 10) {
            secs = '0' + secs;
        }

        return mins + ":"+ secs
    },
    render() {
        var {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span className="clock-time">{this.formatSeconds(totalSeconds)}</span>
            </div>
        );
    }
});

module.exports = Clock;

var React = require('react');

var Controls = React.createClass({

    propTypes() {
        countdownStatus: React.propTypes.string.isRequired
    },

    render() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = function() {
            if ( countdownStatus === 'started' ) {
                return <button className="button secondary">Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="button primary">Start</button>
            }
        };
        return (
            <div>
                {renderStartStopButton()}
                <button className="button warning hollow">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;

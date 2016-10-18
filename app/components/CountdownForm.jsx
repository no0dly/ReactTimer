var React = require('react');

var CountdownForm = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render() {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="coundown-form">
                <input type="text" placeholder="Enter time in seconds" ref="seconds"/>
                <button className="button expanded">Start</button>
            </form>
        );
    }
});

module.exports = CountdownForm;

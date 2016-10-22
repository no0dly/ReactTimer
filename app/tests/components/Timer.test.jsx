var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer',() => {
    it('Should exist', () => {
        expect(Timer).toExist();
    });

    it('Should start timer', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);
        setTimeout( () => {
            expect(timer.state.count).toBe(1);
            expect(timer.state.timerStatus).toBe('started');
            done();
        }, 1001);
    });

    it('Should pause timer', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        expect(timer.state.count).toBe(10);
        setTimeout( () => {
            expect(timer.state.count).toBe(10);
            expect(timer.state.timerStatus).toBe('paused');
            done();
        }, 1001);
    });

    it('Should reset timer', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');

    });
});

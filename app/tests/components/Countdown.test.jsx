var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown',() => {
    it('Should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCoundown', (done) => {
        it('should set state to started and countdownStatus', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);

            countdown.handleSetCoundown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout( () => {
                expect(countdown.state.count).toBe(9);
                expect(countdown.state.countdownStatus).toBe('started');
                done();
            });
        });

        it('shouldn\'t show negative numbers', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);

            countdown.handleSetCoundown(1);

            setTimeout( () => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

        it('Should pause coundown and set pause state', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);

            countdown.handleSetCoundown(3);
            countdown.handleStatusChange('paused');

            setTimeout( () => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.handleStatusChange).toBe('paused');
            }, 1001);
        });

        it('Should drop countdown and set stopped state', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);

            countdown.handleSetCoundown(3);
            countdown.handleStatusChange('stopped');

            setTimeout( () => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.handleStatusChange).toBe('stopped');
            }, 1001);
        });
    });
});

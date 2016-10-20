var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('Countdown form testion',() => {
    it('Component is exist', () => {
        expect('CountdownForm').toExist();
    });

    it('should call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'ASD';
        TestUtils.Simulate.submit($el.closest('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.closest('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });
});

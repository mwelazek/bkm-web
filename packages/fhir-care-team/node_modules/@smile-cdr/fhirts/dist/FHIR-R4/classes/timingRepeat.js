"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimingRepeat = void 0;
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
class TimingRepeat {
}
exports.TimingRepeat = TimingRepeat;
(function (TimingRepeat) {
    TimingRepeat.DurationUnitEnum = {
        S: 's',
        Min: 'min',
        H: 'h',
        D: 'd',
        Wk: 'wk',
        Mo: 'mo',
        A: 'a'
    };
    TimingRepeat.PeriodUnitEnum = {
        S: 's',
        Min: 'min',
        H: 'h',
        D: 'd',
        Wk: 'wk',
        Mo: 'mo',
        A: 'a'
    };
})(TimingRepeat = exports.TimingRepeat || (exports.TimingRepeat = {}));

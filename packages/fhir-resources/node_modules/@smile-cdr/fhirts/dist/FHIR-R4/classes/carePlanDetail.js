"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarePlanDetail = void 0;
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
class CarePlanDetail {
}
exports.CarePlanDetail = CarePlanDetail;
(function (CarePlanDetail) {
    CarePlanDetail.StatusEnum = {
        NotStarted: 'not-started',
        Scheduled: 'scheduled',
        InProgress: 'in-progress',
        OnHold: 'on-hold',
        Completed: 'completed',
        Cancelled: 'cancelled',
        Stopped: 'stopped',
        Unknown: 'unknown',
        EnteredInError: 'entered-in-error'
    };
})(CarePlanDetail = exports.CarePlanDetail || (exports.CarePlanDetail = {}));

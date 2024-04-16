"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
var Goal;
(function (Goal) {
    Goal.LifecycleStatusEnum = {
        Proposed: 'proposed',
        Planned: 'planned',
        Accepted: 'accepted',
        Active: 'active',
        OnHold: 'on-hold',
        Completed: 'completed',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error',
        Rejected: 'rejected'
    };
})(Goal = exports.Goal || (exports.Goal = {}));

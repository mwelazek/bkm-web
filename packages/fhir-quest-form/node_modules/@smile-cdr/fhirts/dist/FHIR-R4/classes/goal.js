"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
class Goal {
}
exports.Goal = Goal;
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

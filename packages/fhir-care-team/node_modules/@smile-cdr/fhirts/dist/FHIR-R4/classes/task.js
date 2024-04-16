"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
/**
 * A task to be performed.
 */
class Task {
}
exports.Task = Task;
(function (Task) {
    Task.StatusEnum = {
        Draft: 'draft',
        Requested: 'requested',
        Received: 'received',
        Accepted: 'accepted',
        Rejected: 'rejected',
        Ready: 'ready',
        Cancelled: 'cancelled',
        InProgress: 'in-progress',
        OnHold: 'on-hold',
        Failed: 'failed',
        Completed: 'completed',
        EnteredInError: 'entered-in-error'
    };
    Task.IntentEnum = {
        Unknown: 'unknown',
        Proposal: 'proposal',
        Plan: 'plan',
        Order: 'order',
        OriginalOrder: 'original-order',
        ReflexOrder: 'reflex-order',
        FillerOrder: 'filler-order',
        InstanceOrder: 'instance-order',
        Option: 'option'
    };
})(Task = exports.Task || (exports.Task = {}));

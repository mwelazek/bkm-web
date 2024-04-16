"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDefinition = void 0;
/**
 * The EventDefinition resource provides a reusable description of when a particular event can occur.
 */
class EventDefinition {
}
exports.EventDefinition = EventDefinition;
(function (EventDefinition) {
    EventDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(EventDefinition = exports.EventDefinition || (exports.EventDefinition = {}));

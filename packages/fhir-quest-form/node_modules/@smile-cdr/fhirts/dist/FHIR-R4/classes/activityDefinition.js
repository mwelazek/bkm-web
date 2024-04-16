"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityDefinition = void 0;
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
class ActivityDefinition {
}
exports.ActivityDefinition = ActivityDefinition;
(function (ActivityDefinition) {
    ActivityDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(ActivityDefinition = exports.ActivityDefinition || (exports.ActivityDefinition = {}));

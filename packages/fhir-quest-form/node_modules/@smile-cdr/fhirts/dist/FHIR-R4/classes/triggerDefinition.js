"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerDefinition = void 0;
/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
class TriggerDefinition {
}
exports.TriggerDefinition = TriggerDefinition;
(function (TriggerDefinition) {
    TriggerDefinition.TypeEnum = {
        NamedEvent: 'named-event',
        Periodic: 'periodic',
        DataChanged: 'data-changed',
        DataAdded: 'data-added',
        DataModified: 'data-modified',
        DataRemoved: 'data-removed',
        DataAccessed: 'data-accessed',
        DataAccessEnded: 'data-access-ended'
    };
})(TriggerDefinition = exports.TriggerDefinition || (exports.TriggerDefinition = {}));

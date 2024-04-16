"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
/**
 * A list is a curated collection of resources.
 */
class List {
}
exports.List = List;
(function (List) {
    List.StatusEnum = {
        Current: 'current',
        Retired: 'retired',
        EnteredInError: 'entered-in-error'
    };
    List.ModeEnum = {
        Working: 'working',
        Snapshot: 'snapshot',
        Changes: 'changes'
    };
})(List = exports.List || (exports.List = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
class Location {
}
exports.Location = Location;
(function (Location) {
    Location.StatusEnum = {
        Active: 'active',
        Suspended: 'suspended',
        Inactive: 'inactive'
    };
    Location.ModeEnum = {
        Instance: 'instance',
        Kind: 'kind'
    };
})(Location = exports.Location || (exports.Location = {}));

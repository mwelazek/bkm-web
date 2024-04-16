"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingSystemUniqueId = void 0;
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a \"System\" used within the Identifier and Coding data types.
 */
class NamingSystemUniqueId {
}
exports.NamingSystemUniqueId = NamingSystemUniqueId;
(function (NamingSystemUniqueId) {
    NamingSystemUniqueId.TypeEnum = {
        Oid: 'oid',
        Uuid: 'uuid',
        Uri: 'uri',
        Other: 'other'
    };
})(NamingSystemUniqueId = exports.NamingSystemUniqueId || (exports.NamingSystemUniqueId = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
class Endpoint {
}
exports.Endpoint = Endpoint;
(function (Endpoint) {
    Endpoint.StatusEnum = {
        Active: 'active',
        Suspended: 'suspended',
        Error: 'error',
        Off: 'off',
        EnteredInError: 'entered-in-error',
        Test: 'test'
    };
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));

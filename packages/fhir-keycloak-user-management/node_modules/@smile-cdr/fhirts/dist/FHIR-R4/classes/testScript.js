"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestScript = void 0;
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
class TestScript {
}
exports.TestScript = TestScript;
(function (TestScript) {
    TestScript.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(TestScript = exports.TestScript || (exports.TestScript = {}));

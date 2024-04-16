"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatement = void 0;
var CapabilityStatement;
(function (CapabilityStatement) {
    CapabilityStatement.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    CapabilityStatement.KindEnum = {
        Instance: 'instance',
        Capability: 'capability',
        Requirements: 'requirements'
    };
    CapabilityStatement.FhirVersionEnum = {
        _001: '0.01',
        _005: '0.05',
        _006: '0.06',
        _011: '0.11',
        _0080: '0.0.80',
        _0081: '0.0.81',
        _0082: '0.0.82',
        _040: '0.4.0',
        _050: '0.5.0',
        _100: '1.0.0',
        _101: '1.0.1',
        _102: '1.0.2',
        _110: '1.1.0',
        _140: '1.4.0',
        _160: '1.6.0',
        _180: '1.8.0',
        _300: '3.0.0',
        _301: '3.0.1',
        _330: '3.3.0',
        _350: '3.5.0',
        _400: '4.0.0'
    };
})(CapabilityStatement = exports.CapabilityStatement || (exports.CapabilityStatement = {}));

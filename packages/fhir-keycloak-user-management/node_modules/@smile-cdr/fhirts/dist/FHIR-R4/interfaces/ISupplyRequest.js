"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyRequest = void 0;
var SupplyRequest;
(function (SupplyRequest) {
    SupplyRequest.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Suspended: 'suspended',
        Cancelled: 'cancelled',
        Completed: 'completed',
        EnteredInError: 'entered-in-error',
        Unknown: 'unknown'
    };
})(SupplyRequest = exports.SupplyRequest || (exports.SupplyRequest = {}));

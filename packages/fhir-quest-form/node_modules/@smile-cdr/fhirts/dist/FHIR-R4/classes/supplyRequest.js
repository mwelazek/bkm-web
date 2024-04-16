"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyRequest = void 0;
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
class SupplyRequest {
}
exports.SupplyRequest = SupplyRequest;
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

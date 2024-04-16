"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyDelivery = void 0;
/**
 * Record of delivery of what is supplied.
 */
class SupplyDelivery {
}
exports.SupplyDelivery = SupplyDelivery;
(function (SupplyDelivery) {
    SupplyDelivery.StatusEnum = {
        InProgress: 'in-progress',
        Completed: 'completed',
        Abandoned: 'abandoned',
        EnteredInError: 'entered-in-error'
    };
})(SupplyDelivery = exports.SupplyDelivery || (exports.SupplyDelivery = {}));

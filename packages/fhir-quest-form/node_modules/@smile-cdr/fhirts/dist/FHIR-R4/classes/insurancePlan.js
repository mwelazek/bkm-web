"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsurancePlan = void 0;
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
class InsurancePlan {
}
exports.InsurancePlan = InsurancePlan;
(function (InsurancePlan) {
    InsurancePlan.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(InsurancePlan = exports.InsurancePlan || (exports.InsurancePlan = {}));

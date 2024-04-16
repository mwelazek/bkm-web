"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidanceResponse = void 0;
/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
class GuidanceResponse {
}
exports.GuidanceResponse = GuidanceResponse;
(function (GuidanceResponse) {
    GuidanceResponse.StatusEnum = {
        Success: 'success',
        DataRequested: 'data-requested',
        DataRequired: 'data-required',
        InProgress: 'in-progress',
        Failure: 'failure',
        EnteredInError: 'entered-in-error'
    };
})(GuidanceResponse = exports.GuidanceResponse || (exports.GuidanceResponse = {}));

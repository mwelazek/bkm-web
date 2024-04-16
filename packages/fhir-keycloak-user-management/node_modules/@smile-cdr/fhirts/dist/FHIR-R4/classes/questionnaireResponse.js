"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireResponse = void 0;
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
class QuestionnaireResponse {
}
exports.QuestionnaireResponse = QuestionnaireResponse;
(function (QuestionnaireResponse) {
    QuestionnaireResponse.StatusEnum = {
        InProgress: 'in-progress',
        Completed: 'completed',
        Amended: 'amended',
        EnteredInError: 'entered-in-error',
        Stopped: 'stopped'
    };
})(QuestionnaireResponse = exports.QuestionnaireResponse || (exports.QuestionnaireResponse = {}));

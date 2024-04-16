"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireEnableWhen = void 0;
/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
class QuestionnaireEnableWhen {
}
exports.QuestionnaireEnableWhen = QuestionnaireEnableWhen;
(function (QuestionnaireEnableWhen) {
    QuestionnaireEnableWhen.OperatorEnum = {
        Exists: 'exists',
        Equal: '=',
        NotEqual: '!=',
        GreaterThan: '>',
        LessThan: '<',
        GreaterThanOrEqualTo: '>=',
        LessThanOrEqualTo: '<='
    };
})(QuestionnaireEnableWhen = exports.QuestionnaireEnableWhen || (exports.QuestionnaireEnableWhen = {}));

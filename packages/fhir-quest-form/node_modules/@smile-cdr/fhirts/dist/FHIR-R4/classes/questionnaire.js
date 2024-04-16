"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questionnaire = void 0;
/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
class Questionnaire {
}
exports.Questionnaire = Questionnaire;
(function (Questionnaire) {
    Questionnaire.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(Questionnaire = exports.Questionnaire || (exports.Questionnaire = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireItem = void 0;
/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
class QuestionnaireItem {
}
exports.QuestionnaireItem = QuestionnaireItem;
(function (QuestionnaireItem) {
    QuestionnaireItem.TypeEnum = {
        Group: 'group',
        Display: 'display',
        Boolean: 'boolean',
        Decimal: 'decimal',
        Integer: 'integer',
        Date: 'date',
        DateTime: 'dateTime',
        Time: 'time',
        String: 'string',
        Text: 'text',
        Url: 'url',
        Choice: 'choice',
        OpenChoice: 'open-choice',
        Attachment: 'attachment',
        Reference: 'reference',
        Quantity: 'quantity'
    };
    QuestionnaireItem.EnableBehaviorEnum = {
        All: 'all',
        Any: 'any'
    };
})(QuestionnaireItem = exports.QuestionnaireItem || (exports.QuestionnaireItem = {}));

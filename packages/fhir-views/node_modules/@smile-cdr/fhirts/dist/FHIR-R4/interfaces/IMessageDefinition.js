"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDefinition = void 0;
var MessageDefinition;
(function (MessageDefinition) {
    MessageDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    MessageDefinition.CategoryEnum = {
        Consequence: 'consequence',
        Currency: 'currency',
        Notification: 'notification'
    };
    MessageDefinition.ResponseRequiredEnum = {
        Always: 'always',
        OnError: 'on-error',
        Never: 'never',
        OnSuccess: 'on-success'
    };
})(MessageDefinition = exports.MessageDefinition || (exports.MessageDefinition = {}));

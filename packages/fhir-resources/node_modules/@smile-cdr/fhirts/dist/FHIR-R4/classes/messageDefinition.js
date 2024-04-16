"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDefinition = void 0;
/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
class MessageDefinition {
}
exports.MessageDefinition = MessageDefinition;
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

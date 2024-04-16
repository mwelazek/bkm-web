"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementSupportedMessage = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatementSupportedMessage {
}
exports.CapabilityStatementSupportedMessage = CapabilityStatementSupportedMessage;
(function (CapabilityStatementSupportedMessage) {
    CapabilityStatementSupportedMessage.ModeEnum = {
        Sender: 'sender',
        Receiver: 'receiver'
    };
})(CapabilityStatementSupportedMessage = exports.CapabilityStatementSupportedMessage || (exports.CapabilityStatementSupportedMessage = {}));

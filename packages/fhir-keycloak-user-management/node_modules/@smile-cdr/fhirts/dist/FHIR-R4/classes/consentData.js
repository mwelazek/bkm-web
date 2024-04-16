"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentData = void 0;
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
class ConsentData {
}
exports.ConsentData = ConsentData;
(function (ConsentData) {
    ConsentData.MeaningEnum = {
        Instance: 'instance',
        Related: 'related',
        Dependents: 'dependents',
        Authoredby: 'authoredby'
    };
})(ConsentData = exports.ConsentData || (exports.ConsentData = {}));

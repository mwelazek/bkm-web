"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceVariableCharacteristic = void 0;
/**
 * The EvidenceVariable resource describes a \"PICO\" element that knowledge (evidence, assertion, recommendation) is about.
 */
class EvidenceVariableCharacteristic {
}
exports.EvidenceVariableCharacteristic = EvidenceVariableCharacteristic;
(function (EvidenceVariableCharacteristic) {
    EvidenceVariableCharacteristic.GroupMeasureEnum = {
        Mean: 'mean',
        Median: 'median',
        MeanOfMean: 'mean-of-mean',
        MeanOfMedian: 'mean-of-median',
        MedianOfMean: 'median-of-mean',
        MedianOfMedian: 'median-of-median'
    };
})(EvidenceVariableCharacteristic = exports.EvidenceVariableCharacteristic || (exports.EvidenceVariableCharacteristic = {}));

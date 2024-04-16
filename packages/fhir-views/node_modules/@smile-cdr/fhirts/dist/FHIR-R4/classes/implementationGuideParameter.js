"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementationGuideParameter = void 0;
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
class ImplementationGuideParameter {
}
exports.ImplementationGuideParameter = ImplementationGuideParameter;
(function (ImplementationGuideParameter) {
    ImplementationGuideParameter.CodeEnum = {
        Apply: 'apply',
        PathResource: 'path-resource',
        PathPages: 'path-pages',
        PathTxCache: 'path-tx-cache',
        ExpansionParameter: 'expansion-parameter',
        RuleBrokenLinks: 'rule-broken-links',
        GenerateXml: 'generate-xml',
        GenerateJson: 'generate-json',
        GenerateTurtle: 'generate-turtle',
        HtmlTemplate: 'html-template'
    };
})(ImplementationGuideParameter = exports.ImplementationGuideParameter || (exports.ImplementationGuideParameter = {}));

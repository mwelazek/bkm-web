"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Permit = exports.IamResources = exports.FhirResources = void 0;
var Permit;
exports.Permit = Permit;

(function (Permit) {
  Permit[Permit["CREATE"] = 1] = "CREATE";
  Permit[Permit["READ"] = 2] = "READ";
  Permit[Permit["UPDATE"] = 4] = "UPDATE";
  Permit[Permit["DELETE"] = 8] = "DELETE";
  Permit[Permit["MANAGE"] = 15] = "MANAGE";
})(Permit || (exports.Permit = Permit = {}));

var IamResources = ['iam_user', 'iam_role', 'iam_group'];
exports.IamResources = IamResources;
var FhirResources = ['Patient', 'Practitioner', 'PractitionerRole', 'Group', 'Organization', 'OrganizationAffiliation', 'HealthcareService', 'Location', 'Observation', 'QuestionnaireResponse', 'CareTeam', 'PlanDefinition', 'Questionnaire'];
exports.FhirResources = FhirResources;
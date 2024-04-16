"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resourcesSchema = void 0;

var _Patient = require("./Patient");

var _Encounter = require("./Encounter");

var _Observation = require("./Observation");

var _CarePlan = require("./CarePlan");

var _Condition = require("./Condition");

var _DiagnosticReport = require("./DiagnosticReport");

var _Immunization = require("./Immunization");

var _Location = require("./Location");

var _Medication = require("./Medication");

var _MedicationRequest = require("./MedicationRequest");

var _Procedure = require("./Procedure");

var _Practitioner = require("./Practitioner");

var _Organization = require("./Organization");

var _ServiceRequest = require("./ServiceRequest");

var _MedicationAdministration = require("./MedicationAdministration");

var _MedicationStatement = require("./MedicationStatement");

var _Goal = require("./Goal");

var _ImmunizationRecommendation = require("./ImmunizationRecommendation");

var resourcesSchema = {
  Patient: {
    resourceParser: _Patient.parsePatient,
    columns: _Patient.columns
  },
  Encounter: {
    resourceParser: _Encounter.parseEncounter,
    columns: _Encounter.columns
  },
  Observation: {
    resourceParser: _Observation.parseObservation,
    columns: _Observation.columns
  },
  CarePlan: {
    resourceParser: _CarePlan.parseCareplan,
    columns: _CarePlan.columns
  },
  Condition: {
    resourceParser: _Condition.parseCondition,
    columns: _Condition.columns
  },
  DiagnosticReport: {
    resourceParser: _DiagnosticReport.parseDiagnosticReport,
    columns: _DiagnosticReport.columns
  },
  Immunization: {
    resourceParser: _Immunization.parseImmunization,
    columns: _Immunization.columns
  },
  Location: {
    resourceParser: _Location.parseLocation,
    columns: _Location.columns
  },
  Medication: {
    resourceParser: _Medication.parseMedication,
    columns: _Medication.columns
  },
  MedicationRequest: {
    resourceParser: _MedicationRequest.parseMedicationRequest,
    columns: _MedicationRequest.columns
  },
  Procedure: {
    resourceParser: _Procedure.parseProcedure,
    columns: _Procedure.columns
  },
  Practitioner: {
    resourceParser: _Practitioner.parsePractitioner,
    columns: _Practitioner.columns
  },
  Organization: {
    resourceParser: _Organization.parseOrganization,
    columns: _Organization.columns
  },
  ServiceRequest: {
    resourceParser: _ServiceRequest.parseServiceRequest,
    columns: _ServiceRequest.columns
  },
  MedicationAdministration: {
    resourceParser: _MedicationAdministration.parseMedicationAdministration,
    columns: _MedicationAdministration.columns
  },
  MedicationStatement: {
    resourceParser: _MedicationStatement.parseMedicationStatement,
    columns: _MedicationStatement.columns
  },
  Goal: {
    resourceParser: _Goal.parseGoal,
    columns: _Goal.columns
  },
  ImmunizationRecommendation: {
    resourceParser: _ImmunizationRecommendation.parseImmunizationRecommendation,
    columns: _ImmunizationRecommendation.columns
  }
};
exports.resourcesSchema = resourcesSchema;
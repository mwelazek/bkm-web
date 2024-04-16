"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.searchQuery = exports.practitionerRoleResourceType = exports.practitionerResourceType = exports.pageSizeQuery = exports.pageQuery = exports.organizationTypeValueSetUrl = exports.organizationResourceType = exports.organizationAffiliationResourceType = exports.name = exports.members = exports.identifier = exports.id = exports.alias = exports.active = exports.URL_EDIT_ORGANIZATION = exports.URL_ADMIN = exports.URL_ADD_ORGANIZATION = exports.OrganizationTypeVS = exports.ORGANIZATION_LIST_URL = exports.HumanNameUseCodes = void 0;
var pageSizeQuery = 'pageSize';
exports.pageSizeQuery = pageSizeQuery;
var pageQuery = 'page';
exports.pageQuery = pageQuery;
var searchQuery = 'search';
exports.searchQuery = searchQuery;
var organizationAffiliationResourceType = 'OrganizationAffiliation';
exports.organizationAffiliationResourceType = organizationAffiliationResourceType;
var organizationResourceType = 'Organization';
exports.organizationResourceType = organizationResourceType;
var practitionerRoleResourceType = 'PractitionerRole';
exports.practitionerRoleResourceType = practitionerRoleResourceType;
var practitionerResourceType = 'Practitioner';
exports.practitionerResourceType = practitionerResourceType;
var URL_ADMIN = '/admin';
exports.URL_ADMIN = URL_ADMIN;
var URL_ADD_ORGANIZATION = "".concat(URL_ADMIN, "/teams/add");
exports.URL_ADD_ORGANIZATION = URL_ADD_ORGANIZATION;
var URL_EDIT_ORGANIZATION = "".concat(URL_ADMIN, "/teams/edit");
exports.URL_EDIT_ORGANIZATION = URL_EDIT_ORGANIZATION;
var ORGANIZATION_LIST_URL = "".concat(URL_ADMIN, "/teams");
exports.ORGANIZATION_LIST_URL = ORGANIZATION_LIST_URL;
var id = 'id';
exports.id = id;
var name = 'name';
exports.name = name;
var active = 'active';
exports.active = active;
var alias = 'alias';
exports.alias = alias;
var identifier = 'identifier';
exports.identifier = identifier;
var type = 'type';
exports.type = type;
var members = 'members';
exports.members = members;
var HumanNameUseCodes;
exports.HumanNameUseCodes = HumanNameUseCodes;

(function (HumanNameUseCodes) {
  HumanNameUseCodes["USUAL"] = "usual";
  HumanNameUseCodes["OFFICIAL"] = "official";
  HumanNameUseCodes["TEMP"] = "temp";
  HumanNameUseCodes["NICKNAME"] = "nickname";
  HumanNameUseCodes["ANONYMOUS"] = "anonymous";
  HumanNameUseCodes["OLD"] = "old";
  HumanNameUseCodes["MAIDEN"] = "maiden";
})(HumanNameUseCodes || (exports.HumanNameUseCodes = HumanNameUseCodes = {}));

var organizationTypeValueSetUrl = 'http://terminology.hl7.org/CodeSystem/organization-type';
exports.organizationTypeValueSetUrl = organizationTypeValueSetUrl;
var OrganizationTypeVS = {
  system: organizationTypeValueSetUrl,
  codings: [{
    code: 'prov',
    display: 'Healthcare Provider'
  }, {
    code: 'team',
    display: 'Organizational team'
  }]
};
exports.OrganizationTypeVS = OrganizationTypeVS;
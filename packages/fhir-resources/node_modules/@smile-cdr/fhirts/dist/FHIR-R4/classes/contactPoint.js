"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPoint = void 0;
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
class ContactPoint {
}
exports.ContactPoint = ContactPoint;
(function (ContactPoint) {
    ContactPoint.SystemEnum = {
        Phone: 'phone',
        Fax: 'fax',
        Email: 'email',
        Pager: 'pager',
        Url: 'url',
        Sms: 'sms',
        Other: 'other'
    };
    ContactPoint.UseEnum = {
        Home: 'home',
        Work: 'work',
        Temp: 'temp',
        Old: 'old',
        Mobile: 'mobile'
    };
})(ContactPoint = exports.ContactPoint || (exports.ContactPoint = {}));

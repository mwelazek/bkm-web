"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
class Address {
}
exports.Address = Address;
(function (Address) {
    Address.UseEnum = {
        Home: 'home',
        Work: 'work',
        Temp: 'temp',
        Old: 'old',
        Billing: 'billing'
    };
    Address.TypeEnum = {
        Postal: 'postal',
        Physical: 'physical',
        Both: 'both'
    };
})(Address = exports.Address || (exports.Address = {}));

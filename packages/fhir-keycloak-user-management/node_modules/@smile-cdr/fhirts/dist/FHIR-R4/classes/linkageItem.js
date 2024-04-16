"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkageItem = void 0;
/**
 * Identifies two or more records (resource instances) that refer to the same real-world \"occurrence\".
 */
class LinkageItem {
}
exports.LinkageItem = LinkageItem;
(function (LinkageItem) {
    LinkageItem.TypeEnum = {
        Source: 'source',
        Alternate: 'alternate',
        Historical: 'historical'
    };
})(LinkageItem = exports.LinkageItem || (exports.LinkageItem = {}));

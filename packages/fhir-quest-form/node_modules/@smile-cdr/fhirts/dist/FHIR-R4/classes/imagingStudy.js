"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagingStudy = void 0;
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
class ImagingStudy {
}
exports.ImagingStudy = ImagingStudy;
(function (ImagingStudy) {
    ImagingStudy.StatusEnum = {
        Registered: 'registered',
        Available: 'available',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error',
        Unknown: 'unknown'
    };
})(ImagingStudy = exports.ImagingStudy || (exports.ImagingStudy = {}));

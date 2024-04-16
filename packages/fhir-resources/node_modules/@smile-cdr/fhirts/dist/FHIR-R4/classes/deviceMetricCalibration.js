"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMetricCalibration = void 0;
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
class DeviceMetricCalibration {
}
exports.DeviceMetricCalibration = DeviceMetricCalibration;
(function (DeviceMetricCalibration) {
    DeviceMetricCalibration.TypeEnum = {
        Unspecified: 'unspecified',
        Offset: 'offset',
        Gain: 'gain',
        TwoPoint: 'two-point'
    };
    DeviceMetricCalibration.StateEnum = {
        NotCalibrated: 'not-calibrated',
        CalibrationRequired: 'calibration-required',
        Calibrated: 'calibrated',
        Unspecified: 'unspecified'
    };
})(DeviceMetricCalibration = exports.DeviceMetricCalibration || (exports.DeviceMetricCalibration = {}));

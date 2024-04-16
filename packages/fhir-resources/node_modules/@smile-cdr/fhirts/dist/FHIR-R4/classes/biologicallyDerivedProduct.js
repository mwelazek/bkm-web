"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiologicallyDerivedProduct = void 0;
/**
 * A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 */
class BiologicallyDerivedProduct {
}
exports.BiologicallyDerivedProduct = BiologicallyDerivedProduct;
(function (BiologicallyDerivedProduct) {
    BiologicallyDerivedProduct.ProductCategoryEnum = {
        Organ: 'organ',
        Tissue: 'tissue',
        Fluid: 'fluid',
        Cells: 'cells',
        BiologicalAgent: 'biologicalAgent'
    };
    BiologicallyDerivedProduct.StatusEnum = {
        Available: 'available',
        Unavailable: 'unavailable'
    };
})(BiologicallyDerivedProduct = exports.BiologicallyDerivedProduct || (exports.BiologicallyDerivedProduct = {}));

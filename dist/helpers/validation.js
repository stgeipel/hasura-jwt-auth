"use strict";
exports.__esModule = true;
exports.validateRequest = void 0;
function validateRequest(req, next, schema) {
    var options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };
    var _a = schema.validate(req.body, options), error = _a.error, value = _a.value;
    if (error) {
        next("Validation error: " + error.details.map(function (x) { return x.message; }).join(', '));
    }
    else {
        req.body = value;
        next();
    }
}
exports.validateRequest = validateRequest;
//# sourceMappingURL=validation.js.map
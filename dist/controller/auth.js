"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.router = void 0;
var passport_1 = __importDefault(require("../config/passport"));
var joi_1 = __importDefault(require("@hapi/joi"));
var express_1 = __importDefault(require("express"));
var validation_1 = require("../helpers/validation");
var router = express_1["default"].Router();
exports.router = router;
router.post('/login', loginSchema, login);
function login(req, res, next) {
    passport_1["default"].authenticate('local', function (err, user, info) {
        if (err) {
            return handleResponse(res, 400, err);
        }
        if (user) {
            handleResponse(res, 200, JSON.stringify(user));
        }
    })(req, res, next);
}
function handleResponse(res, code, statusMsg) {
    res.status(code).json(statusMsg);
}
function loginSchema(req, res, next) {
    var schema = joi_1["default"].object({
        email: joi_1["default"].string().required(),
        password: joi_1["default"].string().required()
    });
    validation_1.validateRequest(req, next, schema);
}
//# sourceMappingURL=auth.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const path_1 = __importDefault(require("path"));
/* GET React App */
router.get(['/', '/**'], (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../react-app'));
});
exports.default = router;

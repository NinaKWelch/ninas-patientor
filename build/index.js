"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnosis_1 = __importDefault(require("./src/routes/diagnosis"));
const patients_1 = __importDefault(require("./src/routes/patients"));
const app = express_1.default();
const path_1 = __importDefault(require("path"));
// json-parser https://expressjs.com/en/api.html
app.use(express_1.default.json());
// cross-origin resource sharing
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors_1.default());
// show front-end static content in production
// http://expressjs.com/en/starter/static-files.html
app.use(express_1.default.static(path_1.default.join(__dirname, 'build/react-app')));
// Heroku set up for express
// https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
const PORT = process.env.PORT || 3001;
app.use('/api/diagnosis', diagnosis_1.default);
app.use('/api/patients', patients_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

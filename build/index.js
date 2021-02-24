"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnosis_1 = __importDefault(require("./src/routes/diagnosis"));
const patients_1 = __importDefault(require("./src/routes/patients"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
// json-parser https://expressjs.com/en/api.html
app.use(express_1.default.json());
// cross-origin resource sharing
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors_1.default());
// show front-end static content in production
// https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
app.use(express_1.default.static(path_1.default.join(__dirname, 'react-app')));
app.use('/api/diagnosis', diagnosis_1.default);
app.use('/api/patients', patients_1.default);
/* GET React App */
app.get('/patients/*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'react-app', 'index.html'));
});
app.get('/*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'react-app', 'index.html'));
});
// Heroku set up for express
// https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import diagnosisRouter from './src/routes/diagnosis';
import patientRouter from './src/routes/patients';

import path from 'path';
const app = express();

// json-parser https://expressjs.com/en/api.html
app.use(express.json());

// cross-origin resource sharing
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

app.use('/api/diagnosis', diagnosisRouter);
app.use('/api/patients', patientRouter);

// show front-end static content in production
// https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
app.use(express.static(path.join(__dirname, 'react-app')));

/* GET React App */
app.get('/*', (_req, res) => {  
    res.sendFile(path.join(__dirname, 'react-app', 'index.html'));
});


// Heroku set up for express
// https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import diagnosisRouter from './src/routes/diagnosis';
import patientRouter from './src/routes/patients';
import appRouter from './src/routes/app';

const app = express();
import path from 'path';

// json-parser https://expressjs.com/en/api.html
app.use(express.json());

// cross-origin resource sharing
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

// show front-end static content in production
// http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, 'build/react-app')));

// Heroku set up for express
// https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
const PORT = process.env.PORT || 3001;

app.use('/api/diagnosis', diagnosisRouter);
app.use('/api/patients', patientRouter);
app.use('/', appRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

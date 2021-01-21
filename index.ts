import express from 'express';
import cors from 'cors';
import diagnosisRouter from './src/routes/diagnosis';
import patientRouter from './src/routes/patients';

const app = express();

// json-parser https://expressjs.com/en/api.html
app.use(express.json());
// cross-origin resource sharing
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

// Heroku set up for express
// https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
const PORT = process.env.PORT || 3001;

app.use('/api/diagnosis', diagnosisRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
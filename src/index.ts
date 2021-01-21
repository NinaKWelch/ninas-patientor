import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnosis';
import patientRouter from './routes/patients';

const app = express();

// json-parser https://expressjs.com/en/api.html
app.use(express.json());
// cross-origin resource sharing
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

const PORT = 3001;

app.use('/api/diagnosis', diagnosisRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

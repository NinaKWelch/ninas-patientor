"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const utils_1 = require("../utils");
const router = express_1.default.Router();
// get patient list
router.get('/', (_req, res) => {
    res.send(patientService_1.default.getPublicPatientData());
});
// get patient
router.get('/:id', (req, res) => {
    try {
        const id = (0, utils_1.toPatientId)(req.params.id);
        const patient = patientService_1.default.getPatient(id);
        patient ? res.send(patient) : res.status(404).end();
    }
    catch (err) {
        err instanceof Error
            ? res.status(400).send(err.message)
            : res.status(500).send("Unknown Error");
    }
});
// get patient entries
router.get('/:id/entries', (req, res) => {
    try {
        const id = (0, utils_1.toPatientId)(req.params.id);
        const patient = patientService_1.default.getPatient(id);
        patient ? res.send(patient.entries) : res.status(404).end();
    }
    catch (err) {
        err instanceof Error
            ? res.status(400).send(err.message)
            : res.status(500).send("Unknown Error");
    }
});
// add patient to patient list
router.post('/', (req, res) => {
    try {
        const newPatient = (0, utils_1.toNewPatient)(req.body);
        const addedPatient = patientService_1.default.addPatient(newPatient);
        res.json(addedPatient);
    }
    catch (err) {
        err instanceof Error
            ? res.status(400).send(err.message)
            : res.status(500).send("Unknown Error");
    }
});
// add patient entry to patient
router.post('/:id/entries', (req, res) => {
    try {
        const newEntry = (0, utils_1.toNewEntry)(req.body);
        const addedEntry = patientService_1.default.addPatientEntry(newEntry);
        res.json(addedEntry);
    }
    catch (err) {
        err instanceof Error
            ? res.status(400).send(err.message)
            : res.status(500).send("Unknown Error");
    }
});
// update patient
router.put('/:id', (req, res) => {
    try {
        const id = (0, utils_1.toPatientId)(req.params.id);
        // the entry has already been parsed
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const entry = req.body;
        const updatedPatient = patientService_1.default.updatePatient(id, entry);
        res.json(updatedPatient);
    }
    catch (err) {
        err instanceof Error
            ? res.status(400).send(err.message)
            : res.status(500).send("Unknown Error");
    }
});
exports.default = router;

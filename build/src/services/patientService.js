"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const getPatients = () => patients_1.default;
const getPatient = (id) => {
    const patient = patients_1.default.find(p => p.id === id);
    return patient ? patient : undefined;
};
const getRating = (arr) => {
    const checks = arr.map((obj) => obj.type === "HealthCheck" ? obj.healthCheckRating : null);
    // get the latest rating
    const lastCheck = checks.pop();
    if (typeof lastCheck === "number") {
        return lastCheck;
    }
    return "Not given";
};
const getPublicPatientData = () => (patients_1.default.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    healthRating: getRating(entries)
})));
const getId = () => {
    const digits = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const arr = ['0', '0', '0'];
    const uuid = arr.reduce(a => a + digits[Math.floor(Math.random() * digits.length)], '');
    return `d2773${uuid}-f723-11e9-8f0b-362b9e155667`;
};
const addPatient = (patient) => {
    const newPatient = Object.assign({ id: getId(), entries: [] }, patient);
    patients_1.default.push(newPatient);
    return newPatient;
};
const addPatientEntry = (patientId, entry) => {
    const patient = patients_1.default.find(patient => patient.id === patientId);
    const newEntry = Object.assign({ id: getId() }, entry);
    if (patient) {
        const updatedPatient = Object.assign(Object.assign({}, patient), { entries: [...patient.entries, newEntry] });
        const updatedEntries = updatedPatient.entries;
        patients_1.default.filter(p => p.id !== updatedPatient.id ? patient : updatedPatient);
        return updatedEntries;
    }
    return undefined;
};
exports.default = {
    getPatients,
    getPatient,
    getPublicPatientData,
    addPatient,
    addPatientEntry
};

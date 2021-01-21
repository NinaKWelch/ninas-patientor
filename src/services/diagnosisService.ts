import diagnosis from '../../data/diagnosis';
import { Diagnosis } from '../types_backend';

const getDiagnosis = (): Diagnosis[] => diagnosis;

export default {
    getDiagnosis
};
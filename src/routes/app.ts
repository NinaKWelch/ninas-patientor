import express from 'express';

const router = express.Router();
import path from 'path';

/* GET React App */
router.get(['/', '/**'], (_req, res) => {  
    res.sendFile(path.join(__dirname, '../../react-app'));
});

export default router;
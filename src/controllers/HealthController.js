import express from 'express';

const healthController = express.Router({ mergeParams: true });

healthController.get('/', async (req, res) => {
    res.json({ status: 'OK' });
});

export default healthController;

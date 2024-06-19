const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM items WHERE id = ?', [id], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Internal Server Error');
        }
        res.redirect('/');
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: "productsdata get"
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: "products posting"
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: "products updated"
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: "products deleted"
    });
});
module.exports = router;

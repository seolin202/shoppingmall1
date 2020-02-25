const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        msg: "products data get"
    });
});

module.export = router;

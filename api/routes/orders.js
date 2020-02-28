// express loading
const express = require('express');
// express안에 있는 모듈 중 Router를 쓸 것, 이것을 router라고 상수한다
const router = express.Router();

// orders와 관련된 api, order CRUD는 여기서 진행됨

router.get('/', (req, res) => {
    res.json({
        msg: "ordersdata get"
    });
});

// router를 모듈화 시켜서 내보낸다.
module.exports = router;

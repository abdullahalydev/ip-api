// packages
const express = require("express");
const geo = require("geoip-lite")

// router
const router = express.Router();

// middleware
const ipSetter = require("../middleware/ipSetter")
const middleware = require("../middleware/middleware")


router.get("/", [
    ipSetter,
    ...middleware
], (req, res) => {

    const lookup = req.lookup;

    const target = req.query.target;

    if (!target) {
        res.send({
            success: true,
            ...lookup
        });
        return;
    }
    else {
        const property = lookup[target];
        if (property) {
            res.send({ success: true, data: property })
        }
        else {
            res.send({ success: false, message: "target not found" })
        }
    }

})

// export router
module.exports = router;
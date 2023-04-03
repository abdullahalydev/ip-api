// packages
const express = require("express");
const geo = require("geoip-lite")

// router
const router = express.Router();

// middleware
const ipLookupSetter = require("../middleware/ipLookupSetter")
const middleware = require("../middleware/middleware")


router.get("/:ip/has/:target/equal/:value", [
    ipLookupSetter,
    ...middleware
], (req, res) => {

    const lookup = req.lookup;

    const property = req.params.target;
    const value = req.params.value;


    const lookupProperty = lookup[property];
    if (lookupProperty) {
        if (lookupProperty == value) {
            res.send({ success: true, data: true })
        }
        else {
            res.send({ success: true, data: false })
        }
    }
    else {
        res.send({ success: false, message: "target not found" })
    }

})

router.get("/:ip/has/:target/notEqual/:value", [
    ipLookupSetter,
    ...middleware
], (req, res) => {

    const lookup = req.lookup;

    const property = req.params.target;
    const value = req.params.value;


    const lookupProperty = lookup[property];
    if (lookupProperty) {
        if (lookupProperty != value) {
            res.send({ success: true, data: true })
        }
        else {
            res.send({ success: true, data: false })
        }
    }
    else {
        res.send({ success: false, message: "target not found" })
    }

})


// export router
module.exports = router;
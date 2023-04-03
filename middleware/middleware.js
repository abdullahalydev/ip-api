const area = require("../middleware/area")
const barcodePrefix = require("../middleware/barcodePrefix")
const callingCode = require("../middleware/callingCode")
const capitalCity = require("../middleware/capitalCity")
const city = require("../middleware/city")
const cityCode = require("../middleware/cityCode")
const continent = require("../middleware/continent")
const continentCode = require("../middleware/continentCode")
const coordinates = require("../middleware/coordinates")
const country = require("../middleware/country")
const countryCode = require("../middleware/countryCode")
const currency = require("../middleware/currency")
const currencyCode = require("../middleware/currencyCode")
const domain = require("../middleware/domain")
const eu = require("../middleware/eu")
const governmentType = require("../middleware/governmentType")
const ipLookupSetter = require("../middleware/ipLookupSetter")
const isoNumeric = require("../middleware/isoNumeric")
const languages = require("../middleware/languages")
const latitude = require("../middleware/latitude")
const longitude = require("../middleware/longitude")
const range = require("../middleware/range")
const religion = require("../middleware/religion")
const timezone = require("../middleware/timezone")
const worldRegion = require("../middleware/worldRegion")

const mwArray = [
    range,
    country,
    countryCode,
    continent,
    continentCode,
    city,
    cityCode,
    timezone,
    // capitalCity,
    // religion,
    // worldRegion,
    // currency,
    currencyCode,
    domain,
    // coordinates,
    governmentType,
    // isoNumeric,
    // languages,
    barcodePrefix,
    callingCode,
    longitude,
    latitude,
    // area,
    // eu
]

module.exports = mwArray
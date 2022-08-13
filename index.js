/*
* This script searches usZips.json (a json containing an object for each US zip code that includes city, state, lat, lon) for a specific zip code and returns an array.
*/

// import json with all zipcodes
const allZips = require('./data/zipJsons/usZips.json');

// import json query/finder tool
var jsonQuery = require('json-query');

// define main function
export default function zipFinder(SixDigitZip) { // zip code as string

    // create search string for jsonQuery
    var searchString = "[zipCode=" + SixDigitZip + "]"

    // initialize search object
    finder = jsonQuery(searchString, {
        data: allZips
    })

    // unpack search object
    var myZip = finder["value"]["zipCode"]
    var myCity = finder["value"]["cityName"]
    var myState = finder["value"]["state"]
    var myLat = finder["value"]["lat"]
    var myLon = finder["value"]["lon"]

    result = [myZip, myCity, myState, myLat, myLon]

    // return data  
    console.log(result)
    resturn(result)
}

zipFinder("60657")



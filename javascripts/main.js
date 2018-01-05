"use strict";

const factory = require('./factory');
const $ = require('jquery');

console.log("hello?");

$("#button").click( function(){
    factory.getNasaInfo()
    .then( (space) => {
        console.log("what is space", space);
        let startDate = $("#startDate").val();
        let endDate = $("#endDate").val();
        $("#textField").append(space.near_earth_objects[startDate][0].name);
        $("#textField").append(space.near_earth_objects[startDate][1].name);
        $("#textField").append(space.near_earth_objects[startDate][2].name);
    });
});

// module.exports.getNasaInfo = () => {
//     console.log("This is the NASA info");
//    return new Promise ( (resolve, reject) => {
    //    $.ajax({
    //        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=qcwByBzksEsfULuFzSUGrAktFdZpJAyhqtxI46Kx'
    //    })
    //    .done( (space) => {
    //     //    resolve(space);
    //        console.log("space", space);
    //    })
    //    .fail( () => {
    //        console.log("did not get data");
    //    });

    
//    });

// };

// getNasaInfo();
    
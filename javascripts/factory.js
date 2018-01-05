"use strict";


const $ = require('jquery');

module.exports.getNasaInfo = () => {
    return new Promise ( (resolve ,reject) => {
            let startDate = $("#startDate").val();
            console.log("startDate", startDate);
            let endDate = $("#endDate").val();
            $.ajax({
                url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=qcwByBzksEsfULuFzSUGrAktFdZpJAyhqtxI46Kx`
            })
            .done( (space) => {
                resolve(space);
            })
            .fail( () => {
                console.log("did not get data");
            });
        });
    };
// };


$(document).ready(function () {

       new Promise((resolve, reject) => {

            $.ajax({
                // url: `${config.codeUrl}/${countryCode}`,
                url: `https://api.coingecko.com/api/v3/coins`,

                method: "GET",
                success: function (councoinId) {
                    var coinStorage = [];
                    var coinStorage = councoinId.slice(0, 10)
                    localStorage.setItem('councoinId', JSON.stringify(councoinId.slice(0, 10)));
                    console.log(councoinId.slice(0, 10))

                    coinStorage.push(councoinId.slice(0, 10))
                       console.log(councoinId.slice(0, 10))
                    resolve(councoinId)

                    const smallArray =  councoinId.slice(10);
                },
                error: function (err) {
                    reject(err, "there is some error")
                }
             
            }) // ajax
        }) // promise
  


// function draw(){

//       console.log( councoinId); 

//     // getCoinbyId();
//     // fetchLs();
// }

// draw()


    });    //RF

// Fetch the JSON data and console log it


function immigrants_data (){
    let url = '/http://127.0.0.1:5000/Immigrants';
    let immigrant_data = d3.json(url).then(function(data){
        console.log(Object.keys(data))
    });

}
}

function Mortgage_data  (){
    let url = '/Mortgage';
    let Mortgage_data = d3.json(url).then(function(data){
        console.log(Object.keys(data))
    });
}





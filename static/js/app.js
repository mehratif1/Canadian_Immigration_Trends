
function immigrants_data(sample) {
    let url = '/Immigrants';

    d3.json(url).then(function (data) {
        console.log(data);
        let resultArray = data.filter(sampleObj => sampleObj.province == sample);
        console.log(resultArray)

    let yeardata = data.year;
    let immigrantcount = data.immigrants_count;
    let provincedata = data.province;

    let bardata = [
        {
          y: immigrantcount,
          x: yeardata,
          type: "bar",
          orientation: "h",
        }
      ];

    let barLayout = {
        title: "Immigrants trend over the years",
        margin: { t: 30, l: 150 }
      };
      Plotly.newPlot("bar",bardata,barLayout)
  

   
    });
}

// Call the function to load data and create the bar chart
immigrants_data("Alberta");

    
   


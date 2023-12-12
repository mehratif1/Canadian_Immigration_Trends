
function immigrants_data(sample) {

    // Specify the URL for the data
    let url = '/Immigrants';

    // Fetch data from the specified URL using d3.json
    d3.json(url).then(function (data) {
        console.log(data);

    // Filter the data based on the selected province
        let resultArray = data.filter(sampleObj => sampleObj.province == sample);
        console.log(resultArray)

    // Extract year and immigrants_count data from the filtered result
    let yeardata = []
    let immicount =[]
    for (let i = 0; i < resultArray.length ; i++){
      yeardata.push(resultArray[i].year);
      immicount.push(resultArray[i].immigrants_count);
    };

     // Display the extracted data in the console
    console.log(yeardata);
    console.log(immicount);

    // Create a bar chart using Plotly with the extracted data
    let bardata = [
        {
          y: immicount,
          x: yeardata,
          type: "bar",
       
        }
      ];

    let barLayout = {
        title: `Immigrants trend over the years in ${sample}`,
        margin: { t: 30, l: 150 },
        xaxis: {
          title: "Years"
      },
      yaxis: {
          title: "Immigrants Count"
      }
    };
     
      Plotly.newPlot("bar",bardata,barLayout)
  // Create a line chart using Plotly with the extracted data
    let linedata = [
  {
      y: immicount,
      x: yeardata,
      mode: "lines+markers",
      type: "scatter",
      line: {
          color: 'rgba(75, 192, 192, 1)',
          width: 2
      },
      marker: {
          size: 10,
          color: 'rgba(75, 192, 192, 1)',
      }
  }
];

let lineLayout = {
  title: `Line Chart: Immigrants trend over the years in ${sample}`,
  margin: { t: 30, l: 150 },
  xaxis: {
    title: "Years"
},
yaxis: {
    title: "Immigrants Count"
}
};


// Create or update the line chart with new data
Plotly.newPlot("line", linedata, lineLayout);

   
    })};

  


    function info(sample) {

      let url = '/Immigrants';

      d3.json(url).then(function (data) {

      console.log(data);
  
          // Assuming data is an array of objects with properties like year, immigrants_count, province
          let resultArray = data.filter(sampleObj => sampleObj.province == sample);
          let result = resultArray[0];
          console.log(result);
  
          infoPanel = d3.select("#sample-info");
          infoPanel.html("");
  
          // Display information (year, immigrants_count, province)
          if (result.year) {
              infoPanel.append("h5").text(`Year: ${result.year}`);
          }
          if (result.immigrants_count) {
              infoPanel.append("h5").text(`Immigrants Count: ${result.immigrants_count}`);
          }
          if (result.province) {
              infoPanel.append("h5").text(`Province: ${result.province}`);
          }
      });
  }

  


  

    
  function init(){


    // Specify the URL for the data
      let url = '/Immigrants';
    
    // Fetch data from the specified URL using d3.json
      d3.json(url).then((data) => {

    // Grab a reference to the dropdown select element
    let selector = d3.select("#provincedata");
    
    // Filter the data for the default year (2022) and extract province data
    let resultArray = data.filter(sampleObj => sampleObj.year == 2022);
    let provincedata = []

    for (let i = 0; i < resultArray.length ; i++){
      provincedata.push(resultArray[i].province);
      
    };

  // Display the extracted province data in the console
  console.log(provincedata);

  // Populate the dropdown select options with province names
    for (let i = 0 ; i < provincedata.length ; i++){
      selector
          .append("option")
          .text(provincedata[i])
          .property("value", provincedata[i]);
    }

    // Grab a reference to the dropdown select element for years
    let yearselector = d3.select("#yeardata");
    
    // Filter the data for the default province ("Alberta") and extract year data
    let yearresultArray = data.filter(sampleObj => sampleObj.province == "Alberta");
    let yeardata = []

    for (let i = 0; i < yearresultArray.length ; i++){
      yeardata.push(yearresultArray[i].year);
      
    };

     // Populate the dropdown select options with year values
    for (let i = 0 ; i < yeardata.length ; i++){
      yearselector
          .append("option")
          .text(yeardata[i])
          .property("value", yeardata[i]);
    }

     
     // Use the first province in the list to initialize the chart
      let firstSample = provincedata[0];
      immigrants_data(firstSample);
      info(firstSample);
      

      
})
    };
  
  function provinceoptionChanged (newSample){
  immigrants_data(newSample)
  info(newSample)
  }
  function yearoptionChanged (newSample){
    immigrants_data(newSample)
    info(newSample)
    // Fetch data from the '/Immigrants' endpoint
    let url = '/Immigrants';
    
    // Fetch data using d3.json
    d3.json(url).then((data) => {
        // Filter the data based on the selected year
        let resultArray = data.filter(sampleObj => sampleObj.year == newSample);

        // Extract province and immigrant_count data
        let provincedata = resultArray.map(obj => obj.province);
        let immigrantcount = resultArray.map(obj => obj.immigrants_count);

        // Create bardata for Plotly
        let bardata = [
            {
                y: immigrantcount,
                x: provincedata,
                type: "bar",
            }
        ];

        // Create barLayout for Plotly
        let barLayout = {
            title: `Immigrants count for ${newSample}`,
            margin: { t: 30, l: 150 },
            xaxis: {
              title: "Province"
          },
          yaxis: {
              title: "Immigrants Count"
          }
        }
        

        // Update the bar chart with new data
        Plotly.newPlot("bar", bardata, barLayout);

        // Create linedata for Plotly
        let linedata = [
          {
  
      y: immigrantcount,
      x: provincedata,
      mode: "lines+markers",
      type: "scatter",
      line: {
          color: 'rgba(75, 192, 192, 1)',
          width: 2
      },
      marker: {
          size: 10,
          color: 'rgba(75, 192, 192, 1)',
      }
  }
];

// Create lineLayout for Plotly
let lineLayout = {
 title: `Line Chart`,
  margin: { t: 30, l: 150 },
  xaxis: {
      title: "Province"
  },
  yaxis: {
      title: "Immigrants Count"
  }
};

// Update the line chart with new data
Plotly.newPlot("line", linedata, lineLayout);
    });
}


init()


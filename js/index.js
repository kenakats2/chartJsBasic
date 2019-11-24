const ctx = document.getElementById("myChart").getContext("2d");

let initData = [3, 18, 16, 10, 12, 7, 12];

let chartParam = {
  "type": "horizontalBar",
  "data": {
    "labels": ["A","B","C","D","E","F","G"],
    "datasets": [{
      "label": "label",
      "data": initData,
      "backgroundColor": "rgba(255,153,0,0.4)"
    }]
  }
}

let myChart = new Chart(ctx,chartParam);

let dataArray = [];

function generateData(count){
  for (let i = 0; i< 100; i++) {
    dataTmp = [];
    for (let j = 0; j<7; j++){
      let val = Math.random();
      dataTmp.push(val);
    }
    dataArray.push(dataTmp);
  }
  return dataArray;
}

let count = 0;

generateData();

function updateChart(){
  let newData = dataArray[count];
  myChart.data.datasets[0].data = newData;
  myChart.update();
  count++;
}

let chartInterval;

function startChart(){
  chartInterval = setInterval("updateChart()",500);
}


function stopChart(){
  clearInterval(chartInterval);
}

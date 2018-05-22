// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $timeInput = document.querySelector("#time");
var $searchBtn = document.querySelector("#search");
var $searchBtn2 = document.querySelector("#citysearch");
var $cityInput = document.querySelector("#city");
var $searchBtn3 = document.querySelector("#statesearch");
var $stateInput = document.querySelector("#state");
var $searchBtn4 = document.querySelector("#countrysearch");
var $countryInput = document.querySelector("#country");
var $searchBtn5 = document.querySelector("#shapesearch");
var $shapeInput = document.querySelector("#shape");

$searchBtn.addEventListener("click", handleSearchButtonClick);
$searchBtn2.addEventListener("click", handleSearchButtonClick2);
$searchBtn3.addEventListener("click", handleSearchButtonClick3);
$searchBtn4.addEventListener("click", handleSearchButtonClick4);
$searchBtn5.addEventListener("click", handleSearchButtonClick5);

var newData = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < newData.length; i++) {
    var address = newData[i];
    var fields = Object.keys(address);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
};

function handleSearchButtonClick() {
    var filterTime = $timeInput.value.trim().toLowerCase();

    newData = dataSet.filter(function(address) {
      var timeDay = address.datetime.toLowerCase();
  
      return timeDay === filterTime;
    });
    renderTable();
  }

  function handleSearchButtonClick2() {
    var filtercity = $cityInput.value.trim().toLowerCase();

    newData = dataSet.filter(function(address) {
      var CityData = address.city.toLowerCase();
  
      return CityData === filtercity;
    });
    renderTable();
  }
  function handleSearchButtonClick3() {
    var filterstate = $stateInput.value.trim().toLowerCase();

    newData = dataSet.filter(function(address) {
      var stateData = address.state.toLowerCase();
  
      return stateData === filterstate;
    });
    renderTable();
  }


function handleSearchButtonClick4() {
  var filtercountry = $countryInput.value.trim().toLowerCase();

  newData = dataSet.filter(function(address) {
    var countryData = address.country.toLowerCase();

    return countryData === filtercountry;
  });
  renderTable();
}

function handleSearchButtonClick5() {
  var filtershape = $shapeInput.value.trim().toLowerCase();

  newData = dataSet.filter(function(address) {
    var shapeData = address.shape.toLowerCase();

    return shapeData === filtershape;
  });
  renderTable();
}

  renderTable();
/* VARIABLES */

var _theDate =  new Date();
    _month = _theDate.getMonth();
    _day = _theDate.getDate();
    _year = _theDate.getFullYear();

// var _getResult = document.getElementById("getResult");

function calc(){
    // Input Value Collect
    var _dateInput = document.getElementById("dateInput").value;
    // Split the String
    var _getArray = _dateInput.split("-");
    
    var _getYear = parseInt(_getArray[0]);
    var _getMonth = parseInt(_getArray[1]);
    var _getDay = parseInt(_getArray[2]);

    // Result Process
    var rDay = _day + 30 - _getDay;
    var rMonth = _month + 12 - _getMonth;
    var rYear = _year - 1 - _getYear;

    if(_dateInput == null){
        document.getElementById("noDataShow").textContent.display =  "none";
   }
    
   //Condition Apply
    if(rDay >= 30){
        rDay = 0 + rDay % 30;
        rDay = rDay + 1;
        rMonth = rMonth + 1;
    } else{
        rDay = rDay;
        rMonth = rMonth
    }
   document.getElementById("rDay").innerText = rDay + " days";

    if(rMonth >=12){
        rMonth = rMonth % 12;
        rYear = rYear + 1;
    } else{
        rMonth = rMonth;
        rYear = rYear;
    }

   document.getElementById("rMonth").innerText =  rMonth + " Months";
   document.getElementById("rYear").innerText =  rYear + " Years";

}

// if (_day < _getDay ) {
//     var rDay = ((_day + 30) - _getDay);
//     var rDayId = document.getElementById("rDay");
//         rDayId.innerText = rDay + " days";
//     var _month = (_month - 1);
// } 
// else if (_month < _getMonth) {
//     var rMonth = ((_month + 12) - _getMonth);
//     var rMonthId = document.getElementById("rMonth");
//     console.log(rMonthId);
//         // rMonthId.innerText = rMonth + " Months";
//     // var _year = ((_year - 1) - _getYear);
// }
// else{

// }
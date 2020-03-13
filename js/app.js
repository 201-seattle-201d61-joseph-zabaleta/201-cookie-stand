'use strict';

var stores = [];
var hours = 14;
var hoursOfOperation = ['7am ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ];

//Constructor which is used to build all stores using 4 param's
function CreateStore(name, minCust, maxCust, avgCookie) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hours = hours;

  //invokes prototype which returns two pieces of information our cookie sales and cookie sum
  var avgCookieSales = this.metrics();

  //adding to more properters from metrics prototype for use
  this.totalCookiesPerHour = avgCookieSales.data;
  this.totalSum = avgCookieSales.sum;
  //last once the constructor has built its object, push this object to a array for me
  stores.push(this);
}

// Calculates the average nuber of cookies sold per hour per store built as a prototype to constructor function
CreateStore.prototype.metrics = function() {

  var avgCookieSales = [];
  var dailySum = 0;

  //Loop for calculating random customer * avgCookie and builds cookie sales array
  for (var i = 0; i <this.hours; i++) {

    //Calculates random number between min and max customers
    var randomCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    //Takes randomCustomer value times the average cookie sale
    var totalCookies = Math.ceil(randomCustomer * this.avgCookie);
    //Running total of cookies sold per hour
    dailySum += totalCookies;
    //takes totalCookies per hour and pushes them into an array
    avgCookieSales.push(totalCookies);
  }

  //This return function is used to return two values in an array/ that can be accessed by calling objectname.method().return or sum 
  return {
    data: avgCookieSales,
    sum: dailySum,
  };


};

// This prototype creates a row on a table in HTML that has an ID to reference it.
CreateStore.prototype.renderRow = function () {
  //this section before the loop adds the first cell to the row for a name, only needed to run once for the name.
  //gets hard coded table from html body by ID and assigns it to a variable
  var getTable = document.getElementById('storeData');
  //Creates a row element for our table and assigns it to a variable
  var createRow = document.createElement('tr');
  //Creates a column element for our table and assigns it to a variable
  var createCol = document.createElement('td');

  //Here we are add content to our first column/cell (since its a prototype we can use 'this' command to reference object)
  createCol.textContent = this.name;
  //Next we add this column to our row then our row to our table
  createRow.appendChild(createCol);
  getTable.appendChild(createRow);

  //Loop to write the rest of the columns for daily cookie sales after the name column is created.
  for (var i = 0; i < this.totalCookiesPerHour.length; i++) {
    //creates a new column and adds content then appends/adds to the row
    createCol = document.createElement('td');
    createCol.textContent = this.totalCookiesPerHour[i];
    createRow.appendChild(createCol);
  }
  //This last bit adds the daily total for each store as the last column/cell in the row.
  createCol = document.createElement('td');
  createCol.textContent = this.totalSum;
  createRow.appendChild(createCol);
};

// eslint-disable-next-line no-unused-vars
var seattle = new CreateStore('Seattle', 23, 65, 6.3);
// eslint-disable-next-line no-unused-vars
var tokyo = new CreateStore('Tokyo', 3, 24, 1.2);
// eslint-disable-next-line no-unused-vars
var dubai = new CreateStore('Dubai', 11, 38, 3.7);
// eslint-disable-next-line no-unused-vars
var paris = new CreateStore('Paris', 20, 38, 2.3);
// eslint-disable-next-line no-unused-vars
var lima = new CreateStore('Lima', 2, 16, 4.6);

// console.log(stores);

//This function will create the header row
function renderHeaderRow() {
  var getTable = document.getElementById('storeData');
  var createRow = document.createElement('tr');
  var createCol = document.createElement('td');
  createRow.appendChild(createCol);

  for (var i = 0; i < hours; i++) {

    //creates a new column on header for each hour
    createCol = document.createElement('td');
    createCol.textContent = hoursOfOperation[i];
    createRow.appendChild(createCol);
  }

  createCol = document.createElement('td');
  createCol.textContent = 'Store Totals';
  createRow.appendChild(createCol);
  getTable.appendChild(createRow);
}

//Writing the totals per indivual hour for all stores. aka the footer row
function renderFooterRow() {
  //This variable is to keep track of the sum of cookies sold per hour from all stores (vertically on the table)
  var hourSumTotal = 0;
  //These variables get the table to append and creates a row and cell + adds content to it
  var getTable = document.getElementById('storeData');
  var createRow = document.createElement('tr');
  var createCol = document.createElement('td');
  createCol.textContent = 'Hour Totals';
  createRow.appendChild(createCol);

  for (var i = 0; i < hours; i++) {
    //variable to keeping track of total per hour
    var sumPerHour = 0;
    //creates a new column on totals/footer row
    createCol = document.createElement('td');

    for (var j = 0; j < stores.length; j++) {
      //here we are added each store, cookie array, at each index, per hour, so 14 times.
      sumPerHour += stores[j].totalCookiesPerHour[i];
    }

    //Now that we calculated the sumPerHour we can add that to column content and add to the row
    createCol.textContent = sumPerHour;
    createRow.appendChild(createCol);

    //Now we take our sum from this loop add to SumTotal variable to be printed
    hourSumTotal += sumPerHour;
  }

  //After the inner loop as added up each store data at an hour it adds this content to a cell before going on to next hour
  createCol = document.createElement('td');
  createCol.textContent = hourSumTotal;
  createRow.appendChild(createCol);
  getTable.appendChild(createRow);
}

//Function that handles the form event
var addStoreForm = document.getElementById('addStoreForm');
function formHandler(event) {
  event.preventDefault();

  //variables that grab the event and assign it by the user input value for name
  var userInput = event.target;
  // var newStore = userInput.name.value;
  // console.log(newStore);

  //Here user input is passed through constructor to make a new store in the 'stores' array
  new CreateStore(userInput.name.value, userInput.minCust.value, userInput.maxCust.value, userInput.avgCookie.value);
  console.log(stores);

}

//Attaches form event handler to event listener
addStoreForm.addEventListener('submit', formHandler);

//Function that handles the button event
var buttonEl = document.getElementById('submitButton');
function buttonHandler(event) {
  document.getElementById('storeData').innerHTML = null;
  renderHeaderRow();
  //This loop will cycle through our stores array and renders them to the table.
  for (var i = 0; i < stores.length; i++) {
    stores[i].renderRow();
  }
  renderFooterRow();
}

//Attaches button event handler to event listener

buttonEl.addEventListener('click', buttonHandler);






renderHeaderRow();
seattle.renderRow();
tokyo.renderRow();
dubai.renderRow();
paris.renderRow();
lima.renderRow();
renderFooterRow();

// var seattle = {
//   name: 'seattle',
//   min: 23,
//   max: 65,
//   average: 6.3,
//   hoursOpen: 14,
//   hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
//   cookieArray: [],
//   customerArray: [],
//   cookiesSoldArray: [],

//   metrics: function() {
//     var totalCookiesSold = 0;

//     for (var i = 0; i <= this.hoursOpen -1; i++) {

//       //Calculates random number between min and max customers
//       var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       // console.log(randomCustomer);

//       //Takes randomCustomer value times the average cookie sale
//       var totalCookies = Math.floor(randomCustomer * this.average);
//       // console.log(totalCookies);

//       //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
//       totalCookiesSold = totalCookiesSold + totalCookies;
//       // console.log(totalCookiesSold);

//       //stores all data into two arrays
//       this.customerArray.push(randomCustomer);
//       this.cookieArray.push(totalCookies);
//       this.cookiesSoldArray.push(totalCookiesSold);
//     }
//   },

//   renderData: function () {

//     //Runs metrics function for data
//     this.metrics();

//     for (var i = 0; i < this.hoursOfOperation.length; i++) {

//       //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
//       var parentElement = document.getElementById(this.name);
//       var childElement = document.createElement('li');

//       //This appends or changes parentEl <ul>, by added new childEl <li>
//       parentElement.appendChild(childElement);

//       // This is the actually string content placed inside <li> element
//       childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
//       childElement.append();
//     }

//     //This variable pulls the last running total of cookies sold
//     var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
//     // console.log(lastTotal);

//     //Writes the final total cookies to bottom of list
//     childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
//   }
// };

// var tokyo = {
//   name: 'tokyo',
//   min: 3,
//   max: 24,
//   average: 1.2,
//   hoursOpen: 14,
//   hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
//   cookieArray: [],
//   customerArray: [],
//   cookiesSoldArray: [],

//   metrics: function() {
//     var totalCookiesSold = 0;

//     for (var i = 0; i <= this.hoursOpen -1; i++) {
//       // for (var i= 0; i < 1; i++) {
//       //Calculates random number between min and max customers
//       var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       // console.log(randomCustomer);

//       //Takes randomCustomer value times the average cookie sale
//       var totalCookies = Math.floor(randomCustomer * this.average);
//       // console.log(totalCookies);

//       //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
//       totalCookiesSold = totalCookiesSold + totalCookies;
//       // console.log(totalCookiesSold);

//       //stores all data into two arrays
//       this.customerArray.push(randomCustomer);
//       this.cookieArray.push(totalCookies);
//       this.cookiesSoldArray.push(totalCookiesSold);
//     }
//   },

//   renderData: function () {

//     //Runs metrics function for data
//     this.metrics();

//     for (var i = 0; i < this.hoursOfOperation.length; i++) {

//       //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
//       var parentElement = document.getElementById(this.name);
//       var childElement = document.createElement('li');

//       //This appends or changes parentEl <ul>, by added new childEl <li>
//       parentElement.appendChild(childElement);

//       // This is the actually string content placed inside <li> element
//       childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
//       childElement.append();
//     }

//     //This variable pulls the last running total of cookies sold
//     var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
//     // console.log(lastTotal);

//     //Writes the final total cookies to bottom of list
//     childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
//   }
// };

// var dubai = {
//   name: 'dubai',
//   min: 11,
//   max: 38,
//   average: 3.7,
//   hoursOpen: 14,
//   hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
//   cookieArray: [],
//   customerArray: [],
//   cookiesSoldArray: [],

//   metrics: function() {
//     var totalCookiesSold = 0;

//     for (var i = 0; i <= this.hoursOpen -1; i++) {
//       // for (var i= 0; i < 1; i++) {
//       //Calculates random number between min and max customers
//       var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       // console.log(randomCustomer);

//       //Takes randomCustomer value times the average cookie sale
//       var totalCookies = Math.floor(randomCustomer * this.average);
//       // console.log(totalCookies);

//       //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
//       totalCookiesSold = totalCookiesSold + totalCookies;
//       // console.log(totalCookiesSold);

//       //stores all data into two arrays
//       this.customerArray.push(randomCustomer);
//       this.cookieArray.push(totalCookies);
//       this.cookiesSoldArray.push(totalCookiesSold);
//     }
//   },

//   renderData: function () {

//     //Runs metrics function for data
//     this.metrics();

//     for (var i = 0; i < this.hoursOfOperation.length; i++) {

//       //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
//       var parentElement = document.getElementById(this.name);
//       var childElement = document.createElement('li');

//       //This appends or changes parentEl <ul>, by added new childEl <li>
//       parentElement.appendChild(childElement);

//       // This is the actually string content placed inside <li> element
//       childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
//       childElement.append();
//     }

//     //This variable pulls the last running total of cookies sold
//     var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
//     // console.log(lastTotal);

//     //Writes the final total cookies to bottom of list
//     childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
//   }
// };

// var paris = {
//   name: 'paris',
//   min: 20,
//   max: 38,
//   average: 2.3,
//   hoursOpen: 14,
//   hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
//   cookieArray: [],
//   customerArray: [],
//   cookiesSoldArray: [],

//   metrics: function() {
//     var totalCookiesSold = 0;

//     for (var i = 0; i <= this.hoursOpen -1; i++) {
//       // for (var i= 0; i < 1; i++) {
//       //Calculates random number between min and max customers
//       var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       // console.log(randomCustomer);

//       //Takes randomCustomer value times the average cookie sale
//       var totalCookies = Math.floor(randomCustomer * this.average);
//       // console.log(totalCookies);

//       //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
//       totalCookiesSold = totalCookiesSold + totalCookies;
//       // console.log(totalCookiesSold);

//       //stores all data into two arrays
//       this.customerArray.push(randomCustomer);
//       this.cookieArray.push(totalCookies);
//       this.cookiesSoldArray.push(totalCookiesSold);
//     }
//   },

//   renderData: function () {

//     //Runs metrics function for data
//     this.metrics();

//     for (var i = 0; i < this.hoursOfOperation.length; i++) {

//       //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
//       var parentElement = document.getElementById(this.name);
//       var childElement = document.createElement('li');

//       //This appends or changes parentEl <ul>, by added new childEl <li>
//       parentElement.appendChild(childElement);

//       // This is the actually string content placed inside <li> element
//       childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
//       childElement.append();
//     }

//     //This variable pulls the last running total of cookies sold
//     var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
//     // console.log(lastTotal);

//     //Writes the final total cookies to bottom of list
//     childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
//   }
// };

// var lima = {
//   name: 'lima',
//   min: 2,
//   max: 16,
//   average: 4.6,
//   hoursOpen: 14,
//   hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
//   cookieArray: [],
//   customerArray: [],
//   cookiesSoldArray: [],

//   metrics: function() {
//     var totalCookiesSold = 0;

//     for (var i = 0; i <= this.hoursOpen -1; i++) {
//       // for (var i= 0; i < 1; i++) {
//       //Calculates random number between min and max customers
//       var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       // console.log(randomCustomer);

//       //Takes randomCustomer value times the average cookie sale
//       var totalCookies = Math.floor(randomCustomer * this.average);
//       // console.log(totalCookies);

//       //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
//       totalCookiesSold = totalCookiesSold + totalCookies;
//       // console.log(totalCookiesSold);

//       //stores all data into two arrays
//       this.customerArray.push(randomCustomer);
//       this.cookieArray.push(totalCookies);
//       this.cookiesSoldArray.push(totalCookiesSold);
//     }
//   },

//   renderData: function () {

//     //Runs metrics function for data
//     this.metrics();

//     for (var i = 0; i < this.hoursOfOperation.length; i++) {

//       //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
//       var parentElement = document.getElementById(this.name);
//       var childElement = document.createElement('li');

//       //This appends or changes parentEl <ul>, by added new childEl <li>
//       parentElement.appendChild(childElement);

//       // This is the actually string content placed inside <li> element
//       childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
//       childElement.append();
//     }

//     //This variable pulls the last running total of cookies sold
//     var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
//     // console.log(lastTotal);

//     //Writes the final total cookies to bottom of list
//     childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
//   }
// };

// seattle.renderData();
// tokyo.renderData();
// dubai.renderData();
// paris.renderData();
// lima.renderData();

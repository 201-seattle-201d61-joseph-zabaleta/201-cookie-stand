'use strict';

var seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  average: 6.3,
  hoursOpen: 14,
  hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
  cookieArray: [],
  customerArray: [],
  cookiesSoldArray: [],

  metrics: function() {
    var totalCookiesSold = 0;

    for (var i = 0; i <= this.hoursOpen -1; i++) {

      //Calculates random number between min and max customers
      var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      // console.log(randomCustomer);

      //Takes randomCustomer value times the average cookie sale
      var totalCookies = Math.floor(randomCustomer * this.average);
      // console.log(totalCookies);

      //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
      totalCookiesSold = totalCookiesSold + totalCookies;
      // console.log(totalCookiesSold);

      //stores all data into two arrays
      this.customerArray.push(randomCustomer);
      this.cookieArray.push(totalCookies);
      this.cookiesSoldArray.push(totalCookiesSold);
    }
  },

  renderData: function () {

    //Runs metrics function for data
    this.metrics();

    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
      var parentElement = document.getElementById(this.name);
      var childElement = document.createElement('li');

      //This appends or changes parentEl <ul>, by added new childEl <li>
      parentElement.appendChild(childElement);

      // This is the actually string content placed inside <li> element
      childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
      childElement.append();
    }

    //This variable pulls the last running total of cookies sold
    var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
    // console.log(lastTotal);

    //Writes the final total cookies to bottom of list
    childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
  }
};

var tokyo = {
  name: 'tokyo',
  min: 3,
  max: 24,
  average: 1.2,
  hoursOpen: 14,
  hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
  cookieArray: [],
  customerArray: [],
  cookiesSoldArray: [],

  metrics: function() {
    var totalCookiesSold = 0;

    for (var i = 0; i <= this.hoursOpen -1; i++) {
      // for (var i= 0; i < 1; i++) {
      //Calculates random number between min and max customers
      var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      // console.log(randomCustomer);

      //Takes randomCustomer value times the average cookie sale
      var totalCookies = Math.floor(randomCustomer * this.average);
      // console.log(totalCookies);

      //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
      totalCookiesSold = totalCookiesSold + totalCookies;
      // console.log(totalCookiesSold);

      //stores all data into two arrays
      this.customerArray.push(randomCustomer);
      this.cookieArray.push(totalCookies);
      this.cookiesSoldArray.push(totalCookiesSold);
    }
  },

  renderData: function () {

    //Runs metrics function for data
    this.metrics();

    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
      var parentElement = document.getElementById(this.name);
      var childElement = document.createElement('li');

      //This appends or changes parentEl <ul>, by added new childEl <li>
      parentElement.appendChild(childElement);

      // This is the actually string content placed inside <li> element
      childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
      childElement.append();
    }

    //This variable pulls the last running total of cookies sold
    var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
    // console.log(lastTotal);

    //Writes the final total cookies to bottom of list
    childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
  }
};

var dubai = {
  name: 'dubai',
  min: 11,
  max: 38,
  average: 3.7,
  hoursOpen: 14,
  hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
  cookieArray: [],
  customerArray: [],
  cookiesSoldArray: [],

  metrics: function() {
    var totalCookiesSold = 0;

    for (var i = 0; i <= this.hoursOpen -1; i++) {
      // for (var i= 0; i < 1; i++) {
      //Calculates random number between min and max customers
      var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      // console.log(randomCustomer);

      //Takes randomCustomer value times the average cookie sale
      var totalCookies = Math.floor(randomCustomer * this.average);
      // console.log(totalCookies);

      //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
      totalCookiesSold = totalCookiesSold + totalCookies;
      // console.log(totalCookiesSold);

      //stores all data into two arrays
      this.customerArray.push(randomCustomer);
      this.cookieArray.push(totalCookies);
      this.cookiesSoldArray.push(totalCookiesSold);
    }
  },

  renderData: function () {

    //Runs metrics function for data
    this.metrics();

    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
      var parentElement = document.getElementById(this.name);
      var childElement = document.createElement('li');

      //This appends or changes parentEl <ul>, by added new childEl <li>
      parentElement.appendChild(childElement);

      // This is the actually string content placed inside <li> element
      childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
      childElement.append();
    }

    //This variable pulls the last running total of cookies sold
    var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
    // console.log(lastTotal);

    //Writes the final total cookies to bottom of list
    childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
  }
};

var paris = {
  name: 'paris',
  min: 20,
  max: 38,
  average: 2.3,
  hoursOpen: 14,
  hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
  cookieArray: [],
  customerArray: [],
  cookiesSoldArray: [],

  metrics: function() {
    var totalCookiesSold = 0;

    for (var i = 0; i <= this.hoursOpen -1; i++) {
      // for (var i= 0; i < 1; i++) {
      //Calculates random number between min and max customers
      var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      // console.log(randomCustomer);

      //Takes randomCustomer value times the average cookie sale
      var totalCookies = Math.floor(randomCustomer * this.average);
      // console.log(totalCookies);

      //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
      totalCookiesSold = totalCookiesSold + totalCookies;
      // console.log(totalCookiesSold);

      //stores all data into two arrays
      this.customerArray.push(randomCustomer);
      this.cookieArray.push(totalCookies);
      this.cookiesSoldArray.push(totalCookiesSold);
    }
  },

  renderData: function () {

    //Runs metrics function for data
    this.metrics();

    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
      var parentElement = document.getElementById(this.name);
      var childElement = document.createElement('li');

      //This appends or changes parentEl <ul>, by added new childEl <li>
      parentElement.appendChild(childElement);

      // This is the actually string content placed inside <li> element
      childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
      childElement.append();
    }

    //This variable pulls the last running total of cookies sold
    var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
    // console.log(lastTotal);

    //Writes the final total cookies to bottom of list
    childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
  }
};

var lima = {
  name: 'lima',
  min: 2,
  max: 16,
  average: 4.6,
  hoursOpen: 14,
  hoursOfOperation: ['7am: ', '8am ','9am ', '10am ', '11am ', '12pm ', '1pm ', '2 pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ' ],
  cookieArray: [],
  customerArray: [],
  cookiesSoldArray: [],

  metrics: function() {
    var totalCookiesSold = 0;

    for (var i = 0; i <= this.hoursOpen -1; i++) {
      // for (var i= 0; i < 1; i++) {
      //Calculates random number between min and max customers
      var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      // console.log(randomCustomer);

      //Takes randomCustomer value times the average cookie sale
      var totalCookies = Math.floor(randomCustomer * this.average);
      // console.log(totalCookies);

      //Running total of cookies sold per hour (hours are calculated in the condition of the loop)
      totalCookiesSold = totalCookiesSold + totalCookies;
      // console.log(totalCookiesSold);

      //stores all data into two arrays
      this.customerArray.push(randomCustomer);
      this.cookieArray.push(totalCookies);
      this.cookiesSoldArray.push(totalCookiesSold);
    }
  },

  renderData: function () {

    //Runs metrics function for data
    this.metrics();

    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //variables created parentEl gets the correct <ul> and childEl creates a <li> tag
      var parentElement = document.getElementById(this.name);
      var childElement = document.createElement('li');

      //This appends or changes parentEl <ul>, by added new childEl <li>
      parentElement.appendChild(childElement);

      // This is the actually string content placed inside <li> element
      childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
      childElement.append();
    }

    //This variable pulls the last running total of cookies sold
    var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
    // console.log(lastTotal);

    //Writes the final total cookies to bottom of list
    childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
  }
};

seattle.renderData();
tokyo.renderData();
dubai.renderData();
paris.renderData();
lima.renderData();




/** *****************************************************Constructor Function******************************************************* */

// function CreateStore(location, minCust, maxCust, avgCookieSale) {

//   var totalCookiesSold = 0;
//   var hoursOpen = 14;
//   var customerArray = [];
//   var cookieArray = [];
//   var cookiesSoldArray = [];
//   var lastTotal = 0;

//   this.location = location;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookieSale = avgCookieSale;
//   this.customerArray = customerArray;
//   this.cookieArray = cookieArray;
//   this.cookiesSoldArray = cookiesSoldArray;
//   this.lastTotal = lastTotal;

//   //Loop to run per hour and push data to array properties
//   for (var i = 0; i <= hoursOpen -1; i++) {
//     //Calculates random number between min and max customers
//     var randomCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//     // console.log(randomCustomer);

//     //Takes randomCustomer value times the average cookie sale
//     var totalCookies = Math.floor(randomCustomer * avgCookieSale);
//     // console.log(totalCookies);

//     //Running total of cookies sold per hour (hours are calcul ated in the condition of the loop)
//     totalCookiesSold = totalCookiesSold + totalCookies;
//     // console.log(totalCookiesSold);

//     //stores all data into two arrays
//     customerArray.push(randomCustomer);
//     cookieArray.push(totalCookies);
//     cookiesSoldArray.push(totalCookiesSold);
//     this.lastTotal = totalCookiesSold;
//   }

// }
// var seattle = new CreateStore('Seattle', 23, 65, 6.3);
// var tokyo = new CreateStore('Tokyo', 3, 24, 1.2);
// var dubai = new CreateStore('Dubai', 11, 38, 3.7);
// var paris = new CreateStore('Paris', 20, 38, 2.3);
// var lima = new CreateStore('Lima', 2, 16, 4.6);
// console.log(seattle);
// console.log(tokyo);
// console.log(dubai);
// console.log(paris);
// console.log(lima);
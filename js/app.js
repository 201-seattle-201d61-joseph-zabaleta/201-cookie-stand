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


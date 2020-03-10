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

  seattleMetrics: function() {
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

      // console.log(this.cookieArray.reduce());

      //Variables to getting the element to adjust
      // var parentElement = document.getElementById('seattle');
      // var childElement = document.createElement('li');

      //Creates li and writes to each li element the cookies and a string
      // parentElement.appendChild(childElement);
      // childElement.textContent = hoursOfOperation[i] + this.cookieArray[i] + ' cookies';
      // childElement.append();

      // var result = [randomCustomer, totalCookies, totalCookiesSold];

    }

    //Writes the total at the end of the list
    // childElement.textContent = 'Total: ' + totalCookiesSold + ' cookies';
    // childElement.append();
    console.log(this.customerArray);
    console.log(this.cookieArray);
    console.log(totalCookiesSold);
    // console.log(result);
  },

  renderData: function () {

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
    //Variables to write the data
      var parentElement = document.getElementById(this.name);
      var childElement = document.createElement('li');

      //Create li and writes each li element, cookies, and string to html
      parentElement.appendChild(childElement);
      // childElement.textContent = hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
      childElement.textContent = this.hoursOfOperation[i] + this.cookieArray[i] + ' Cookies';
      childElement.append();
    }

    //This variable pulls the last running total of cookies sold
    var lastTotal = this.cookiesSoldArray[this.cookiesSoldArray.length -1];
    console.log(lastTotal);
    childElement.textContent = 'Total: ' + lastTotal + ' Cookies';
  }
};


seattle.seattleMetrics();
seattle.renderData();

console.log(seattle.cookiesSoldArray);


// //Takes random customer and total cookies sold put them into an array
// var result = [randomCustomer, totalCookies, totalCookieSales];
// // console.log(result);

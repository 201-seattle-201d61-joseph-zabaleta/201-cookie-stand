'use strict';


var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  average: 6.3,
  hoursOpen: 14,
  hourStart: 600,
  hourEnd: 1900,
  seattleAverageCustomer: function() {
    var totalCookieSales = 0;
    var customerArray = [];
    var cookieArray = [];
    var hourArray = [];
    var perHour = this.hourStart;

    for (var i = 0; i <= this.hoursOpen -1; i++) {

      //Calculates random number between min and max customers
      var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      // console.log(randomCustomer);

      //Takes random number times average cookie sale
      var totalCookies = Math.floor(randomCustomer * this.average);
      // console.log(totalCookies);

      //Takes random customer and total cookies sold put them into an array
      var result = [randomCustomer, totalCookies, totalCookieSales];
      // console.log(result);

      //Running total of cookies sold
      totalCookieSales = totalCookieSales + totalCookies;
      // console.log(totalCookieSales);

      //Calculates the hour
      console.log(perHour);
      perHour = perHour + 100;

      //stores all data into two arrays
      customerArray.push(randomCustomer);
      cookieArray.push(totalCookies);
      hourArray.push(perHour);

      //Variables to getting the element to adjust
      var parentElement = document.getElementById('seattle');
      var childElement = document.createElement('li');

      //Creates li and writes to each li element the cookies and a string 
      parentElement.appendChild(childElement);
      childElement.textContent = hourArray[i] + ' hour ' + cookieArray[i] + ' cookies';
      childElement.append();

    }

    //Writes the total at the end of the list
    childElement.textContent = 'Total: ' + totalCookieSales;
    childElement.append();
    console.log(customerArray);
    console.log(cookieArray);
    console.log(totalCookieSales);
  },
};

var tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  average: 1.2,
  hoursOpen: 14,
  hourStart: 600,
  hourEnd: 1900,
  tokyoAverageCustomer: function() {
    var totalCookieSales = 0;
    var customerArray = [];
    var cookieArray = [];
    var hourArray = [];
    var perHour = this.hourStart;

    for (var i = 0; i <= this.hoursOpen -1; i++) {

      //Calculates random number between min and max customers
      var randomCustomer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      // console.log(randomCustomer);

      //Takes random number times average cookie sale
      var totalCookies = Math.floor(randomCustomer * this.average);
      // console.log(totalCookies);

      //Takes random customer and total cookies sold put them into an array
      var result = [randomCustomer, totalCookies, totalCookieSales];
      // console.log(result);

      //Running total of cookies sold
      totalCookieSales = totalCookieSales + totalCookies;
      // console.log(totalCookieSales);

      //Calculates the hour
      console.log(perHour);
      perHour = perHour + 100;

      //stores all data into two arrays
      customerArray.push(randomCustomer);
      cookieArray.push(totalCookies);
      hourArray.push(perHour);

      //Variables to getting the element to adjust
      var parentElement = document.getElementById('tokyo');
      var childElement = document.createElement('li');

      //Creates li and writes to each li element the cookies and a string 
      parentElement.appendChild(childElement);
      childElement.textContent = hourArray[i] + ' hour ' + cookieArray[i] + ' cookies';
      childElement.append();

    }

    //Writes the total at the end of the list
    childElement.textContent = 'Total: ' + totalCookieSales;
    childElement.append();
    console.log(customerArray);
    console.log(cookieArray);
    console.log(totalCookieSales);
  },
};

seattle.seattleAverageCustomer();
tokyo.tokyoAverageCustomer();


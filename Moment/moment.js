var moment = require('moment');

//Format Dates
a = moment().format('MMMM Do YYYY, h:mm:ss a'); //tháng ngày năm, giờ phút giây hiện tại
a1 = moment().format('dddd');//lấy thứ hiện tại
a2 = moment().format("MMM Do YY");//lấy tháng ngày năm hiện tại
moment().format('YYYY [escaped] YYYY');     // 2018 escaped 2018 
moment().format();

//Relative Time
b = moment("20111031", "YYYYMMDD").fromNow(); // 6 years ago
b1 = moment("20130620", "YYYYMMDD").fromNow(); // 6 years ago
b2 = moment().startOf('day').fromNow();        // a day ago
b3=moment().endOf('day').fromNow();          // thời gian tới cuối ngày
moment().startOf('hour').fromNow();

//Calendar Time
moment().subtract(10, 'days').calendar(); // 01/18/2018
moment().subtract(6, 'days').calendar();  // Last Monday at 9:50 PM
moment().subtract(3, 'days').calendar();  // Last Thursday at 9:50 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 9:50 PM
moment().calendar();                      // Today at 9:50 PM
moment().add(1, 'days').calendar();       // Tomorrow at 9:50 PM
moment().add(3, 'days').calendar();       // Wednesday at 9:50 PM
moment().add(10, 'days').calendar();

//Multiple Locale Support
moment.locale();         // en
moment().format('LT');   // 9:50 PM
moment().format('LTS');  // 9:50:56 PM
moment().format('L');    // 01/28/2018
moment().format('l');    // 1/28/2018
moment().format('LL');   // January 28, 2018
moment().format('ll');   // Jan 28, 2018
moment().format('LLL');  // January 28, 2018 9:50 PM
moment().format('lll');  // Jan 28, 2018 9:50 PM
moment().format('LLLL'); // Sunday, January 28, 2018 9:50 PM
moment().format('llll');


console.log(a)
console.log(a1)
console.log(a2)
console.log(b)
console.log(b1)
console.log(b2)
console.log(b3)





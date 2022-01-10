/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
    // each date is splited into day - month - year using split method
    date1 = dates[0].split('.');
    date2 = dates[1].split('.');
    // a new Date objet is created for each date
    dateObj1 = new Date(date1[2], date1[1] -1, date1[0]);
    dateObj2 = new Date(date2[2], date2[1] -1, date2[0]);
    // the difference of dates in ms
    difference = Math.abs(dateObj2 - dateObj1);
    // get days and months between dates
    days = Math.round(difference/(1000*60*60*24));
    totalMonths = (dateObj2.getFullYear() - dateObj1.getFullYear())*12 + (dateObj2.getMonth() - dateObj1.getMonth()); 
    // one less month if date2 comes before in its month than date1
    totalMonths = dateObj1.getDate() > dateObj2.getDate() ? totalMonths - 1 : totalMonths;
  
    // format
    daysString = days == 1 ? days + ' day' : days + ' days';
    years = Math.floor(totalMonths/12);
    yearsString = years > 0 ? years > 1 ? years + ' years, ' : years + ' year, ' : '';
    months = totalMonths%12;
    monthsString = months > 0 && days>30 ? months > 1 ?  months + ' months, ' : months + ' month, ' : ''; 
    
    return yearsString + monthsString + 'total ' +  daysString;
}
console.log("\nConvert to Military Time");
// convert time to military time

function timeConversion(s) {
  let array = s.split(":");
  let hour = parseInt(array[0]);

  if (s.substring(8) == "PM") {
    hour = hour + 12;
  }

  hour = hour.toString();
  array.splice(0, 1, hour);

  let militaryTime = array.join(":");
  militaryTime = militaryTime.substring(0, 8);
  console.log("original time: ", s);
  console.log(militaryTime);
}

timeConversion("01:05:45PM");
///////////////////////////////////////////////////////////////////////
//military time part 2

function timeConversion1(s) {
  let array = s.split(":"); // convert string to array, seperated by :
  let hour = parseInt(array[0]); // change hour from string to integer

  if (s.substring(8) == "PM" && hour != 12) {
    // convert to military time
    hour = hour + 12;
  } else if (s.substring(8) == "AM" && hour == 12) {
    hour = "00";
  } else if (s.substring(8) == "PM" && hour == 12) {
    hour = hour;
  } else {
    hour = `0${hour}`;
  }
  hour = hour.toString(); // change hour from integer back to string
  array.splice(0, 1, hour); // replace old hour with military hour
  let militaryTime = array.join(":"); // convert array back to string
  militaryTime = militaryTime.substring(0, 8); // get ride of "PM"
  return militaryTime;
}

console.log(timeConversion1("12:05:45PM"));

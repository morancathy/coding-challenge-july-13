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

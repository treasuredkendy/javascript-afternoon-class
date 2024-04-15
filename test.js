let mark = 70

switch(mark) {
    case mark >= 80:
      console.log("grade:A");
     break;
    case mark >= 70:
      console.log("grade:B");
      break;
    case mark >= 60:
      console.log("grade:C");
      break;
    case mark >= 50:
      console.log("grade:D");
      break;
    case mark >= 40:
      console.log("grade:E");
      break;
    case mark < 30:
      console.log("grade:F");
      break;
    default:
      console.log("grade: Invalid mark (below 30)");
  }
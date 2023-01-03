
const symp = new Map([
    ["Sore throat", 13.25],
    ["Headache" , 11.18],
    ["Runny Nose", 9.13],
    ["Blocked Nose", 9.13],
    ["Cough", 9.13],
    ["Hoarse voice", 8],
    ["Sneezing", 7.30],
    ["Fatigue", 6.16],
    ["Muscle pains/aches", 5.70],
    ["Dizzy light-headed", 4.12],
    ["Swollen neck glands", 3.45],
    ["Eye soreness",  3.19],
    ["Altered smell", 2.96],
    ["Fever", 2.96],
    ["Shortness of breath", 2.51],
    ["Earache", 2.51],
    ["Lost of smell", 2.28]
  ]);
  
  for (let [key, value] of symp) {
  $(".symps").append("<li id='li12'><input type='checkbox' name='checkbox[]' value="+value+"><label for='checkbox1'>"+key+"</lable></li>");
  }
  
  function submit(){
    let proba = 0;
      $("input[type=checkbox]:checked").each(function () {
       proba+=parseFloat(this.value);
  });
  // if (proba = 70) {
  //   $("#covidPositive").style.display;
  // } else {
  //   $("#covidNegative").style.display;
  // }
  }
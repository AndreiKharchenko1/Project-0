let src_1 = "https://previews.123rf.com/images/tverdohlib/tverdohlib1802/tverdohlib180200036/94878372-poppy-flower-field-harvesting-poppy-seed-flower-in-field-narcotics.jpg";
let src_2 = "https://www.avasflowers.net/blog/wp-content/uploads/2019/03/The-Poppy-Flower-And-It_s-Significance-To-Memorial-Day_1-1024x640.jpg";

function ProcessText() {
    let enteredtext = document.getElementById("Textinput").value;
    let length = enteredtext.length;
    let result = "";
  
    for (let i = length - 1; i >= 0; i--) {
      result += enteredtext[i];
    }
  
    document.getElementById("PT").innerHTML = result;
  }

  let switch_for_pic = 0;
  function ChangeImages(){
    if(switch_for_pic == 0){
      src_1 = "https://t4.ftcdn.net/jpg/04/72/07/09/360_F_472070989_b0jxzfspyQv1bFlWq8mJzPa2YWgWLWPn.jpg";
      src_2 = "https://media.wbur.org/wp/2016/09/8493335701_f00b09a21c_o-1000x795.jpg";
      switch_for_pic = 1;
    } else {
      src_1 = "https://previews.123rf.com/images/tverdohlib/tverdohlib1802/tverdohlib180200036/94878372-poppy-flower-field-harvesting-poppy-seed-flower-in-field-narcotics.jpg";
       src_2 = "https://www.avasflowers.net/blog/wp-content/uploads/2019/03/The-Poppy-Flower-And-It_s-Significance-To-Memorial-Day_1-1024x640.jpg";

      switch_for_pic = 0;
    }
    document.getElementById("Source1").src = src_1;
    document.getElementById("Source2").src = src_2;
  }
 


function suma()
 {
   var a = document.getElementById("waga").value;
   var checkBox = document.getElementById("misa");
   //   a = parseFloat(a);
   
   if (a > 2000){
    if (checkBox.checked == true){
        alert((a - 825)/3);
    } else {
        alert((a - 795)/3);
    }
   } else {alert("Za mało!!")};
   
 } 
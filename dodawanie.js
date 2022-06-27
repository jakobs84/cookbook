function suma()
 {

   var a = document.getElementById("waga").value;
   var checkBox = document.getElementById("misa");
   //   a = parseFloat(a);
   

   if (a > 2000){
    if (checkBox.checked == true){
        alert(((((a - 825)/3))| 0)+" g");
    } else {
        alert((((a - 795)/3)| 0)+" g");
    }
   } else {alert("Za mało!!")};
   
 } 
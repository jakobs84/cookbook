function suma()
 {

    /*  
        skrypt wyliczający ilość cheleba na keksówkę "-" waga misy
        nic skomplikowanego
    */
  
   var a = parseFloat(document.getElementById("waga").value);
   var checkBox = document.getElementById("misa");
 
   if (a > 2000){
    if (checkBox.checked == true){
        
 
     document.querySelector('input[name="waga"]').value = ((((a - 825)/3)| 0));
   

    } else {
        
   
      document.querySelector('input[name="waga"]').value = ((((a - 795)/3)| 0));
    }
   } else {
    alert("Za mało!! Waga > 2000g"); 
};
   
 } 
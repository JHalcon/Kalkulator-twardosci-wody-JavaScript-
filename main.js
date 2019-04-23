const btn_c = document.getElementById("count-btn");
           let w = document.getElementById("val");
           w.addEventListener("keyup",counter);
           

           $('#unit').on('change', function(e){
  counter();
});


           function Round(n, k)
{
    const factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}
function clear(){
console.log("zmiana");
    document.getElementById("cmnt").innerHTML = "";
                document.getElementById("mv").value = ""; 
               document.getElementById("mm").value = "";
                document.getElementById("dh").value = "";
               document.getElementById("e").value = "";
               document.getElementById("f").value = "";
               document.getElementById("ca").value = "";


}
        
           function komunikat(){
               let hardness = document.getElementById("ca").value;
               if(w.value == ""){
               clear();
               } else{
               if(hardness<=85){
                   
                   document.getElementById("cmnt").innerHTML = "Bardzo miękka";
                   document.getElementById("cmnt").style.color = "yellow";
                   
               }
                if(hardness>85&&hardness<=170){
                   
                   document.getElementById("cmnt").innerHTML = "Miękka";
                   document.getElementById("cmnt").style.color = "orange";
               }
               if(hardness>170&&hardness<=340){
                   
                   document.getElementById("cmnt").innerHTML = "Średnio twarda";
                   document.getElementById("cmnt").style.color = "brown";
                   
               }
               if(hardness>340&&hardness<=510){
                   
                   document.getElementById("cmnt").innerHTML = "Twarda";
                   document.getElementById("cmnt").style.color = "red";
                   
               }
               if(hardness>510){
                   
                   document.getElementById("cmnt").innerHTML = "Bardzo twarda";
                   document.getElementById("cmnt").style.color = "black";
                   
               }
               
               }
               
           }
           function mval(){
               let amount = document.getElementById("val").value;
               document.getElementById("mv").value = parseFloat(Round(amount,2)).toFixed(2);
               document.getElementById("mm").value = parseFloat(Round(amount*0.5,2)).toFixed(2);
                document.getElementById("dh").value = parseFloat(Round(amount* 2.8,2)).toFixed(2);
               document.getElementById("e").value = parseFloat(Round(amount* 3.5,2)).toFixed(2);
               document.getElementById("f").value = parseFloat(Round(amount* 5,2)).toFixed(2);
               document.getElementById("ca").value = parseFloat(Round(amount* 50,2)).toFixed(2);
         
               komunikat();
           }
            function mmol(){
               
               let amount = document.getElementById("val").value;
               document.getElementById("mv").value = parseFloat(Round(amount*2,2)).toFixed(2);
               document.getElementById("mm").value = parseFloat(Round(amount,2)).toFixed(2);
                document.getElementById("dh").value = parseFloat(Round(amount* 5.61,2)).toFixed(2);
               document.getElementById("e").value = parseFloat(Round(amount* 7.02,2)).toFixed(2);
               document.getElementById("f").value = parseFloat(Round(amount* 10,2)).toFixed(2);
               document.getElementById("ca").value = parseFloat(Round(amount* 100,2)).toFixed(2);
                 komunikat();
               
           }
               function caco3(){
               let amount = document.getElementById("val").value;
               document.getElementById("mv").value = parseFloat(Round(amount*0.02,2)).toFixed(2);
               document.getElementById("mm").value = parseFloat(Round(amount*0.01,2)).toFixed(2);
                document.getElementById("dh").value = parseFloat(Round(amount* 0.056,2)).toFixed(2);
               document.getElementById("e").value = parseFloat(Round(amount* 0.07,2)).toFixed(2);
               document.getElementById("f").value = parseFloat(Round(amount* 0.1,2)).toFixed(2);
               document.getElementById("ca").value = parseFloat(Round(amount,2)).toFixed(2);
                    komunikat();
               
           }
           function niem(){
               let amount = document.getElementById("val").value;
               document.getElementById("mv").value = parseFloat(Round(amount*0.356,2)).toFixed(2);
               document.getElementById("mm").value = parseFloat(Round(amount*0.178,2)).toFixed(2);
                document.getElementById("dh").value = parseFloat(Round(amount,2)).toFixed(2);
               document.getElementById("e").value = parseFloat(Round(amount* 1.25,2)).toFixed(2);
               document.getElementById("f").value = parseFloat(Round(amount* 1.78,2)).toFixed(2);
               document.getElementById("ca").value = parseFloat(Round(amount*17.8,2)).toFixed(2);
                komunikat();
               
           }
           function ang(){
               let amount = document.getElementById("val").value;
               document.getElementById("mv").value = parseFloat(Round(amount*0.286,2)).toFixed(2);
               document.getElementById("mm").value = parseFloat(Round(amount*0.143,2)).toFixed(2);
                document.getElementById("dh").value = parseFloat(Round(amount*0.8,2)).toFixed(2);
               document.getElementById("e").value = parseFloat(Round(amount,2)).toFixed(2);
               document.getElementById("f").value = parseFloat(Round(amount* 1.43,2)).toFixed(2);
               document.getElementById("ca").value = parseFloat(Round(amount*14.3,2)).toFixed(2);
                komunikat();
               
           }
           function frac(){
               let amount = document.getElementById("val").value;
               document.getElementById("mv").value = parseFloat(Round(amount*0.2,2)).toFixed(2);
               document.getElementById("mm").value = parseFloat(Round(amount*0.1,2)).toFixed(2);
                document.getElementById("dh").value = parseFloat(Round(amount*0.56,2)).toFixed(2);
               document.getElementById("e").value = parseFloat(Round(amount*0.7,2)).toFixed(2);
               document.getElementById("f").value = parseFloat(Round(amount,2)).toFixed(2);
               document.getElementById("ca").value = parseFloat(Round(amount*10,2)).toFixed(2);
                komunikat();
               
           }
           
           function counter(){
               
               let sel = $( "#unit option:selected" ).val();
               let am = document.getElementById("val").value;
               if(isNaN(am)){
                document.getElementById("cmnt").innerHTML = "Podano złą wartość";
                   document.getElementById("cmnt").style.color = "red";
               }else{
               if(sel==1){
                   
                   
                   mval();
               }
                if(sel==2){
                   
                   
                   mmol();
               }
                 if(sel==3){
                   
                   
                   caco3();
               }
                if(sel==4){
                   
                   
                   niem();
               }
                if(sel==5){
                   
                   
                   ang();
               }
                 if(sel==6){
                   
                   
                   frac();
               }
               
           }
           
           }
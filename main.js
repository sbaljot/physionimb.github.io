function bmicalc(){
    var h = prompt("What's your height in cm?");
    var w = prompt("What's your weight in kg?");
    alert("Your BMI is "+(w/h/h)*10000);
}
function mainaction(){
    if (document.getElementById("name").value === "" || document.getElementById("bmi").value === "") {
        alert("Please fill all the fields correctly");
    }
    else{
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "block";
    document.getElementById("lifestyletext").style.display = "inline-block";
    document.getElementById("titlename").innerHTML = "Hi "+document.getElementById("name").value+"!";
    document.getElementById("titlename").style.textAlign = "center"
    if(document.getElementById("bmi").value <= 18.5){
        document.getElementById("underweight").style.display = "inline";
        document.getElementById("bmiun").innerHTML = document.getElementById("bmi").value;
        document.getElementById("underweightfooditems").style.display = "block";
        document.getElementById("underweightfood").style.display = "block";
        document.getElementById("calintm").innerHTML = "Male: 2379 cals/day";
        document.getElementById("calintf").innerHTML = "Female: 1690 cals/day";
        document.getElementById("calfiller").style.strokeDasharray = "338.635, 301.635";
        document.getElementById("underexhome").style.display = "flex";
        document.getElementById("exbar").style.width = "40%";
        document.getElementById("sleepbar").style.width = "130%";
        document.getElementById("workbar").style.width = "70%";
        document.getElementById("maleprotein").innerHTML = "110g";
        document.getElementById("femaleprotein").innerHTML = "60g";
        document.getElementById("malefat").innerHTML = "52g-92g";
        document.getElementById("femalefat").innerHTML = "37g-65g";
    }
    else if (document.getElementById("bmi").value <= 24.9) {
        document.getElementById("normal").style.display = "inline";
        document.getElementById("bminormal").innerHTML = document.getElementById("bmi").value;
        document.getElementById("normalfooditems").style.display = "block";
        document.getElementById("normalfood").style.display = "block";
        document.getElementById("calintm").innerHTML = "Male: 2544 cals/day";
        document.getElementById("calintf").innerHTML = "Female: 1995 cals/day";
        document.getElementById("calfiller").style.strokeDasharray = "355.635, 301.635";
        document.getElementById("underexhome").style.display = "flex";
        document.getElementById("underexhomelist").style.display = "block";
        document.getElementById("exbar").style.width = "20%";
        document.getElementById("maleprotein").innerHTML = "140g";
        document.getElementById("femaleprotein").innerHTML = "72g";
        document.getElementById("malefat").innerHTML = "56g-98g";
        document.getElementById("femalefat").innerHTML = "44g-77g";
    }
    else if (document.getElementById("bmi").value <= 29.9){
        document.getElementById("overweight").style.display = "inline";
        document.getElementById("bmiover").innerHTML = document.getElementById("bmi").value;
        document.getElementById("overfooditems").style.display = "block";
        document.getElementById("overfood").style.display = "block";
        document.getElementById("calintm").innerHTML = "Male: 2519 cals/day";
        document.getElementById("calintf").innerHTML = "Female: 1646 cals/day";
        document.getElementById("calfiller").style.strokeDasharray = "352.635, 301.635";
        document.getElementById("overexhome").style.display = "flex";
        document.getElementById("overexhomelist").style.display = "block";
        document.getElementById("exbar").style.width = "70%";
        document.getElementById("workbar").style.width = "80%";
        document.getElementById("maleprotein").innerHTML = "150g";
        document.getElementById("femaleprotein").innerHTML = "78g";
        document.getElementById("malefat").innerHTML = "55g-97g";
        document.getElementById("femalefat").innerHTML = "37g-64g";
    }
    else{
        document.getElementById("obese").style.display = "inline";
        document.getElementById("bmiobese").innerHTML = document.getElementById("bmi").value;
        document.getElementById("obesefooditems").style.display = "block";
        document.getElementById("obesefood").style.display = "block";
        document.getElementById("calintm").innerHTML = "Male: 2261 cals/day";
        document.getElementById("calintf").innerHTML = "Female: 1852 cals/day";
        document.getElementById("calfiller").style.strokeDasharray = "327.635, 301.635";
        document.getElementById("obexhome").style.display = "flex";
        document.getElementById("obexhomelist").style.display = "block";
        document.getElementById("maleprotein").innerHTML = "108g";
        document.getElementById("femaleprotein").innerHTML = "52g";
        document.getElementById("malefat").innerHTML = "50g-87g";
        document.getElementById("femalefat").innerHTML = "41g-72g";
    }
}
}
function slidein(){
    document.getElementById("caltext").style.backgroundPosition = "0 0";
}
function foodswap(){
    if(document.getElementById("underweightfood").style.display === "block" || document.getElementById("normalfood").style.display === "block" || document.getElementById("normalfood").style.display === "block" || document.getElementById("obesefood").style.display === "block"){
        document.getElementById("underweightfood").style.display = "none";
        document.getElementById("underweightfoodsubs").style.display = "block";
        document.getElementById("normalfood").style.display = "none";
        document.getElementById("normalfoodsubs").style.display = "block";
        document.getElementById("overfood").style.display = "none";
        document.getElementById("overfoodsubs").style.display = "block";
        document.getElementById("obesefood").style.display = "none";
        document.getElementById("obesefoodsubs").style.display = "block";
    }
    else{
        document.getElementById("underweightfoodsubs").style.display = "none";
        document.getElementById("underweightfood").style.display = "block";
        document.getElementById("normalfoodsubs").style.display = "none";
        document.getElementById("normalfood").style.display = "block";
        document.getElementById("overfoodsubs").style.display = "none";
        document.getElementById("overfood").style.display = "block";
        document.getElementById("obesefoodsubs").style.display = "none";
        document.getElementById("obesefood").style.display = "block";
    }   
}
function hidehome(){
    if (document.getElementById("bmi").value <= 24.9) {
        if (document.getElementById("toggleslider").checked == true) {
            document.getElementById("underexgym").style.display = "flex";
            document.getElementById("underexgymlist").style.display = "block";
            document.getElementById("underexgym").style.backgroundColor = "#fc3d3d";
            document.getElementById("underexhome").style.display = "none";
            document.getElementById("underexhomelist").style.display = "none";
        } else {
            document.getElementById("underexgym").style.display = "none";
            document.getElementById("underexgymlist").style.display = "none";    
            document.getElementById("underexhome").style.display = "flex";
            document.getElementById("underexhomelist").style.display = "block";
            document.getElementById("underexhome").style.backgroundColor = "#c0fc58";
        }
    } else if (document.getElementById("bmi").value <= 29.9){
        if (document.getElementById("toggleslider").checked == true) {
            document.getElementById("overexgym").style.display = "flex";
            document.getElementById("overexgymlist").style.display = "block";
            document.getElementById("overexgym").style.backgroundColor = "#fc3d3d";
            document.getElementById("overexhome").style.display = "none";
            document.getElementById("overexhomelist").style.display = "none";    
        } else {
            document.getElementById("overexgym").style.display = "none";
            document.getElementById("overexgymlist").style.display = "none";
            document.getElementById("overexhome").style.display = "flex";
            document.getElementById("overexhomelist").style.display = "block";
            document.getElementById("overexhome").style.backgroundColor = "#c0fc58";
        }
    }
    else{
        if (document.getElementById("toggleslider").checked == true) {
        document.getElementById("obexgym").style.display = "flex";
        document.getElementById("obexgymlist").style.display = "block";
        document.getElementById("obexgym").style.backgroundColor = "#fc3d3d";
        document.getElementById("obexhome").style.display = "none";
        document.getElementById("obexhomelist").style.display = "none";    
        } else {
        document.getElementById("obexgym").style.display = "none";
        document.getElementById("obexgymlist").style.display = "none";
        document.getElementById("obexhome").style.display = "flex";
        document.getElementById("obexhomelist").style.display = "block";
        document.getElementById("obexhome").style.backgroundColor = "#c0fc58";
    }
}
}
function counting()
{
    var counts = document.getElementById("notes").value;
    var result2000 = 2000 * counts;
    document.getElementById("f").innerHTML=result2000;

    var counts = document.getElementById("notes1").value;
    var result500 = 500 * counts;
    document.getElementById("f1").innerHTML=result500;

    var counts = document.getElementById("notes2").value;
    var result200 = 200 * counts;
    document.getElementById("f2").innerHTML=result200;

    var counts = document.getElementById("notes3").value;
    var result100 = 100 * counts;
    document.getElementById("f3").innerHTML=result100;

    var counts = document.getElementById("notes4").value;
    var result50 = 50 * counts;
    document.getElementById("f4").innerHTML=result50;

    var counts = document.getElementById("notes5").value;
    var result20 = 20 * counts;
    document.getElementById("f5").innerHTML=result20;

    var counts = document.getElementById("notes6").value;
    var result10 = 10 * counts;
    document.getElementById("f6").innerHTML=result10;

    var total = document.getElementById("total").innerHTML= 
    (result2000 + result500 + result200 + result100 + result50 + result20 + result10);
}
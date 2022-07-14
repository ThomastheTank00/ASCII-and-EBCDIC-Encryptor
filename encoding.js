function convertToHex(){
    var data = document.getElementById("inputChar").value;
    var res = "Hexadecimal: "
    var selected = document.getElementsByName("encoding");
    for(var i = 0; i < data.length; i++){
        var ascii = data.charCodeAt(i);
        var ebcdic = ascii;
        if(selected[0].checked)
        res = res + ascii.toString(16) + " ";
        if(selected[1].checked)
        res = res + ebcdic.toString(16) +" ";
    }
    document.getElementById("output").innerHTML = res;
    ebcdic = $ ('input[name="encoding"]:checked').val();
    let str = document.getElementById("inputChar");
    let str1 = "";

    if(ebcdic == "ebcdic"){
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < str.value.length; i++)
    {

        if (str.value.charAt(i) == "a")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "81";
       }
       else if (str.value.charAt(i) == "b")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "82";
       }
       else if (str.value.charAt(i) == "c")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "83";
       }
       else if (str.value.charAt(i) == "d")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "84";
       }
	else if (str.value.charAt(i) == "e")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "85";
       }
	else if (str.value.charAt(i) == "f")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "86";
       }
	else if (str.value.charAt(i) == "g")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "87";
       }
	else if (str.value.charAt(i) == "h")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "88";
       }
	else if (str.value.charAt(i) == "i")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "89";
       }
	else if (str.value.charAt(i) == "j")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "91";
       }
	else if (str.value.charAt(i) == "k")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "92";
       }
	else if (str.value.charAt(i) == "l")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "93";
       }
	else if (str.value.charAt(i) == "m")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "94";
       }
	else if (str.value.charAt(i) == "n")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "95";
       }
	else if (str.value.charAt(i) == "o")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "96";
       }
	else if (str.value.charAt(i) == "p")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "97";
       }
	else if (str.value.charAt(i) == "q")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "98";
       }
	else if (str.value.charAt(i) == "r")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "99";
       }
	else if (str.value.charAt(i) == "s")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "A2";
       }
	else if (str.value.charAt(i) == "t")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "A3";
       }
	else if (str.value.charAt(i) == "u")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "A4";
       }
	else if (str.value.charAt(i) == "v")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "A5";
       }
	else if (str.value.charAt(i) == "w")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "A6";
       }
	else if (str.value.charAt(i) == "x")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "A7";
       }
	else if (str.value.charAt(i) == "y")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "A8";
       }
	else if (str.value.charAt(i) == "z")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "A9";
       }
	else if (str.value.charAt(i) == "A")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C1";
       }
	else if (str.value.charAt(i) == "B")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C2";
       }
	else if (str.value.charAt(i) == "C")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C3";
       }
	else if (str.value.charAt(i) == "D")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C4";
       }
	else if (str.value.charAt(i) == "E")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C5";
       }
	else if (str.value.charAt(i) == "F")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C6";
       }
	else if (str.value.charAt(i) == "G")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C7";
       }
	else if (str.value.charAt(i) == "H")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C8";
       }
	else if (str.value.charAt(i) == "I")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "C9";
       }
	else if (str.value.charAt(i) == "J")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D1";
       }
	else if (str.value.charAt(i) == "K")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D2";
       }
	else if (str.value.charAt(i) == "L")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D3";
       }
	else if (str.value.charAt(i) == "M")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D4";
       }
	else if (str.value.charAt(i) == "N")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D5";
       }
	else if (str.value.charAt(i) == "O")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D6";
       }
	else if (str.value.charAt(i) == "P")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D7";
       }
	else if (str.value.charAt(i) == "Q")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D8";
       }
	else if (str.value.charAt(i) == "R")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "D9";
       }
	else if (str.value.charAt(i) == "S")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "E2";
       }
	else if (str.value.charAt(i) == "T")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "E3";
       }
	else if (str.value.charAt(i) == "U")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "E4";
       }
	else if (str.value.charAt(i) == "V")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "E5";
       }
	else if (str.value.charAt(i) == "W")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "E6";
       }
	else if (str.value.charAt(i) == "X")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "E7";
       }
	else if (str.value.charAt(i) == "Y")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "E8";
       }
	else if (str.value.charAt(i) == "Z")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "E9";
       }
	else if (str.value.charAt(i) == "0")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F0";
       }
	else if (str.value.charAt(i) == "1")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F1";
       }
	else if (str.value.charAt(i) == "2")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F2";
       }
	else if (str.value.charAt(i) == "3")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F3";
       }
	else if (str.value.charAt(i) == "4")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F4";
       }
	else if (str.value.charAt(i) == "5")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F5";
       }
	else if (str.value.charAt(i) == "6")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F6";
       }
	else if (str.value.charAt(i) == "7")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F7";
       }
	else if (str.value.charAt(i) == "8")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F8";
       }
	else if (str.value.charAt(i) == "9")
       {
                 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "F9";
       }
     }
    }
}
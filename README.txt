HTML
<link>-connects the html file to hw2style.css allowing for  stylizing of the web page to make it more presentable
<script>-connects the html file to encoding.js allowing code that can run a function that outputs the hexadecimal of the input of the choosen type of encryption
<div>-divdes the inputs, the labels, and other elements into respective groups
<label>-Labels the different inputs such as the text and radio buttons
<input>-Takes in user inputs that are text and which type of encryption the user chooses 
<p>-Used to show the hexadecimal out put and ask the user what encrytion thaey want to choose
<br>-Used to move one of the radio buttons onto a new line and addan empty line of space between the radio buttons and the Run! button
<button>-When click it runs the function encoding .js that converts the user input and the hexadeciaml of the choosen encryption 

CSS
body-centers text and changes the font-size to 18px
label[for="inputChar"]-changes font-weight from normal to bold to bring attention to it
div>p-changes font-weight from normal to bold to bring attention to it
button-changes font-weight from normal to bold to bring attention to it

JS
function convertToHex()-Once the button is clicked the function runs taking the user input from the text box and depending on which radio button is clicked turns it into ASCII hexadecimal or EBCDIC hexadecimal. For ASCII, it converts each character input individually using a for loop that directly turns it into code while EBCDIC runs each individual character input indvidually through for loop that compares each character to the formatted characters in the for. Then either of them depending on the one choosen outputs the hexadecimal to <p> with the id output. 
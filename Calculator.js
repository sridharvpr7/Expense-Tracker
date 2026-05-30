function clearscreen() {
    document.getElementById("screen").value = " ";
    document.getElementById("screen2").value = " ";
}

function addnumber(num) {
    const add = document.getElementById("screen");
    add.value += num;
    add.scrollLeft = add.scrollWidth;
}

function action() {
    const answer = eval(document.getElementById("screen").value);
    document.getElementById("screen2").value = answer;
}

function squre() {
    const squre = document.getElementById("screen").value;
    const sqvalue = squre * squre;
    document.getElementById("screen2").value = sqvalue;
}

function root() {
    const root = document.getElementById("screen").value;
    const rvalue = Math.sqrt(root);
    document.getElementById("screen2").value = rvalue;
}

function backspace() {
    const text = document.getElementById("screen").value;
    document.getElementById("screen").value = text.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "1") {

        let butn = document.getElementById("1");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(1);
    }
    else if (event.key === "2") {

        let butn = document.getElementById("2");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(2);
    }
    else if (event.key === "3") {

        let butn = document.getElementById("3");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(3);
    }
    else if (event.key === "4") {

        let butn = document.getElementById("4");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(4);
    }
    else if (event.key === "5") {

        let butn = document.getElementById("5");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(5);
    }
    else if (event.key === "6") {

        let butn = document.getElementById("6");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(6);
    }
    else if (event.key === "7") {

        let butn = document.getElementById("7");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(7);
    }
    else if (event.key === "8") {

        let butn = document.getElementById("8");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(8);
    }
    else if (event.key === "9") {

        let butn = document.getElementById("9");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(9);
    }
    else if (event.key === "0") {

        let butn = document.getElementById("0");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(0);
    }
    else if (event.key === "+") {

        let butn = document.getElementById("+");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber('+');
    }
    else if (event.key === "-") {

        let butn = document.getElementById("-");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber('-');
    }
    else if (event.key === "*") {

        let butn = document.getElementById("*");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber('*');
    }
    else if (event.key === "/") {

        let butn = document.getElementById("/");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber('/');
    }
    else if (event.key === "|") {

        let butn = document.getElementById("%");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber('%');
    }
    else if (event.key === ".") {

        let butn = document.getElementById(".");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber('.');
    }
    else if (event.key === "(") {

        let butn = document.getElementById("(");

        butn.classList.add("jshover");
        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber('(');
    }
    else if (event.key === ")") {

        let butn = document.getElementById(")");

        butn.classList.add("jshover");
        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        addnumber(')');
    }
    else if (event.key === "s") {

        let butn = document.getElementById("sqrt");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        squre()
    }
    else if (event.key === "r") {

        let butn = document.getElementById("root");

        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        root()
    }
    else if (event.key === "Backspace") {

        let butn = document.getElementById("bspc");

        butn.classList.add("jshover")

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        backspace();
    }
    else if (event.key === "Delete") {

        let butn = document.getElementById("AC")

        butn.classList.add("jshover")

        setTimeout(()=>{
        butn.classList.remove("jshover")},100)

        event.preventDefault();
        clearscreen();
    }
    else if (event.key === "Enter") {

        let butn = document.getElementById("ent");

        
        butn.classList.add("jshover");

        setTimeout(()=>{
        butn.classList.remove("jshover")},100);
        

        event.preventDefault();
        action();
    }
});
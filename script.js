const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        switch(value){

            case "AC":
                expression = "";
                display.value = "0";
                break;

            case "⌫":
                expression = expression.slice(0,-1);
                display.value = expression || "0";
                break;

            case "=":

                try{

                    let exp = expression
                        .replace(/×/g,"*")
                        .replace(/÷/g,"/")
                        .replace(/−/g,"-")
                        .replace(/%/g,"/100");

                    expression = eval(exp).toString();

                    display.value = expression;

                }

                catch{

                    display.value = "Error";

                    expression="";
                }

                break;

            default:

                expression += value;

                display.value = expression;

        }

    });

});
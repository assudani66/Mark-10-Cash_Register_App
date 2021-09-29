const billAmount = document.querySelector("#bill-amount");
const cashgiven = document.querySelector("#cash-amount");
const checkbutton = document.querySelector("#btn-calculate");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")
availablenotes = [2000,500,100,50,20,5,1]



checkbutton.addEventListener("click" , function ValidatebillAmountandcashamount(){

    errorMessage.style.display = "none";
    if(billAmount.value > 0 ){

        if(Number(cashgiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = cashgiven.value - billAmount.value;

            calculateChange(amountToBeReturned);

        } else {
            showMessage("Ask for more cash");

        }

    }else{
        
        showMessage("Bill Amount is Invalid");
    }
});
function showMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

function calculateChange(amounttobereturned){
    for(i=0 ; i<=availablenotes.length +1 ; i++){
       var numberofnotes = Math.trunc(
            amounttobereturned/availablenotes[i]);
        amounttobereturned %= availablenotes[i]
        noOfNotes[i].innerText = numberofnotes;
    }
        
}
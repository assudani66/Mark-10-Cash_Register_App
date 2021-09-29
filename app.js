var billAmount = document.querySelector("#bill-amount");
var cashgiven = document.querySelector("#cash-amount");
const checkbutton = document.querySelector("#btn-calculate");
var errorMessage = document.querySelector("#error-message");
var NoofNotes = document.querySelectorAll(".no-of-notes")
availablenotes = [2000,500,100,50,20,5,1]



checkbutton.addEventListener("click" , function ValidatebillAmountandcashamount(){

    errorMessage.style.display = "none";
    if(billAmount.value > 0 ){
        if(cashgiven.value >= billAmount.value) {

            var amounttobereturned = cashgiven.value-billAmount.value;
            console.log(amounttobereturned)
            calculatechange(amounttobereturned)

        }else{
            showmessage("ask for more cash")
        }

    }else{
        showmessage("bill amount invalid")
    }

})
function showmessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}
console.log(availablenotes.length+1)
function calculatechange(amounttobereturned){
    for(i=0 ; i<=availablenotes.length +1 ; i++){
       var numberofnotes = Math.trunc(
            amounttobereturned/availablenotes[i]);
        amounttobereturned %= availablenotes[i]
        NoofNotes[i].innerText = numberofnotes;
        

    }
        
}
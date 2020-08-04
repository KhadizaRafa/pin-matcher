let inputDigit = 0;
let retryPinCount = 3;

function pinGenerator()
{
    const startValue = 1000;
    const endValue = 10000;
    const range = endValue - startValue;     
    var pin = Math.floor(range * Math.random()) + startValue; //fourDigitRandomValue = startValue + Math.floor((endValue - startValue) * random)
    document.getElementById('view-pin').value = pin;
}
    
function displayDigit(digit)
{
    if((inputDigit.toString()).length!=4)
    {
        inputDigit = inputDigit * 10 + digit;     
    }
    document.getElementById('provided-pin').value = inputDigit;
}

function matchPin()
{
    var generatedPin = document.getElementById('view-pin').value;
    var providedPin = document.getElementById('provided-pin').value;

    if(generatedPin-providedPin==0){
        displayStyleBlock('rightPin',true);
        displayStyleBlock('wrongPin',false);
        displayStyleBlock('retryPin',false);
        retryPinCount = 3;
    }
    else{
        retryPinCount = retryPinCount - 1;
        displayStyleBlock('wrongPin',true);
        displayStyleBlock('retryPin',true);
        displayStyleBlock('rightPin',false);
        
        if(retryPinCount>0)
        {
            document.getElementById('retryPin').innerText = retryPinCount +' try left';
        }        
        else
        {
            document.getElementById('submitPin').disabled = true;
            document.getElementById('generate-pin').disabled = true;
            document.getElementById('retryPin').innerText = 'No more retry allowed for this session';
        }
    }
    clearPin('provided-pin');

}

function displayStyleBlock(id,isBlock)
{
    if(isBlock)
      document.getElementById(id).style.display = "block";
    else
      document.getElementById(id).style.display = "none";
}
function clearPin(id)
{
    inputDigit='';
    document.getElementById(id).value = "";
}


function backSpace()
{
    inputDigit = parseInt(inputDigit/10);
    if(inputDigit==0)
    {
        inputDigit = '';
    }
    document.getElementById('provided-pin').value = inputDigit;
}
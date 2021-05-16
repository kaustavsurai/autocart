textShuffle = function(element, text, timer){
  var thisEl = document.getElementById(element),
    counter = 0,
    t = setInterval(function(){		
        if(counter == text.length -1){
            t = window.clearInterval(t);
        }
        setTimeout(function(){
            //change markup to next the next string
            thisEl.innerHTML = text[counter];
            counter++;						
        },310);
    }, timer);
  }
var shuffle1 = new textShuffle('hubnotfound', 
                               ['Hub not found ! <br> <Link to="/networksetting"><button class="btn btn-changesetting mt-4">Change Local Network Setting</button></Link>'],
                               5500);
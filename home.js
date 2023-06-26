(function (){
   
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let equal = document.querySelector('.btn-equal')
    let Clear = document.querySelector('.btn-clear')


    buttons.forEach(function(button) {
        
        button.addEventListener('click',function(e){
            
            let value =e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            console.log("helle js")
            screen.value = "";
        } else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    Clear.addEventListener('click',function(e){
        screen.value = "";
    })

})();



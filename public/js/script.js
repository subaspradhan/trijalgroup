document.addEventListener("DOMContentLoaded", function () {
    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.style.display = "flex";
    setTimeout(function () {
        loadingContainer.style.display = "none";
    }, 2000);
});

let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");
 
menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})




var subcontent1 = document.getElementById('subcontent1');
var option1 = subcontent1.getElementsByTagName('p');
for(var i = 0; i< option1.length; i++){
    option1[i].style.display='none';

//     option[i].addEventListener ('mouseover',function(){

//     })
}
var subcontent2 = document.getElementById('subcontent2');
var option2 = subcontent2.getElementsByTagName('p');
for(var i = 0; i< option2.length; i++){
    option2[i].style.display='none';

//     option[i].addEventListener ('mouseover',function(){

//     })
}

var subcontent3 = document.getElementById('subcontent3');
var option3 = subcontent3.getElementsByTagName('p');
for(var i = 0; i< option3.length; i++){
    option3[i].style.display='none';

//     option[i].addEventListener ('mouseover',function(){

//     })
}

var subcontent4 = document.getElementById('subcontent4');
var option4 = subcontent4.getElementsByTagName('p');
for(var i = 0; i< option4.length; i++){
    option4[i].style.display='none';

    // option[i].addEventListener ('mouseover',function(){

    // })
}

// var subcontent5 = document.getElementById('subcontent5');
// var option5 = subcontent5.getElementsByTagName('p');
// for(var i = 0; i< option5.length; i++){
//     option5[i].style.display='none';

    // option[i].addEventListener ('mouseover',function(){

    // })
// }

// var subcontent6 = document.getElementById('subcontent6');
// var option6 = subcontent6.getElementsByTagName('p');
// for(var i = 0; i< option6.length; i++){
//     option6[i].style.display='none';

//     option[i].addEventListener ('mouseover',function(){

//     })
// }

// var subcontent7 = document.getElementById('subcontent7');
// var option7 = subcontent7.getElementsByTagName('p');
// for(var i = 0; i< option7.length; i++){
//     option7[i].style.display='none';

//     option[i].addEventListener ('mouseover',function(){

//     })
// }





subcontent1.addEventListener('click',function(){
    for(var i=0; i< option1.length; i++){
        option1[i].style.display=option1[i].style.display != 'none'? 'none':'block';
    }
})
subcontent2.addEventListener('click',function(){
    for(var i=0; i< option2.length; i++){
        option2[i].style.display=option2[i].style.display != 'none'? 'none':'block';
    }
})
subcontent3.addEventListener('click',function(){
    for(var i=0; i< option3.length; i++){
        option3[i].style.display=option3[i].style.display != 'none'? 'none':'block';
    }
})
subcontent4.addEventListener('click',function(){
    for(var i=0; i< option4.length; i++){
        option4[i].style.display=option4[i].style.display != 'none'? 'none':'block';
    }
})
// subcontent5.addEventListener('click',function(){
//     for(var i=0; i< option5.length; i++){
//         option5[i].style.display=option5[i].style.display != 'none'? 'none':'block';
//     }
// })
// subcontent6.addEventListener('click',function(){
//     for(var i=0; i< option6.length; i++){
//         option6[i].style.display=option6[i].style.display != 'none'? 'none':'block';
//     }
// })
// subcontent7.addEventListener('click',function(){
//     for(var i=0; i< option7.length; i++){
//         option7[i].style.display=option7[i].style.display != 'none'? 'none':'block';
//     }
// })




 let dpicn = document.querySelector(".dpicn");
 let dpmenu = document.querySelector(".dpicnmenu");
 dpicn.addEventListener("click",()=>{
    dpmenu.classList.toggle("dpmenuopen");
    })

let bellicn = document.querySelector(".icn1");
let bellmenu = document.querySelector(".notify");
bellicn.addEventListener("click",()=>{
bellmenu.classList.toggle("bellmenuopen");
});
    function print1(areaId){
        var content = document.getElementById(areaId).innerHTML;
        var originalcontent = document.body.innerHTML;
        document.body.innerHTML = content;
        window.print();
        document.body.innerHTML = window.location.reload();;
        
        // menuicn.addEventListener("click", () => {
        //     nav.classList.toggle("navclose");
        // })
        
    }
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    
    // Get the button that opens the modal and the close button
    var openButton = document.getElementById("openModal");
    var closeButton = document.getElementById("closeModal");
    var closeButton1 = document.getElementById("closeModal1");
    
    // Open the modal when the button is clicked
    openButton.addEventListener("click", function() {
        modal.style.display = "block";
        overlay.style.display = "block";
    });
    
    // Close the modal when the close button or overlay is clicked
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
    closeButton1.addEventListener("click", function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
    

    
    overlay.addEventListener("click", function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
  
      function checkFileSize(input) {
        const maxSizeInBytes = 300 * 1024;
      
        if (input.files && input.files[0]) {
          const fileSize = input.files[0].size;
      
          if (fileSize > maxSizeInBytes) {
            alert('File size exceeds the allowed limit (300KB)');
            input.value = '';
          }
        }
      }
lightbox.option({ 
    "disableScrolling": true,
    "showImageNumberLabel": false,
})

    
    
    
    
    
    let hamb = document.querySelector(".contacts__hidemenu");
    let popup = document.querySelector(".contacts__popup");
    let adress = document.querySelector(".contacts__adress").cloneNode(1);


    hamb.addEventListener("click", hambOpen) 

    function hambOpen(e) {
        e.preventDefault();
        popup.classList.toggle("open");
    
    }

 
      
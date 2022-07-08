

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzGw6TLnD8camwAQf2FUM0WofP1I90NuO3XlSkR2h4pcpjQLabPRTMnGWMaOHe0e4x5/exec'
               const form = document.forms['google-sheet']
             
               form.addEventListener('submit', e => {
                 e.preventDefault()
                 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => window.location.replace("../files/thankyou.html"))
           .catch(error => console.error('Error!', error.message))         
               })
               // const btn = document.querySelector(".button");
   
   // btn.classList.add("button--loading");
   // btn.classList.remove("button--loading");
   
   

 
  
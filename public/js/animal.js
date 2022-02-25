console.log('Работаешь?');
const allAnimal = document.querySelector('#allAnimal')
const {redactorModal} = document.forms

// console.log(redactorModal);
// const inputImg = document.querySelector('input[type="file"]')
// console.log('sssssss',inputImg);



//УДАЛЕНИЕ

allAnimal?.addEventListener('click', async (e) =>{
   e.preventDefault();
   if(e.target.id === 'delete-button') {
      const postCard = e.target.closest('[data-id]');//Получение карточки
      const {id} = postCard.dataset;//Получение Id карточки

      const response = await fetch(`/animal/${id}`, {
         method: 'DELETE',
      });
      if (response.ok) {
         postCard.remove();//Удаление карточки
      } 
   }

   if (e.target.id === 'redactor-button') {
      const postCard = e.target.closest('[data-id]');//Получение карточки
      const {id} = postCard.dataset;//Получение Id карточки
      const form = document.getElementById(id)
      form.classList.replace("hidden", "showen")
      console.log(form)
      
      // const formData = Object.fromEntries(new FormData(form))
      // console.log(formData)
      form.addEventListener("click",async  (event)=>{
         event.preventDefault()
         if (event.target.type === "submit") {
            
            const formValues = Object.fromEntries(new FormData(form))
            const response = await fetch(`/animal/${id}`, {
               method: 'PUT',
               headers: {
                 'Content-Type': 'application/json',
      
               },
               body: JSON.stringify(formValues),
             });
             if(response.ok) {
                form.classList.replace("showen", "hidden")
                document.querySelector(`#title${id}`).innerText = formValues.title;
                document.querySelector(`#description${id}`).innerText = formValues.description;
             }
         }

         if (event.target.type === "Закрыть") {

         }
      })


     
   }

})

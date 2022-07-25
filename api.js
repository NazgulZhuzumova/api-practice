function fetchData() {
   fetch('https://reqres.in/api/users').then(response => {
       console.log(response =>{
           if(!response.ok) {
             throw Error('ERROR');
           }
       })
       return response.json();
       response.json();
   }).then(contacts => {
       console.log(contacts.data);
       const html = contacts.data.map(user =>{
           return `
           <div class="user">
           <p><img src="${user.avatar}" alt="${user.first_name}" /></p>
           <p>Name: ${user.first_name}</p>
           <p>Email: ${user.email}</p>
           </div>`;
       }).join("");
       console.log(html);
       document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
   }).catch(error => {
        console.log(error);
   });
}
fetchData();



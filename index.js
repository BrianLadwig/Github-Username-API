 
 
 
 
 const btn = document.querySelector('#btn');
 
 


 btn.addEventListener('click', async () => {

     const username = document.querySelector('#username-search').value
     const gitRepos = `https://api.github.com/users/${username}/repos`;
     const response = await fetch(gitRepos);
     const repos = await response.json();
     const ul = document.querySelector('#repoBox');
      ul.innerHTML ='';



     repos.forEach(item => {

        console.log(Object.keys(item));

         
        
         const link = document.createElement('a');
         link.href = item.html_url;
         link.classList.add('list-group-item-action')
         
         ul.appendChild(link);
         link.classList.add('list-group-item');
        


         const repoName = document.createElement('h3');
         link.appendChild(repoName);
         repoName.innerText = item.name;


         const description = document.createElement('p');
         link.appendChild(description);
         description.innerText = item.description;

     });

 });









 


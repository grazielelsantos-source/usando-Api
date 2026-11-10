// linguagens de programação

//const url= 'https://viacep.com.br/ws/01001000/json/';

function buscaApi(url){
    fetch(url)
    .then( resposta => resposta.json())
    .then(data => {
      if(data.erro){
          console.log('cep não encontrado')
      }
      else{
          console.log(data)
      }
    })
}
buscaApi("https://jsonplaceholder.typicode.com/posts")
buscaApi("https://jsonplaceholder.typicode.com/comments")
buscaApi("https://jsonplaceholder.typicode.com/albums")
buscaApi("https://jsonplaceholder.typicode.com/photos")
buscaApi("https://jsonplaceholder.typicode.com/users")

   
   ""
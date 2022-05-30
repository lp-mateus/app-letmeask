// Consumindo api do github
const URLGITHUB = "https://api.github.com/users/";

// Método de tratamento da Api
export function consumirApiGithub(nomeUsuario) {
    fetch(URLGITHUB + nomeUsuario)
        .then((result) => {return result.json()})
        .then((dados) => {
            // Tratamento dos dados do request
            console.log(dados);

            // Armazenando localstorage
            localStorage.setItem("id-gthb", dados.id);
            localStorage.setItem("location-gthb", dados.location);
            localStorage.setItem("name-gthb", dados.name);
            localStorage.setItem("blog-gthb", dados.blog);            
            
        })
        .catch((error)=>{console.log(error)})
}

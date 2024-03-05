function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = {
        nome: "Rayane",
        idade: 23,
        email: "rayanecristina@gmail.com",
      };
      resolve(user);
    }, 10000);
  });
}


async function playGetUser(){
    let retorno = await getUserInfo();
    console.log(retorno);
}


function playGetUser(){
    let retorno = getUserInfo();
    retorno
    .then((obj)=>{
        console.log(obj);
    }).catch(()=>{

    })
}

debugger;
playGetUser();
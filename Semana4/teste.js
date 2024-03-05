async function getUserInfo() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = {
        nome: "Rayane",
        idade: 23,
        email: "rayanecristina@gmail.com",
      };
      resolve(user);
    }, 2000);
  });
}

getUserInfo();
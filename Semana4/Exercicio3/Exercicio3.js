fetch("./data.json")
.then(resposta_obj => {
  return resposta_obj.json();
})

.then((resposta_json) => {
  console.log(resposta_json)
})
.catch ((error) => console.log(error))
function adoptAnimal(animalObj){
fetch ("http://localhost:3000/animalData",{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(animalObj)
})
.then(res=>res.json())
.then(data=>console.log(animal))
}
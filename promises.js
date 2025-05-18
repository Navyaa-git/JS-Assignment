// fetch method:
const result = fetch("https://dummyjson.com/users");
console.log(result);


// then, catch
fetch("https://dummyjson.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// asyn, await
  async function fetchdata() {
    var response = await fetch(("https://dummyjson.com/users"));
    var data = await response.json();
    console.log(data)
  }
  fetchdata();

  


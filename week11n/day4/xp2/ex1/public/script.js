async function getData() {
    const resp = await fetch("http://localhost:3000/users");
    const data = await resp.json();
    console.log(data);
    document.querySelector(
      ".container"
    ).innerHTML = `firstname: ${data.firstname}, lastname: ${data.lastname}`;
  }
  getData();
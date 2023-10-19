const form = document.querySelector(".main-form");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let data = {
    fullname: ev.target[0].value,
    email: ev.target[1].value,
    date: ev.target[2].value,
    type: ev.target[3].value,
    phone: ev.target[4].value,
    address: ev.target[5].value,
    message: ev.target[6].value,
  };
  let conf = confirm("Do you want to continue?");
  if (!conf) {
    return;
  } else {
    const res = fetch("http://127.0.0.1:8000/appointment/create", {
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
        
      }
    }).then(data=> {
      return data.json()
    }).then(data=>{
      alert(data.message);
      console.log(data)
    })
  }
});


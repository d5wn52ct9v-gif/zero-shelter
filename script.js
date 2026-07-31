const users = {
  "ZS-A-91-0427": {
    password: "0427",
    page: "home.html"
  }
};

function login() {
  const id = document.getElementById("id").value.trim();
  const pw = document.getElementById("pw").value.trim();

  if (users[id] && users[id].password === pw) {
    window.location.href = users[id].page;
  } else {
    alert("Resident ID 或 Password 錯誤");
  }
}

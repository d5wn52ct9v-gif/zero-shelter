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

    localStorage.setItem("login", id);

    window.location.href = users[id].page;

  } else {

    alert("居民編號或密碼錯誤！");

  }
}

function checkLogin() {

  if (localStorage.getItem("login") == null) {

    window.location.href = "index.html";

  }

}

function logout() {

  localStorage.removeItem("login");

  window.location.href = "index.html";

}

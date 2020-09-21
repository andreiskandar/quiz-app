$(document).ready(function (){
  const $login = $(`
  <div class="sidenav">
  <div class="login-main-text">
    <h2>
      QuizAPP<br />
      Login Page
    </h2>
    <p>Login or register from here to access.</p>
  </div>
</div>
<div class="main">
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
        <form id="login-register">
        <div class="form-group">
          <label>User Name</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Email"
            name="email"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <button type="submit" class="btn btn-black">Login</button>
        <button type="submit" class="btn btn-secondary">Register</button>
        <button type="submit" class="btn btn-black facilitator_btn">
          Facilitator
        </button>
      </form>
    </div>
  </div>
</div>
  `)

  window.$login = $login;

  // $questionForm.submit(function (e) {});

});


$(document).ready(function () {
  const $login = $(`
  <div class="sidenav">
  <div class="login-main-text">
    <h2>
      QuizAPP<br />
      Login Page
    </h2>
    <p>Please Login</p>
  </div>
</div>
<div class="main">
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
        <form id="login-register">
        <div class="form-group email-form" style="margin-right:10px">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            name="email"
          />
          <button type="submit" class="btn btn-black"> Login</button>
        </div>
        </form>
    </div>
  </div>
</div>
  `);

  window.$login = $login;

  // $questionForm.submit(function (e) {});
});

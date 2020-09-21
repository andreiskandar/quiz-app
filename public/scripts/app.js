$(() => {
  $(".facilitator_btn").click(function (e) {
    $(".login_page").remove();

    let userLinks;

    userLinks = `
      <nav>
        <ul class="nv-block">
          <li class="navbar-brand">Q.a. </li>
          <div class="nv-links">
            <li class="nav-link" class="browse_btn">Browse</li>
            <li class="nav-link" class="create_btn">Create</li>
          </div>
          <div class="nav navbar-right top-nav">
            <li class="nav-link"  id="nv_username">username</li>
            <li class="nav-link">Login / Register</li>
            <li class="nav-link">Logout</li>
          </div>
        </ul>
      </nav>
      `;

    $("#page-header").append(userLinks);
    e.preventDefault();
  });

  const elm = `<h1>hello</h1>`;

  $(".browse_btn").click(function (e) {
    console.log("browse");
    e.preventDefault();
  });
  $(".create_btn").click(function (e) {
    console.log("hello");
    $("#main-content").append(elm);
    // views_manager.show("questionForm");
    e.preventDefault();
  });
});

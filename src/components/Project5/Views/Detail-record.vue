<template>
  <div>
    <div class="app-main-layout">
      <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
          <div class="navbar-left">
            <a href="#">
              <i class="material-icons black-text">dehaze</i>
            </a>
            <span class="black-text">12.12.12</span>
          </div>

          <ul class="right hide-on-small-and-down">
            <li>
              <a class="dropdown-trigger black-text" href="#" data-target="dropdown">
                USER NAME
                <i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id="dropdown" class="dropdown-content">
                <li>
                  <a href="#" class="black-text">
                    <i class="material-icons">account_circle</i>Profile
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#" class="black-text">
                    <i class="material-icons">assignment_return</i>Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav app-sidenav open">
        <li>
          <a href="#" class="waves-effect waves-orange pointer">Bill</a>
        </li>
        <li>
          <a href="#" class="waves-effect waves-orange pointer">History</a>
        </li>
        <li>
          <a href="#" class="waves-effect waves-orange pointer">Planning</a>
        </li>
        <li>
          <a href="#" class="waves-effect waves-orange pointer">New entry</a>
        </li>
        <li>
          <a href="#" class="waves-effect waves-orange pointer">Categories</a>
        </li>
      </ul>

      <main class="app-content">
        <div class="app-page">
          <div>
            <div>
              <div class="breadcrumb-wrap">
                <a href="/history" class="breadcrumb">History</a>
                <a class="breadcrumb"> Expenses </a>
              </div>
              <div class="row">
                <div class="col s12 m6">
                  <div class="card red">
                    <div class="card-content white-text">
                      <p>Description:</p>
                      <p>Summ:</p>
                      <p>Category:</p>

                      <small>12.12.12</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-record-component",
};
</script>

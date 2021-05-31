<template>
  <header class="d-flex align-items-center p-4">
    <a class="mr-auto" href="/">
      <img height="48" src="/images/bootstrap.svg" width="48" />
    </a>
    <a class="btn btn-lg btn-outline-primary" href="/signup">Sign up</a>
  </header>
  <form action="/signin" class="form-signin bg-white p-4" method="post">
    <h3 class="mb-3 font-weight-normal">Sign in</h3>
    <div class="form-group">
      <input
        class="form-control form-control-first"
        id="user_email"
        name="user[email]"
        placeholder="Email address"
        type="email"
        required
      />
      <input
        class="form-control form-control-last"
        id="user_password"
        name="user[password]"
        placeholder="Password"
        type="password"
        required
      />
    </div>
    <div class="form-group">
      <label class="d-block font-weight-normal mb-4 text-secondary">
        <input name="user[remember_me]" type="hidden" value="false" />
        <input
          id="user_remember_me"
          name="user[remember_me]"
          type="checkbox"
          value="true"
        />
        &nbsp;Remember me
      </label>
    </div>
    <div class="form-group">
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </div>
    <a class="text-secondary text-decoration-none mr-1" href="/recover">
      Forgot password?
    </a>
    <br />
    <a class="text-secondary text-decoration-none mr-1" href="/confirm">
      Didn't get confirmation email?
    </a>
  </form>
</template>

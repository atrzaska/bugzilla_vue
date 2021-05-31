<template>
  <header class="d-flex align-items-center p-4">
    <a class="mr-auto" href="/">
      <img height="48" src="/images/bootstrap.svg" width="48" />
    </a>
    <a class="btn btn-lg btn-outline-primary" href="/signin">Sign in</a>
  </header>
  <div class="form-signin text-center pt-4">
    <h1>Thank you!</h1>
    <p class="text-secondary">
      We've sent password reset instructions to your email address.
      <strong>
        If no email is received within ten minutes, check that the submitted
        address is correct.
      </strong>
    </p>
    <a class="btn btn-lg btn-primary btn-block" href="/signin">
      Back to Sign in
    </a>
  </div>
</template>

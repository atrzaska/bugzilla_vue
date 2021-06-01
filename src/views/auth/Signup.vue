<template>
  <AuthLayout>
    <form action="/signup" class="form-signin bg-white p-4" method="post">
      <h3 class="mb-3 font-weight-normal">Get started free today</h3>
      <p class="mb-4 text-secondary">No credit card required</p>
      <div class="form-group">
        <input
          autocomplete="name"
          class="form-control form-control-first"
          id="user_name"
          name="user[name]"
          placeholder="Name"
          type="text"
          required
        />
        <input
          autocomplete="username"
          class="form-control form-control-middle"
          id="user_email"
          name="user[email]"
          placeholder="Email address"
          type="email"
          required
        />
        <input
          autocomplete="new-password"
          class="form-control form-control-last"
          id="user_password"
          name="user[password]"
          placeholder="Password 8+ characters"
          type="password"
          required
        />
      </div>
      <div class="form-group">
        <label class="d-block font-weight-normal text-secondary">
          <input name="user[terms_accepted]" type="hidden" value="false" />
          <input
            id="user_terms_accepted"
            name="user[terms_accepted]"
            type="checkbox"
            value="true"
            required
          />
          &nbsp;I agree to Bugzilla&nbsp;
          <a href="/terms" target="_blank">Terms&nbsp;</a>
          and&nbsp;
          <a href="/privacy" target="_blank">Privacy Policy</a>
        </label>
      </div>
      <div class="form-group">
        <label class="d-block font-weight-normal text-secondary">
          <input
            name="user[receive_news_and_updates]"
            type="hidden"
            value="false"
          />
          <input
            id="user_receive_news_and_updates"
            name="user[receive_news_and_updates]"
            type="checkbox"
            value="true"
          />
          &nbsp;I agree to receive Bugzilla news and updates.
        </label>
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Get started now
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
</script>

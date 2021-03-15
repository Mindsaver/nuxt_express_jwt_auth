<template>
  <section class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="login">
        <img src="https://logoipsum.com/logo/logo-1.svg" width="325px" />
        <form>
          <div class="field">
            <div class="control">
              <input
                class="input is-medium is-rounded"
                type="email"
                placeholder="hello@example.com"
                autocomplete="username"
                required
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input is-medium is-rounded"
                type="password"
                placeholder="**********"
                autocomplete="current-password"
                required
              />
            </div>
          </div>
          <br />
          <button
            class="button is-block is-fullwidth is-primary is-medium is-rounded"
            type="submit"
          >
            Login
          </button>
        </form>
        <br />
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <nuxt-link to="/forgot" class=""> Forgot Password? </nuxt-link>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <nuxt-link to="/register" class=""> Create an Account </nuxt-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth',

  name: 'HomePage',
}
</script>

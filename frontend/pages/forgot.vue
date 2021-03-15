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
                placeholder="Enter your Email"
                autocomplete="username"
                required
              />
            </div>
          </div>
          <br />
          <button
            class="button is-block is-fullwidth is-primary is-medium is-rounded"
            type="submit"
          >
            Restet Password
          </button>
        </form>
        <br />
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <nuxt-link to="/login" class=""> Login to Account</nuxt-link>
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

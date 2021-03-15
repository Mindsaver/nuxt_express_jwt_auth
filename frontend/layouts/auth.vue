<template>
  <div class="back">
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>
<style lang="css">
* {
  font-family: 'Nunito Sans', sans-serif;
}

:root {
  --shadowDark: #d9dde6;
  --background: #00d1b2;
  --shadowLight: #eff5fe;
  --loginBackground: #e4e9f2;
}

.back {
  background: var(--background);
}

.hero-body {
  justify-content: center;
}

.login {
  background: var(--loginBackground);
  border-radius: 25px;
  padding: 1.5rem;
}

input {
  background: var(--shadowDark) !important;
}

a {
  font-weight: 600;
}
</style>

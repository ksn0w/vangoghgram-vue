<template lang="pug">
  div#hero.valign-wrapper
    .row
      .card.hoverable
        .card-content.center-align
          h1.cursive Vangoghgram
          a.btn.btn-success(
              href="https://api.instagram.com/oauth/authorize/?client_id=768b34736028436aad1b50b1f6d13442&redirect_uri=http://localhost:3000/callback&response_type=token"
            ) Ir al login de instagram
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed:mapState([
    'counter'
  ])
}
</script>

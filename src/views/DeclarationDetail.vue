<template>
  <div class="declarationDetail">
    <h1>DeclarationDetail</h1>
    <v-card>
      <!-- {{ this.loadData }} -->
      {{ this.loadData.MessageType }}
    </v-card>
  </div>
</template>
<script>
export default {
  name: "declarationDetail",
  data() {
    return {};
  },
  computed: {
    loadData: function () {
      return JSON.stringify(localStorage.getItem("declarationData"));
    },
  },
};
</script>

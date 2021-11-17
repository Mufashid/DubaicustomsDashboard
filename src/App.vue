<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-4" dark>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        text: "Declaration",
        disabled: true,
        href: "DeclarationDetail",
      },
    ],
  }),
  created() {
    if (window.location.pathname == "/DeclarationDetail") {
      this.items[0].disabled = false;
    }
  },
};
</script>

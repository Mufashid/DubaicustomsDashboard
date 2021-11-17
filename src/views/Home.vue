<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="declarations"
      class="elevation-1"
      @click:row="handleClick"
      style="cursor: pointer"
    ></v-data-table>
    <!-- {{ this.$store.state.responeData }} -->
    {{ this.$store.getters.xml2json }}
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      headers: [
        {
          text: "MessageReferenceNumber",
          align: "start",
          sortable: false,
          value: "MessageReferenceNumber",
        },
        { text: "MessageType", value: "MessageType" },
        { text: "DateTime", value: "DateTime" },
        { text: "DeclarationNo", value: "DeclarationNo" },
        { text: "DeclarationStatus", value: "DeclarationStatus" },
      ],
      declarations: [
        {
          MessageReferenceNumber: "MSGREF1",
          MessageType: "new",
          DateTime: "2021-08-03T10:53:07.142+04:00",
          DeclarationNo: "2040001425521",
          DeclarationStatus: "SUBMITTED",
          test: "this is a test data",
        },
        {
          MessageReferenceNumber: "MSGREF2",
          MessageType: "new",
          DateTime: "2021-08-03T11:53:07.142+04:00",
          DeclarationNo: "12400056785521",
          DeclarationStatus: "SUBMITTED",
        },
      ],
    };
  },
  methods: {
    handleClick(value) {
      console.log(value);
      localStorage.setItem("declarationData", JSON.stringify(value));
      this.$router.push("/DeclarationDetail");
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

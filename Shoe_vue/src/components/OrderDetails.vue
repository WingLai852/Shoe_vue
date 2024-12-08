<template>
    <div>
      <h3>Bestelling Details</h3>
      <div v-if="order">
        <p>ID: {{ order.id }}</p>
        <p>Klant: {{ order.customerName }}</p>
        <p>Maat: {{ order.shoeSize }}</p>
        <p>Status: {{ order.status }}</p>
      </div>
      <div v-else>
        <p>Bestelling wordt geladen...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        order: null,
      };
    },
    methods: {
      async fetchOrder() {
        try {
          const response = await axios.get(`http://localhost:3000/api/v1/orders/${this.$route.params.id}`);
          this.order = response.data.data;
        } catch (error) {
          console.error('Error bij het ophalen van details:', error);
        }
      },
    },
    created() {
      this.fetchOrder();
    },
  };
  </script>
  
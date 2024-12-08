<template>
    <div class="order-counter">
      <h3>Totale Bestellingen: {{ totalOrders }}</h3>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        totalOrders: 0,
      };
    },
    methods: {
      async fetchOrders() {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/orders');
          this.totalOrders = response.data.data.length;
        } catch (error) {
          console.error('Error bij het ophalen van bestellingen:', error);
        }
      },
    },
    created() {
      this.fetchOrders();
    },
  };
  </script>
  
  <style scoped>
  .order-counter {
    background-color: #f4f4f4;
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
    border-radius: 5px;
  }
  </style>
  
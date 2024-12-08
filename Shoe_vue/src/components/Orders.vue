<template>
    <div class="orders">
      <h3>Bestellingen</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Klant</th>
            <th>Maat</th>
            <th>Status</th>
            <th>Acties</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customerName }}</td>
            <td>{{ order.shoeSize }}</td>
            <td>{{ order.status }}</td>
            <td>
              <button @click="updateStatus(order.id)">Update</button>
              <button @click="deleteOrder(order.id)">Verwijderen</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orders: [],
      };
    },
    methods: {
      async fetchOrders() {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/orders');
          this.orders = response.data.data;
        } catch (error) {
          console.error('Error bij het ophalen van bestellingen:', error);
        }
      },
      async updateStatus(id) {
        try {
          await axios.put(`http://localhost:3000/api/v1/orders/${id}`, { status: 'verzonden' });
          alert('Status geüpdatet!');
          this.fetchOrders();
        } catch (error) {
          console.error('Error bij het updaten van status:', error);
        }
      },
      async deleteOrder(id) {
        try {
          await axios.delete(`http://localhost:3000/api/v1/orders/${id}`);
          alert('Bestelling verwijderd!');
          this.fetchOrders();
        } catch (error) {
          console.error('Error bij het verwijderen van bestelling:', error);
        }
      },
    },
    created() {
      this.fetchOrders();
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  th {
    background-color: #f4f4f4;
  }
  </style>
  
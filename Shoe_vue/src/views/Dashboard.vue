<template>
    <div class="dashboard">
      <h1>Bestellingen Dashboard</h1>
      <h2>Totale Bestellingen: {{ orders.length }}</h2>
  
      <div v-if="loading">Laden...</div>
      <div v-else>
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
            <tr v-for="order in orders" :key="order._id">
              <td>{{ order._id }}</td>
              <td>{{ order.customerName }}</td>
              <td>{{ order.shoeSize }}</td>
              <td>{{ order.status }}</td>
              <td>
                <button @click="deleteOrder(order._id)">Verwijderen</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import OrderCounter from '@/components/OrderCounter.vue';


  
  export default {
    components: {
    OrderCounter,
  },
    name: 'Dashboard',
    data() {
      return {
        orders: [], // Hier komen de bestellingen
        loading: true,
      };
    },
    async created() {
      await this.fetchOrders(); // Bestellingen ophalen bij het laden
    },
    methods: {
      async fetchOrders() {
        try {
          const token = localStorage.getItem('token'); // Haal de token op
          const response = await axios.get('http://localhost:3000/api/v1/orders', {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.orders = response.data.data; // Sla bestellingen op
        } catch (error) {
          console.error('Error bij het ophalen van bestellingen:', error);
        } finally {
          this.loading = false;
        }
      },
      async deleteOrder(orderId) {
        try {
          const token = localStorage.getItem('token');
          await axios.delete(`http://localhost:3000/api/v1/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          // Verwijder bestelling uit de lijst
          this.orders = this.orders.filter((order) => order._id !== orderId);
          alert('Bestelling verwijderd!');
        } catch (error) {
          console.error('Error bij het verwijderen van bestelling:', error);
        }
      },
    },
  };
  </script>
  
<style scoped>
.dashboard {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1, h2 {
    text-align: center;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
}

button {
    padding: 5px 10px;
    background-color: #39ff14; /* Neon green */
    color: black;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #32cd32; /* Slightly darker neon green */
}
</style>

  
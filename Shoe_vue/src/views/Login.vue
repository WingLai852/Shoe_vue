<template>
    <div class="login">
      <h1>Admin Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" placeholder="Enter username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" placeholder="Enter password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router';
  
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:3000/api/v1/login', {
            username: this.username,
            password: this.password,
          });
  
          const { token } = response.data.data;
          localStorage.setItem('token', token); // JWT-token opslaan
          router.push('/dashboard'); // Navigeren naar Dashboard na login
        } catch (error) {
          this.errorMessage = 'Invalid username or password';
          console.error('Login error:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  
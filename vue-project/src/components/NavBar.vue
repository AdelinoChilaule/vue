<template>
    <nav class="bg-white border-b border-gray-200 shadow-md">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img class="h-10 w-auto" :src="image" alt="Your Company" />
        <span class="text-2xl font-semibold whitespace-nowrap dark:text-white">ElEvents</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 border-b-2 border-gray-200">
          <li>
            <router-link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</router-link>
          </li>
          <li>
            <router-link  to="/dashboard" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Meus Eventos</router-link>
          </li>
          <li>
            <router-link to="/criareventos" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Criar Eventos</router-link>
          </li>
          <li>
            <router-link  to="/signin" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Entrar</router-link>
          </li>
          <li>
            <router-link  to="/register" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cadastrar</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from '../assets/img/logo.jpg'
    export default {
        name: 'NavBar',
    data() {
      return {
        image: logo
      };
    }
}
</script>

<style scoped>
.router-link-active {
  background-color: #1D4ED8; 
  color: white; 
  border-radius: 8px; 
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease; 
}

.router-link-active:hover {
  background-color: #2563EB; 
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1); 
}

.router-link {
  transition: color 0.4s ease, background-color 0.4s ease; 
}

.router-link:hover {
  background-color: #f1f5f9; 
}
</style>
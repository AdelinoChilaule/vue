<template>
    <div class="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
      <a href="#!">
        <img class="w-full h-48 object-cover object-center" :src="image" alt="Card Image" />
      </a>
      <div class="p-6">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{subtitle}}</h5>
        <p class="mb-4 text-gray-700 dark:text-gray-400 text-justify">
            {{description}}
        </p>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Ler Mais
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import logo from '../assets/img/ALP.jpeg'; // Ajuste o caminho conforme necessário
  
  export default {
    name: 'CardComponent',
    props:{
        subtitle:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
    },
    data() {
      return {
        image: logo
      };
    }
  }
  </script>
  
  <style scoped>
  /* Adicione sombras personalizadas, se necessário */
  .card-shadow {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  }
  </style>
  
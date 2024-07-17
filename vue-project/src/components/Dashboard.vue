<template>
   <NavBar/>
 
   <div class="mt-6">
      <div class="bg-white p-6 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-4 text-center">Meus Eventos</h1>
      <div class="overflow-x-auto">
         <table class="min-w-full bg-white divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
               <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
               <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
               <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Local Evento</th>
               <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participantes</th>
               <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Evento</th>
               <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activo</th>
               <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr>
               <td class="px-6 py-4 whitespace-nowrap">1</td>
               <td class="px-6 py-4 whitespace-nowrap">ALP Cloud</td>
               <td class="px-6 py-4 whitespace-nowrap">Maputo</td>
               <td class="px-6 py-4 whitespace-nowrap">25</td>
               <td class="px-6 py-4 whitespace-nowrap">18/08/2024</td>
               <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
               </td>
               <td class="px-6 py-4 whitespace-nowrap">
                  <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                  <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
               </td>
            </tr>
            <tr>
               <td class="px-6 py-4 whitespace-nowrap">2</td>
               <td class="px-6 py-4 whitespace-nowrap">C# Programmer</td>
               <td class="px-6 py-4 whitespace-nowrap">Maputo Cidade</td>
               <td class="px-6 py-4 whitespace-nowrap">20</td>
               <td class="px-6 py-4 whitespace-nowrap">24/07/2024</td>
               <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
               </td>
               <td class="px-6 py-4 whitespace-nowrap">
                  <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                  <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
               </td>
            </tr>
         </tbody>
         </table>
      </div>
   </div>
   </div>
  
</template> 

<script>

  import logo from '../assets/img/logo1.png';
  import NavBar from './NavBar.vue';
  export default {
  name: 'SignIn',
  components:{
   NavBar
  },
  data() {
    return {
      image: logo
    };
  }
}

</script>

<style>
  .logo-size {
  width: 80px;  /* Defina a largura desejada */
  height: 80px; /* Defina a altura desejada */
}
</style>
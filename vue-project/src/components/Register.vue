<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="bg-white p-6 shadow-lg rounded-lg">
          <img class="mx-auto h-20 w-auto" :src="image" alt="Your Company" />
          <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
          <form class="mt-6 space-y-6" action="#" method="POST">
            <div>
              <label for="Nome" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
              <div class="mt-2">
                <input id="nome" name="nome" type="text" autocomplete="nome" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              
            </div>

            <div>
              <label for="confirm password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div class="mt-2">
                <input id="confirmpassword" name="confirmpassword" type="password" autocomplete="confirmpassword" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
    
  <script>
  
    import logo from '../assets/img/logo1.png';
    export default {
    name: 'SignIn',
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
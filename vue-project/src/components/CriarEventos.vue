<template>
  <NavBar />
  <div class="flex flex-col items-center justify-center p-12">
    <h1 class="text-3xl md:text-3xl mt-0 pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200 text-center">
      Crie o seu evento
    </h1>
    <div class="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg shadow-lg">
      <!-- Form starts here -->
      <form>
        <div class="mb-5">
          <label for="data-do-evento" class="mb-3 block text-base font-medium text-[#07074D]">
            Data do Evento
          </label>
          <input type="date" name="date" id="date" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>

        <div class="mb-5">
          <label for="evento" class="mb-3 block text-base font-medium text-[#07074D]">
            Evento
          </label>
          <input type="text" name="evento" id="evento" placeholder="Nome do evento" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>

        <div class="mb-5">
          <label for="cidade" class="mb-3 block text-base font-medium text-[#07074D]">
            Local do Evento
          </label>
          <input type="text" name="cidade" id="cidade" placeholder="Local do Evento" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>

        <div class="mb-5">
          <label for="private" class="mb-3 block text-base font-medium text-[#07074D]">
            O evento é privado?
          </label>
          <select name="private" id="private" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
            <option value="0">Não</option>
            <option value="1">Sim</option>
          </select>
        </div>

        <div class="mb-5">
          <label for="descricao" class="mb-3 block text-base font-medium text-[#07074D]">
            Descrição
          </label>
          <textarea name="descricao" id="descricao" placeholder="O que vai acontecer no evento?" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
        
        </div>

        <div class="mb-5">
          <label for="image" class="mb-3 block text-base font-medium text-[#07074D]">
            Imagem do Evento
          </label>
          <input type="file" id="image" name="image" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
        </div>

        <div class="mb-5">
          <label for="title" class="mb-3 block text-base font-medium text-[#07074D]">
            Adicione itens de infraestrutura:
          </label>
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input type="checkbox" name="items[]" value="Cadeiras" class="form-checkbox h-5 w-5 text-[#6A64F1]">
              <span class="ml-2 text-gray-700 dark:text-gray-400">Cadeiras</span>
            </label>
          </div>
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input type="checkbox" name="items[]" value="Palco" class="form-checkbox h-5 w-5 text-[#6A64F1]">
              <span class="ml-2 text-gray-700 dark:text-gray-400">Palco</span>
            </label>
          </div>
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input type="checkbox" name="items[]" value="Drinks grátis" class="form-checkbox h-5 w-5 text-[#6A64F1]">
              <span class="ml-2 text-gray-700 dark:text-gray-400">Drinks grátis</span>
            </label>
          </div>
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input type="checkbox" name="items[]" value="Open Food" class="form-checkbox h-5 w-5 text-[#6A64F1]">
              <span class="ml-2 text-gray-700 dark:text-gray-400">Open food</span>
            </label>
          </div>
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input type="checkbox" name="items[]" value="Brindes" class="form-checkbox h-5 w-5 text-[#6A64F1]">
              <span class="ml-2 text-gray-700 dark:text-gray-400">Brindes</span>
            </label>
          </div>
        </div>

        <div>
          <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Criar evento
          </button>
        </div>
      </form>
      <!-- Form ends here -->
    </div>
  </div>
</template>

    
  <script>
  
    import logo from '../assets/img/logo1.png';
    import NavBar from './NavBar.vue';
    export default {
    name: 'SignIn',
    components:{
      NavBar,
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
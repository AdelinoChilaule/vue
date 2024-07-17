<template>
  <section class="w-full">
    <div 
      class="w-full h-[520px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <!-- Photo by '@insolitus' on Unsplash -->
      <div>
        <h1 class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
          Search for events here
        </h1>
      </div>
      <div class="w-full mx-auto mt-6">
        <form>
          <div class="flex justify-center mt-8">
            <div class="xl:w-1/2 lg:w-3/4 md:w-[60%] sm:w-[60%] xs:w-[70%] flex gap-2 p-4 rounded-lg shadow-lg">
              <input 
                type="text" 
                class="border border-gray-300 w-full h-12 p-3 rounded-lg text-lg pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Search..." 
              />
              <button 
                type="submit" 
                class="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-lg text-white rounded-r-md font-semibold hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import backgroundImage from '../assets/img/banner.jpg'

export default {
  name: 'BannerComponent',
  data() {
    return {
      backgroundImage
    }
  }
}
</script>

<style scoped>

</style>

  
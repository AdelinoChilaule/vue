<template>
 <NavBar/>
 <Banner/>
 <h2 class="mb-2 p-3 mt-2 text-sky-500 ml-2 text-4xl font-medium leading-tight text-primary">
  Todos Eventos
</h2>
 <div class="flex flex-wrap justify-center mt-8">
    <Cards class="mx-4 my-4" 
      image="../assets/img/banner.jpg"
      subtitle="ALP Cloud" 
      description="Sabia que o ALP Cloud oferece opções flexíveis para corresponder a vários requisitos empresariais? Escolha o modelo de preços que se adapta às suas necessidades."/>
    <Cards class="mx-4 my-4" 
      subtitle="AWS Cloud" 
      description="Sabia que o ALP Cloud oferece opções flexíveis para corresponder a vários requisitos empresariais?"/>
    <Cards class="mx-4 my-4"
      image="../assets/img/bannerr.jpg"
      subtitle="Alibaba Cloud" 
      description="Sabia que o ALP Cloud oferece opções flexíveis para corresponder a vários requisitos empresariais?"/>    
 </div>
 <Footerr/>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import Banner from '../components/Banner.vue'
import Footerr from '../components/Footerr.vue'
import Cards from './Cards.vue'

export default {
  name: 'MainComponent',
  components: {
    NavBar,
    Banner,
    Cards,
    Footerr,
  },  
}
</script>

<style scoped>
.flex-wrap {
  justify-content: center;
}
</style>

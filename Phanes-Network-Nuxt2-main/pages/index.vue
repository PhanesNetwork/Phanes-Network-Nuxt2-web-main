<template>
    <div class="home">
      <Navbar/>
      <HeaderComp/>
      <PhanesEcosystem/>
      <Governance/>
      <HowWorks/>
      <ChooseUs/>
      <PhanesToken />
      <YourAssets/>
      <ListedOn/>
      <EcosystemCollector/>
      <Partners/>
      <FooterComp/>
    </div>
  </template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue';
  import Navbar from '@/components/Navbar.vue';
  import PhanesEcosystem from '@/components/PhanesEcosystem.vue';
  import Governance from '@/components/Governance.vue';
  import HowWorks from '@/components/HowWorks.vue';
  import ChooseUs from '@/components/ChooseUs.vue';
  import PhanesToken from '@/components/PhanesToken.vue';
  import YourAssets from '@/components/YourAssets.vue';
  import ListedOn from '@/components/ListedOn.vue';
  import EcosystemCollector from '@/components/EcosystemCollector.vue';
  import Partners from '@/components/Partners.vue';
  import FooterComp from '../components/FooterComp.vue';
  export default {
      components: { HeaderComp, Navbar, PhanesEcosystem, Governance, HowWorks, ChooseUs, PhanesToken, YourAssets, ListedOn, EcosystemCollector, Partners, FooterComp }
  }
  </script>
  <style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    // font-family: 'Poppins', sans-serif;
    font-family: 'Montserrat', sans-serif;
    background-color: #000906;
    background-color: rgb(7, 14, 12);
    scroll-behavior: smooth;
  }
  .row{
    width: 100%;
    max-width: 1600px;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 0 24px;
    @media only screen and (max-width:580px){
      padding: 0 10px;
    }
  }
  .heading{
      font-weight: 800;
      font-size: 55px;
      background: linear-gradient(96.52deg, #FFFFFF -5.36%, rgba(235, 235, 235, 0.5) 105.24%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  </style>
  
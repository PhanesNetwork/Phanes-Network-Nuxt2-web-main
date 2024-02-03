<template>
    <div id="phanesNetwork" class="row">
      <h2 class="heading">Phanes Ecosystem</h2>
      <div class="cards">
          <div class="card" v-for="(card, index) in cards" :key="index">
              <img :src="require(`@/assets/${card.img}`)" alt="" class="icon">
              <h3 class="title">{{card.title}}</h3>
              <p class="snippet" @click="card.showAll = !card.showAll">
                  {{card.snippet.substring(0,125)}}<span v-if="card.showAll">{{card.snippet.substring(125)}}</span>
                  <span v-if="card.showAll===false && card.snippet.length>125" class="showMore">...</span>
                  
              </p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              cards:[
                { img:'cloud_db.png', title:'Staking Programme', snippet:'Utilizing a NFT-backed staking framework, Phanes Network offers a flexible decentralized staking pools across multiple chains, enabling creating an effortless reward accumulation.',showAll:false},
                { img:'bag.png', title:'Phanes Index Portfolio', snippet:'Phanes Index Portfolio is designed to track performance of leading ecosystem assets, creating a strategic portfolio & investing management in the ecosystem, giving users diverse investment opportunities.', showAll:false},
                { img: 'locker.png', title:'AMM / DEX & WALLET', snippet:"  For smooth asset control,  Phanes' final product will be a fiat-on-ramp integrated non-custodial wallet, integrating a decentralised multichain exchange, a flawless revolutionary DeFi solution that redefines the way users engage with digital assets management.",showAll:false},
            
            ]
        }
    },
      methods:{
          getSnippet(card){
              card.showAll = !card.showAll
              console.log(card);
              if(card.snippet.length > 125 && card.showAll){
                  return card.snippet.substring(0,125)+'...'
              }
              return card.snippet
  
          }
      }
     
  }
  </script>
  
  <style lang="scss" scoped>
      #phanesNetwork{
          padding-top: 50px;
          padding: 50px 24px 230px 24px;
          .heading{
              font-size: 48px;
              line-height: 59px;
              margin-bottom: 50px;
              text-align: center;
              @media  only screen and (min-width:1500px) {
                  margin-left: 24px; 
                  text-align: center;
              }
              @media  only screen and (max-width:780px) {
                  text-align: center;             
              }
  
          }
          .cards{
              width: 100%;
              display: grid;
              grid-template-columns: repeat(3,1fr);
              gap: 27px;
              justify-content: space-between;
              justify-items: center;
              @media only screen and (max-width:1410px){
                  grid-template-columns: repeat(2,1fr);
              }
              @media only screen and (max-width:780px){
                  grid-template-columns: repeat(1,1fr);
              }
              .card{
                  width: 443px;
                  min-height: 284px;
                  height: min-content;
                  padding: 30px;
                  background: #010D09;
                  color: #E1E1E1;
  
                  position: relative;
                  $border: 3px;
                  background-clip: padding-box; /* !importanté */
                  border: solid $border transparent; /* !importanté */
                  border-radius: 1em;
                  transition: all .25s;
                  @media only screen and (max-width:1410px){
                      width: 100%;
                      min-width: 340px;
                  }
                  @media only screen and (max-width:980px){
                      min-height: 315px;
                  }
                  @media only screen and (max-width:580px){
                      min-width: 320px;
                  }
  
  
                  &:before {
                      content: '';
                      position: absolute;
                      top: 0; right: 0; bottom: 0; left: 0;
                      z-index: -1;
                      margin: -$border; /* !importanté */
                      border-radius: inherit; /* !importanté */
                      background: linear-gradient(135deg, #010D09, #1BD19C, #010D09);
                  }
                 
    
                  .icon{
                      width: 70px;
                      height: 70px;
                      margin-bottom: 14px;
                  }
                  .title{
                      font-weight: 800;
                      font-size: 24px;
                      line-height: 29px;
                      margin-bottom: 14px;
                  }
                  .snippet{
                      font-weight: 500;
                      font-size: 17px;
                      line-height: 29px;                    
                  }
              }
              .card:hover,
              .active{
                  border: none;
                  border-radius: 15px;
                  background: #1BD19C;
                  color: #010D09;
                  cursor: pointer;
                  &::before{
                      margin: 0;
                  }
              }
          }
      }
  
  
  
  
  
      
  </style>
  
  
  

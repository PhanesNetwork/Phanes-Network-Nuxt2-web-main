<template>
    <div id="chooseus" class="row">
      <h2 class="heading">Why choose us?</h2>
      <div class="cards">
          <div class="card" v-for="(card,index) in cards" :key="index">
              <img :src="require(`@/assets/${card.img}`)" alt="" class="icon">
              <h3 class="title">{{card.title}}</h3>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              cards:[
                  {img:'choose1.png',title:'Invest in Meme tokens with ease.'},
                  {img:'choose2.png',title:'Provide staking services for your project easily.'},
                  {img:'choose3.png',title:'Launch your project in a few easy steps.'},
                  {img:'choose4.png',title:'Manage liquidity easily.'},
                  {img:'choose5.png',title:'Mint tokens in a few clicks.'},
                  {img:'choose6.png',title:'Manage vesting schedules with ease.'}
              ]
          }
      }
  
  }
  </script>
  
  <style lang="scss" scoped>
      #chooseus{
          margin-bottom: 226px;
          @media only screen and (max-width:780px) {
              margin-bottom: 120px;
          }
          .heading{
              font-size: 48px;
              line-height: 59px;
              margin-bottom: 47px;
              @media  only screen and (min-width:1500px) {
                  margin-left: 24px;                
              }
              @media only screen and (max-width:780px) {
                  text-align: center;
                  font-size: 36px;
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
                  width: 444px;
                  min-height: 255px;
                  padding: 40px;
                  background: #010D09;
                  color: #E1E1E1;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  transition: all .25s;
  
                  position: relative;
                  $border: 3px;
                  background-clip: padding-box; /* !importanté */
                  border: solid $border transparent; /* !importanté */
                  border-radius: 1em;
                  @media only screen and (max-width:1410px){
                      width: 90%;
                      min-width: 340px;
                  }
                  @media only screen and (max-width:580px){
                      width: 100%;
                      min-width: 320px;
                  }
  
                  &:before {
                      content: '';
                      position: absolute;
                      top: 0; right: 0; bottom: 0; left: 0;
                      z-index: -1;
                      margin: -$border; /* !importanté */
                      border-radius: inherit; /* !importanté */
                      background: linear-gradient(45deg, #010D09, #1BD19C, #010D09);
                  }
                 
    
                  .icon{
                      width: 80px;
                      height: 80px;
                      margin-bottom: 23px;
                  }
                  .title{
                      text-align: center;
                      font-weight: 800;
                      font-size: 24px;
                      line-height: 36px;
                      @media only screen and (max-width:580px){
                          font-size: 18px;
                          line-height: 24px;
                      }
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
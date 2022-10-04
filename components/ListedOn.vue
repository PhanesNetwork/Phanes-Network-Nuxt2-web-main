<template>
    <div class="row listedon">
      <h2 class="heading">Listed on</h2>
      <p class="snippet">Phanes Network ecosystem’s tokens are available on the following exchanges</p>
      <div class="cards">
          <div class="card" v-for="i in 8" :key="i">
              <img src="@/assets/zapper.png" alt="" class="icon">
              <h3 class="title">Zapper</h3>
              <img src="@/assets/arrow.png" alt="" class="arrow">
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
      .listedon{
          margin-bottom: 115px;
          .heading{
              font-size: 48px;
              line-height: 59px;
              margin-bottom: 20px;
              @media only screen and (max-width: 630px){
                  font-size: 36px;
                  text-align: center;
                  margin-bottom: 10px;
              }
          }
          .snippet{
              font-weight: 500;
              font-size: 20px;
              line-height: 32px;
              color: #ECECEC;
              margin-bottom: 52px;
              @media only screen and (max-width: 630px){
                  font-size: 16px;
                  padding: 0 30px;
                  line-height: 25px;
                  text-align: center;
              }
          }
          .cards{
              width: 100%;
              display: grid;
              grid-template-columns: repeat(4,1fr);
              gap: 27px;
              justify-content: space-between;
              justify-items: center;
              
              @media only screen and (max-width: 1260px){
                  grid-template-columns: repeat(3,1fr);
              }
              @media only screen and (max-width: 980px){
                  grid-template-columns: repeat(2,1fr);
              }
              @media only screen and (max-width: 630px){
                  grid-template-columns: repeat(1,1fr);
              }
              .card{
                  width: 320px;
                  height: 95px;
                  background: #010D09;
                  color: #E1E1E1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all .25s;
                  position: relative;
                  $border: 3px;
                  background-clip: padding-box; /* !importanté */
                  border: solid $border transparent; /* !importanté */
                  border-radius: 1em;
                  @media only screen and (max-width:1400px) {
                      width: 280px;                    
                  }
                  @media only screen and (max-width: 980px){
                      width: 90%;    
                      min-width: 280px;   
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
                      width: 50px;
                      margin-right: 18px;
                  }
                  .title{
                      font-weight: 800;
                      font-size: 24px;
                      line-height: 29px;
                  }
                  .arrow{
                      width: 15px;
                      margin-left: 14px;
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
                  .icon path{
                      fill:#010D09;
                  }
              }
          }
      }
  
  </style>
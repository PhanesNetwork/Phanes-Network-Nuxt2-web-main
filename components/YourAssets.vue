<template>
    <div class="row">
      <div class="content">
          <h3 class="heading">Your assets, secured</h3>
          <p class="snippet">Audited by the world’s leading security firms, security of the Phanes Protocol is the highest priority.</p>
      </div>
      <div class="cards">
          <div class="card" v-for="(card, index) in cards" :key="index" >
              <svg width="51" height="60" viewBox="0 0 51 60" fill="none" class="icon" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18.3333C10.5 14.3551 12.0804 10.5398 14.8934 7.72673C17.7064 4.91369 21.5218 3.33333 25.5 3.33333C29.4782 3.33333 33.2936 4.91369 36.1066 7.72673C38.9196 10.5398 40.5 14.3551 40.5 18.3333V20H43.8333V18.3333C43.8333 8.20833 35.625 0 25.5 0C15.375 0 7.16667 8.20833 7.16667 18.3333V20H10.5V18.3333ZM37.1667 20V18.3333C37.1667 16.8012 36.8649 15.2842 36.2786 13.8687C35.6923 12.4532 34.8329 11.1671 33.7496 10.0838C32.6662 9.0004 31.3801 8.14104 29.9646 7.55474C28.5492 6.96843 27.0321 6.66667 25.5 6.66667C23.9679 6.66667 22.4508 6.96843 21.0354 7.55474C19.6199 8.14104 18.3338 9.0004 17.2504 10.0838C16.1671 11.1671 15.3077 12.4532 14.7214 13.8687C14.1351 15.2842 13.8333 16.8012 13.8333 18.3333V20H17.1667V18.3333C17.1667 16.1232 18.0446 14.0036 19.6074 12.4408C21.1702 10.878 23.2899 10 25.5 10C27.7101 10 29.8298 10.878 31.3926 12.4408C32.9554 14.0036 33.8333 16.1232 33.8333 18.3333V20H37.1667ZM13.8333 23.3333H47.1667V56.6667H3.83333V23.3333H10.5V20H3.83333C2.94928 20 2.10143 20.3512 1.47631 20.9763C0.85119 21.6014 0.5 22.4493 0.5 23.3333V56.6667C0.5 57.5507 0.85119 58.3986 1.47631 59.0237C2.10143 59.6488 2.94928 60 3.83333 60H47.1667C48.0507 60 48.8986 59.6488 49.5237 59.0237C50.1488 58.3986 50.5 57.5507 50.5 56.6667V23.3333C50.5 22.4493 50.1488 21.6014 49.5237 20.9763C48.8986 20.3512 48.0507 20 47.1667 20H13.8333V23.3333Z" fill="#1BD19C"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M40.5 33.3333H10.5V30H40.5V33.3333ZM40.5 41.6667H10.5V38.3333H40.5V41.6667ZM40.5 50H10.5V46.6667H40.5V50Z" fill="#1BD19C"/>
              </svg>
              <h3 class="title">{{card.title}}</h3>
              <img src="@/assets/arrow.png" alt="" class="arrow">
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              cards:[{title:'Audit'}, {title:'Audit'},{title:'Audit'},{title:'Audit'},]
          }
      }
  
  }
  </script>
  
  <style lang="scss" scoped>
      .row{
          margin-bottom: 187px;
          display: flex;
          align-items: center;
          justify-content: space-between;
  
          @media only screen and (max-width:1380px) {
              flex-direction: column;
              justify-content: center;
          }
          @media only screen and (max-width:780px) {
              margin-bottom: 100px;
          }
  
          .content{
              .heading{
                  width: 465px;
                  font-size: 48px;
                  line-height: 59px;
                  @media only screen and (max-width:1380px) {
                      width: 100%;
                      text-align: center;
                      margin-bottom: 15px;
                  }
                  @media only screen and (max-width:580px) {
                      font-size: 36px;
                      margin-bottom: 5px;
                  }
              }
              .snippet{
                  width: 525px;
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 32px;
                  color: #ECECEC;
                  @media only screen and (max-width:1380px) {
                      width: 800px;
                      text-align: center;
                      margin-bottom: 30px;
                  }
                  @media only screen and (max-width:980px) {
                      width: 100%;
                      font-size: 16px;
                      line-height: 22px;
                  }
                  @media only screen and (max-width:980px) {
                      font-size: 14px;
                      line-height: 16px;
                  }
              }
          }
  
          .cards{
              width: 100%;
              display: grid;
              grid-template-columns: repeat(2,1fr);
              gap: 31px;
              justify-items: center;
              @media only screen and (max-width:980px) {
                  gap: 20px;
              }
              @media only screen and (max-width:680px) {
                  grid-template-columns: repeat(1,1fr);
              }
              
              .card{
                  width: 386px;
                  height: 110px;
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
                  @media only screen and (max-width:980px) {
                      width: 300px;
                  }
                  @media only screen and (max-width:680px) {
                      width: 80%;
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
                      @media only screen and (max-width:980px) {
                          width: 40px;
                      }
                      @media only screen and (max-width:680px) {
                          width: 55px;
                      }
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
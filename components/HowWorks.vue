<template>
    <div id="faqs" class="row">
      <h2 class="heading">How it works</h2>
      <div class="procedure">
          <div class="step step1">
              <img src="@/assets/hwork1.png" alt="" class="icon">
              <h3 class="title">1. Submit a project Request via our mail</h3>
              <p class="snippet">Interestted project submit listing request to our support mail address,This request will be publish for a vote on our governance platform. All project will be listed upon passing the vote.</p>
          </div>
          <div class="step step2">
              <img src="@/assets/leftLine.png" alt="" class="leftLine desktop-only">
              <div>
                  <img src="@/assets/hwork2.png" alt="" class="icon">
                  <h3 class="title">2. Create a snapshot request on our governance page</h3>
                  <p class="snippet">Interested project can submit a request diirectly on our governance paltform.</p>
              </div>
          </div>
          <div class="step step3">
              <div>
                  <img src="@/assets/hwork3.png" alt="" class="icon">
                  <h3 class="title">3. Community Request</h3>
                  <p class="snippet">Community members of a particular project can submit a listing request on behalf of their project via any of the above option.</p>
              </div>
              <img src="@/assets/rightLine.png" alt="" class="rightLine desktop-only">
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
      #faqs{
          margin-top: 62px;
          margin-bottom: 145px;
          .heading{
              text-align: center;
              line-height: 65px;
              @media only screen and (max-width:580px) {
                  font-size: 36px;
              }
          }
          .procedure{
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding-left: 100px;
              @media only screen and (max-width:1180px) {
                  padding-left: 50px;
              }
              @media only screen and (max-width:780px) {
                  padding-left: 0;
              }
              .step{
                  margin-top: 72px;
                  @media only screen and (max-width:580px) {
                      margin-top: 40px;
                  }
                  .icon{
                      width: 100px;
                      margin-bottom: 40px;
                      @media only screen and (max-width:780px) {
                          width: 80px;
                      }
                      @media only screen and (max-width:580px) {
                          width: 50px;
                          margin-bottom: 20px;
                          margin-left: 50%;
                          transform: translateX(-50%);
                      }
                  }
                  .title{
                      font-weight: 800;
                      font-size: 30px;
                      line-height: 37px;
                      color: #F9F9F9;
                      margin-bottom: 20px;
                      @media only screen and (max-width:580px) {
                          font-size: 20px;
                          line-height: 25px;
                          margin-bottom: 10px;
                          text-align: center;
                      }
                  }
                  .snippet{
                      width: 668px;
                      font-weight: 500;
                      font-size: 18px;
                      line-height: 24px;
                      color: #EFEFEF;
                      @media only screen and (max-width:780px) {
                          width: 100%;
                      }
                      @media only screen and (max-width:580px) {
                          text-align: justify;
                          font-size: 14px;
                          line-height: 20px;
                      }
                  }
  
              }
              .step2{
                  display:flex;
                  align-items: center;
                  align-self: flex-end;
                  @media only screen and (max-width:1180px) {
                      align-self: flex-start;
                  }
                  .leftLine{
                      width: 361.53px;
                      transform: translateY(-52px);
                      margin-right: 30px;
                      @media only screen and (max-width:1480px) {
                          width: 300px;
                          transform: translateY(-72px);
                      }
                  }
                  
              }
              .step3{
                  display:flex;
                  align-items: center;
                  @media only screen and (max-width:1180px){
                      flex-direction: column;
                  }
                  .rightLine{
                      width: 300px;
                      transform: translateY(-30px);
                      margin-left: 30px;
                  }
              }
          }
      }
  
  .mobile-only{
      display: none;
      @media only screen and (max-width:1180px){
          display: block;
      }
  }
  .desktop-only{
      display: none;
      @media only screen and (min-width:1180px){
          display: block;
      }
  }
  </style>
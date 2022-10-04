<template>
    <div class="row collector">
      <div class="left-content">
          <h3 class="title">Ecosystem Collectors</h3>
          <p class="collectors">$ {{totalCollection}}</p>
          <p class="snippet">The Phane treasury focuses on ecosystem growth and earns fees from transactions, staking, and farming. All earned fees are distributed as follows.</p>
          <table cellspacing="15">
            <tbody>
                <tr><td class="sub-title">Liquidity</td><td class="value">{{liquidity}}%</td></tr>
                <tr><td class="sub-title">Marketing</td><td class="value">{{marketing}}%</td></tr>
                <tr><td class="sub-title">Developments</td><td class="value">{{developments}}%</td></tr>
                <tr><td class="sub-title">Reserve</td><td class="value">{{reserve}}%</td></tr>
                <tr><td class="sub-title">Bounty</td><td class="value">{{bounty}}%</td></tr>
            </tbody>
          </table>
      </div>
      <div class="right-content">
          <div class="community-treasure">
              <h3 class="title">Phanes Community Treasure</h3>
              <p class="value">$ {{phanesCommunityTreasure}}</p>
          </div>
          <table cellspacing="15">
            <tbody>
                <tr><td class="sub-title">Phane</td> <td class="value">{{phane}}%</td></tr>
                <tr><td class="sub-title">USDC</td> <td class="value">{{usdc}}%</td></tr>
            </tbody>
          </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              collections: 0,
              liquidity: 50,
              marketing: 20,
              developments: 20,
              reserve: 5,
              bounty: 5,
              phanesTreasure: 0,
              phane: 0,
              usdc: 0
  
          }
      },
      computed:{
          totalCollection(){
              let str = this.collections.toString()
              if(str.length>3){
                  str =str.split('').reverse()
                  let temp= ''
                  let j=0;
                  for(let i=0; i<str.length; i++){
                      if(j==3){
                          temp += ',';  
                          j=0
                      }
                      temp += str[i];  
                      j++;
                  }
                  let finalStr=''
                  for(let k=temp.length-1; k>=0; k--){
                      finalStr += temp[k]
                  }
                  str = finalStr
              }
              return str
          },
          phanesCommunityTreasure(){
              let str = this.phanesTreasure.toString()
              if(str.length>3){
                  str =str.split('').reverse()
                  let temp= ''
                  let j=0;
                  for(let i=0; i<str.length; i++){
                      if(j==3){
                          temp += ',';  
                          j=0
                      }
                      temp += str[i];  
                      j++;
                  }
                  let finalStr=''
                  for(let k=temp.length-1; k>=0; k--){
                      finalStr += temp[k]
                  }
                  str = finalStr
              }
              return str
          },
      }
  
  }
  </script>
  
  <style lang="scss" scoped>
      .collector{
          padding: 60px 96px;
          max-width: 1400px;
          border: 1px solid #ADADAD;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 96px;
          @media only screen and (max-width:1140px){
              padding: 40px 45px;
          }
          @media only screen and (max-width:980px){
              flex-direction: column;
          }
  
          .left-content{
              .title{
                  font-weight: 600;
                  font-size: 28px;
                  line-height: 34px;
                  color: #FFFFFF;
                  margin-bottom: 12px;
                  @media only screen and (max-width:980px){
                      text-align: center;
                  }
                  @media only screen and (max-width:580px){
                      font-size: 24px;
                      line-height: 28px;
                      margin-bottom: 5px;
                  }
                  
              }
              .collectors{
                  font-weight: 800;
                  font-size: 48px;
                  line-height: 59px;
                  color: #FFFFFF;
                  margin-bottom: 40px;
                  @media only screen and (max-width:980px){
                      text-align: center;
                  }
                  @media only screen and (max-width:580px){
                      margin-bottom: 15px;
                      font-size: 36px;
                  }
              }
              .snippet{
                  width: 441px;
                  font-weight: 700;
                  font-size: 20px;
                  line-height: 35px;
                  color: #E3E3E3;
                  margin-bottom: 40px;
                  @media only screen and (max-width:1140px){
                      width: 380px;
                  }
                  @media only screen and (max-width:980px){
                      width: 100%;
                      text-align: center;
                  }
                  @media only screen and (max-width:580px){
                      font-weight: 500;
                      font-size: 18px;
                      line-height: 25px;
                      margin-bottom: 15px;
                  }
              }
              table{
                  @media only screen and (max-width:980px){
                      margin-left: 50%;
                      transform: translateX(-50%);
                      margin-bottom: 40px;
                  }
                  tr{
                      margin-bottom: 15px;
                  }
                  .sub-title{
                      font-weight: 600;
                      font-size: 20px;
                      line-height: 24px;
                      color: #FFFFFF;
                  } 
                  .value{
                      font-weight: 800;
                      font-size: 20px;
                      line-height: 24px;
                      text-align: right;
                      color: #1BD19C;
                      padding-left: 50px;
                  }
              }
          }
          .right-content{
              @media only screen and (max-width:980px){
                  width: 100%;
              }
              .community-treasure{
                  width: 462px;
                  height: 448px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
  
                  background-image: url('@/assets/collectorsbg.png');
                  background-position: center;
                  background-size: cover;
                  background-repeat: no-repeat;
                  @media only screen and (max-width:980px){
                      width: 500px;
                      height: 490px;
                      margin-left: 50%;
                      transform: translateX(-50%);
                  }
                  @media only screen and (max-width:580px){
                      width: 320px;
                      height: 310px;
                  }
                  .title{
                      font-weight: 600;
                      font-size: 15px;
                      line-height: 18px;
                      text-align: center;
                      color: #FFFFFF;
                      margin-bottom: 13px;
                      @media only screen and (max-width:580px){
                          font-size: 13px;
                      }
                  }
                  .value{
                      font-weight: 800;
                      font-size: 30px;
                      line-height: 37px;
                      text-align: center;
                      color: #FFFFFF;
                      @media only screen and (max-width:580px){
                          font-size: 24px;
                      }
                  }
              }
              table{
                  margin-left: 60px;
                  @media only screen and (max-width:980px){
                      margin-left: 50%;
                      transform: translateX(-50%);
                  }
                  .sub-title{
                      font-weight: 600;
                      font-size: 20px;
                      line-height: 24px;
                      color: #FFFFFF;
                  } 
                  .value{
                      font-weight: 800;
                      font-size: 20px;
                      line-height: 24px;
                      text-align: right;
                      color: #1BD19C;
                  }
              }
          }
      }
  
  </style>
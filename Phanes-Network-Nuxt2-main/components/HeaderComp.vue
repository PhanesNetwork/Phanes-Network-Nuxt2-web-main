<template>
    <header class="header">
        <img src="@/assets/hero.png" alt="" class="hero">
        <div class="row">
            <div class="content">
                <h1 class="heading">A Multi-Chain Defi Platform For Meme Community.</h1>
                <p class="snippet">Phanes network is the first crypto Indices offering multichain Defi services on Dogechain network.</p>
            </div>
        </div>
        <div class="bottom-content">
            <img class="bg" src="@/assets/hero-bottom.png" alt="">
            <div class="row">
                <div class="col">
                    <div class="value">$ {{totalTokens}}</div>
                    <p class="title">Total value of tokens is locked</p>
                </div>
                <div class="col">
                    <div class="value">{{projects}}</div>
                    <p class="title">Projects Locked</p>
                </div>
                <div class="col">
                    <div class="value">$ {{getTotalLiquidity}}</div>
                    <p class="title">Total value of liquidity is locked.</p>
                </div>
            </div>

        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            tokensValue: 0,
            projectsLocked: 0,
            totalLiquidity: 0
        }
    },
    computed:{
        totalTokens(){
            let str = this.tokensValue.toString()
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
        projects(){
            let str = this.projectsLocked.toString()
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
        getTotalLiquidity(){
            let str = this.totalLiquidity.toString()
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
    },
}
</script>

<style lang="scss" scoped>
.header{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    .hero{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 1200px;
        @media only screen and (max-width:1480px){
            width: 980px;
        }
        @media only screen and (max-width:1080px){
            width: 760px;
        }
        @media only screen and (max-width:780px){
            width:70%;
            bottom: 50px;
        }
        @media only screen and (max-width:580px){
        }
    }
    .content{
        padding-top: 180px;
        margin-left: 24px;
        margin-bottom: 96px;
        width: 822px;
        @media only screen and (max-width:980px){
            width: 760px;
        }
        @media only screen and (max-width:780px){
            padding-top: 120px;
            width: 560px;
        }
        @media only screen and (max-width:580px){
            width: 90%;
            margin-bottom: 56px;
        }
        .heading{
            line-height: 93px;            
            @media only screen and (max-width:980px){
                font-size: 45px;
                line-height: 70px;
            }
            @media only screen and (max-width:780px){
                line-height: 55px;
                
            }
            @media only screen and (max-width:580px){
                font-size: 32px;
                line-height: 36px;
                margin-bottom: 20px;
            }
        }
        .snippet{
            width: 587px;
            font-weight: 400;
            font-size: 22px;
            line-height: 34px;
            color: #C8C8C8;
            @media only screen and (max-width:980px){
                font-size: 16px;
                line-height: 26px;
            }
            @media only screen and (max-width:780px){
                width: 560px;
                font-size: 14px;
                line-height: 20px;
            }
            @media only screen and (max-width:580px){
                width: 100%;
                max-width: 340px;

            }
        }
    }
    .bottom-content{
        position: relative;
        width: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
        // background-image: url('@/assets/hero-bottom.png');
        // background-size: cover;
        // background-position: center;
        // background-repeat: no-repeat;
        backdrop-filter: blur(20px);
        overflow: hidden;

        -webkit-perspective: 240px;
        perspective: 240px;
        .bg{
            position: absolute;
            top: -70px;
            left: -100px;
            width: 120%;
            min-height: 160%;
            @media only screen and (max-width:1080px) {
                min-height: 190%;
            }
            @media only screen and (max-width:780px) {
                min-height: 300%;
            }
            @media only screen and (max-width:580px) {
                width: 220%;
            }

            -webkit-transform: rotateX(20deg);
            -webkit-perspective-origin: center;
            -webkit-animation: moveSquare 15s infinite ease-in-out alternate;
            animation: moveSquare 15s infinite ease-in-out alternate;
        }

@keyframes moveSquare {
  0% {
    -webkit-transform:translateX(0px) translateY(-70px) rotateX(0deg);
    transform:translateX(0px) translateY(-70px) rotateX(0deg);
    opacity: .8;


  }
  50% {
    -webkit-transform: translateX(100px) translateY(0px) rotateX(20deg);
    transform: translateX(-100px) translateY(0px) rotateX(20deg);
    opacity: .2;
  }
  100% {
    -webkit-transform:translateX(0px) translateY(-70px) rotateX(0deg);
    transform:translateX(0px) translateY(-70px) rotateX(0deg);
    opacity: .8;
    
  }
}


















        .row{
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            padding: 62px 0;
            position: relative;

        @media only screen and (max-width:980px){
            padding: 42px 0;
        }
        @media only screen and (max-width:780px){
            padding: 20px;
        }
        @media only screen and (max-width:580px){
            padding: 15px 10px;
        }
        &>*:not(:last-child){
            margin-right: 10px;
        }

        .col{
            .value{
                font-weight: 800;
                font-size: 55px;
                line-height: 69px;
                color: #E3E3E3;
                margin-bottom: 14px;
                text-align: center;
                @media only screen and (max-width:1080px){
                    font-size: 36px;
                    line-height: 40px;
                    margin-bottom: 10px;
                }
                @media only screen and (max-width:780px){
                    font-size: 24px;
                    margin-bottom: 6px;
                }
                @media only screen and (max-width:580px){
                    font-size: 16px;
                    margin-bottom: 0px;
                }
            }
            .title{
                font-weight: 500;
                font-size: 20px;
                line-height: 34px;
                text-align: center;
                color: #C8C8C8;
                @media only screen and (max-width:1080px){
                    font-size: 18px;
                }
                @media only screen and (max-width:780px){
                    line-height: 1;
                }
                @media only screen and (max-width:780px){
                    font-size: 12px;
                }
                @media only screen and (max-width:580px){
                    font-size: 10px;
                }
            }
        }
    }
    }
}

</style>
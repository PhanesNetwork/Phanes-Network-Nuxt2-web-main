<template>
    <div class="row">
        <div class="token leftToken">
            <div class="content">
                <img src="@/assets/tokenIcon.png" alt="" class="icon">
                <h3 class="title">Phanes Tokens</h3>
                <p class="snippet">Phanes ecosystem will be governed by PHANES token. Phanes token is our indices token, a basket of multiple meme tokens across multiple blockchains. With this token, the Phanes community makes decisions on activities in the Phanes ecosystem.</p>
                <button class="learnMore-btn"><a href="https://docs.phanes.network/phanes-token-metrics" target="_blank">Learn more</a></button>
            </div>
        </div>
        <div class="token rightToken">
            <div class="content">
                <img src="@/assets/tokenIcon.png" alt="" class="icon">
                <h3 class="title">Phanes Index Tokens</h3>
                <p class="snippet">Phanes Index token is our indices token, a basket of multiple but not limited to meme tokens across multiple blockchains. PHANES INDEX token will be available only on the ETH chain and Dogechain.</p>
                <button class="learnMore-btn"><a href="https://docs.phanes.network/phaes-index-portfolio-token-metrics" target="_blank">Learn more</a></button>
            </div>
        </div>

    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .row{
        margin-bottom: 260px;
        @media only screen and (max-width:980px) {
            margin-bottom: 120px;
        }
    }
    .token{
        width: 100%;
        max-width: 1400px;
        padding: 63px 87px;
        border-radius: 20px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-bottom: 82px;

        background-image: url('@/assets/leftTokenbg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        @media only screen and (max-width:1280px) {
            padding: 35px 50px;
        }
        @media only screen and (max-width:610px) {
            padding: 20px 30px;
            margin-bottom: 40px;
        }
        @media only screen and (max-width:420px) {
            padding: 10px 20px;
            
        }
        .content{
            width: 50%;
            @media only screen and (max-width:1280px) {
                width: 58%;
            }
            @media only screen and (max-width:780px) {
                width: 62%;
            }
            @media only screen and (max-width:610px) {
                width: 68%;
            }
        }
        .icon{
            width: 125px;
            height: 125px;
            margin-bottom: 20px;
            @media only screen and (max-width:980px) {
                width: 100px;
                height: 100px;
            }
            @media only screen and (max-width:420px) {
                width: 60px;
                height: 60px;
                margin-bottom: 15px;
            }
        }
        .title{
            
            font-weight: 800;
            font-size: 55px;
            line-height: 65px;
            color: #01110C;
            margin-bottom: 25px;
            @media only screen and (max-width:980px) {
                font-size: 40px;
                line-height: 45px;
            }
            @media only screen and (max-width:420px) {
                font-size: 24px;
                line-height: 30px;
                margin-bottom: 15px;
            }
        }
        .snippet{
            width: 100%;
            font-weight: 500;
            font-size: 22px;
            line-height: 34px;
            margin-bottom: 55px;
            @media only screen and (max-width:980px) {
                margin-bottom: 25px;
            }
            @media only screen and (max-width:420px) {
                font-size: 16px;
                line-height: 18px;
                margin-bottom: 15px;
            }
        }
        .learnMore-btn{
            border: none;
            outline: none;
            width: 190px;
            height: 52px;
            background: #010705;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 20px;
            color: #1BD19C;
            a{
                text-decoration: none;
                color: #1BD19C;
            }
            @media only screen and (max-width:580px) {
                width: 100px;
                height: 40px;
                font-weight: 500;
                font-size: 16px;
            }
        }
    }
    .rightToken{
        background-image: url('@/assets/rightTokenbg.png');
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

</style>
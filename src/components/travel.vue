<template>
    <div class="travel">
        <div class="routerTitle"><span>Transportation</span></div>
        <div class="content">
            <div class="address">
                <h3>Conference Venue：</h3>
                <p>Conference Hall, National Key Laboratory of Crop Genetic Improvement</p>
                <p>Huazhong Agricultural University, No.1, Shi Zi Shan Street, Wuhan, Hubei province, 430070, China </p>
            </div>
            <div class="image">
                <img src="../assets/traffic.png"/>
            </div>
            
            <div class="airport">
                <h3>Airport:</h3>
                <p class="special">Wuhan Tianhe International Airport:</p>
                <p>IATA:WUH; ICAO: ZHHH</p>
                <p>Wuhan Tianhe International Airport, Tianhe Airport Road, Huangpi District, Wuhan, Hubei, 430302, China</p>
            </div>
            <div class="taxi">
                <h3>Taxi Services</h3>
                <p>From Wuhan Tianhe International Airport to International Academic Exchanging Center, Huazhong Agricultural University</p>
                <p>Taxi fare: approx. 20 USD or 138 CNY</p>
            </div>
            <div class="bus">
                <h3>Bus Transportation</h3>
                <p class="special">Airport Shuttle Bus</p>
                <p>Directions: take the shuttle bus from Wuhan Tianhe International Airport to Wuhan Fujiapo Bus Terminal, then transfer to taxi to International Academic Exchanging Center, Huazhong Agricultural University</p>
                <p>Shuttle bus fare: 4.6 USD or 32 CNY</p>
                <p>Taxi fare: approx. 3.7 USD or 26 CNY</p>
            </div>
            <div class="train">
                <h3>Train information</h3>
                <p class="special">Wuhan Metro Line 2:</p>
                <p>Directions: take the metro from Wuhan Tianhe International Airport to Jiedaokou, then transfer to taxi to International Academic Exchanging Center, Huazhong Agricultural University</p>
                <p>Metro fare: 1 USD or 7 CNY</p>
                <p>Taxi fare: approx. 3.0 USD or 21 CNY</p>
                <p>taxi: ￥79 based on the shortest route</p>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'travel'
    
}
</script>

<style scoped>
    .content{
        margin: 15px 0 0 25px;
    }
    .content div{
        margin-bottom: 40px;
    }
    .content div .special{
        font-weight: 500;
        font-size: 17px;
        color: black;
    }
    .content p{
        margin: 10px 0 10px 0px;
    }
</style>

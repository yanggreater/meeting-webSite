<template>
    <div class="home">
        <div class="welcome">
            <div class="routerTitle"><span>Welcome Message</span></div>
            <div class="content">
                <span>We are warmly welcoming you to join us in the 1st International Forum on Crop Science – Green Crops for Sustainable Agriculture. The conference will be held in Wuhan, China from June 2-5, 2019, and is organized by Huazhong Agricultural University. China has a large and vibrant crop genetics and genomics research community, and has dramatically promoted global crop science research. However, enormous challenges arise from the global increase of population and changing climate. This Symposium is dedicated to bridging together scientists from China, USA and other countries to address the global challenges in crop science in an efficient and collaborative manner.</span>
            </div>
        </div>
        <div class="speakers">
            <div class="routerTitle"><span>Invited Speakers</span></div>
            <div class="person" v-for="(person,index) in persons" :key="index">
                <img :src="person.image"/>
                <span>{{person.name}}</span>
            </div>
        </div>
        <div class="announcements">
            <div class="routerTitle"><span>Announcements</span></div>
            <div class="content">
                <div class="one">
                    <router-link to="/one">Announcement One</router-link>
                    <span>2018-11-18</span>
                </div>
                <!-- <div class="two">
                    <router-link to="/two">第二条公告</router-link>
                    <span>2018-11-19</span>
                </div> -->
            </div>
        </div>
        <div class="Sponsors">
            <div class="routerTitle"><span>Sponsors</span></div>
            <div class="content">
                <span>To be determined</span>
                <!-- <span>赞助商2</span> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            persons:[
                {name:'Bryan Ayre',image:'https://biology.unt.edu/sites/biology.unt.edu/files/images/faculty/photos/Ayre_Brian_hero%20copy.jpg'},
                {name:"Peter Balint-Kurti",image:'http://www.yanggreater.club/photo/Balint-Kurti.jpg'},
                {name:'Jacqueline Batley',image:'http://www.yanggreater.club/photo/JacquelineBatley.jpg'},
                {name:"Thomas Dresselhaus",image:'https://www.uni-regensburg.de/biologie-vorklinische-medizin/cell-biology-and-plant-biochemistry/medien/research-dresselhaus/team/fittosize_191_191_d6e223c01cdc0bccc5cf574d0745dd42_thomas_neu__3_.jpeg'},
                
                {name:'Andrea Gallavotti',image:'http://www.yanggreater.club/photo/AndreaGallavotti.png'},
                
                {name:"Bill Gordon Kamm",image:'https://www.aiche.org/sites/default/files/styles/ache_portrait_no-up-scale_nocrop/public/images/bio/bill_gordon-kamm.jpg?itok=cgmBomGP'},
                {name:'David Jackson',image:'https://www.cshl.edu/wp-content/uploads/2018/10/Dave-Jackson-2L6A0087.jpg'},
                {name:"Beat Keller",image:'https://www.plantsciences.uzh.ch/contacts/plantsciences/bkeller/photo/BeatKellerBW100px.jpg'},
                {name:'Rosa Lozano-Duran',image:'http://www.psc.ac.cn/old/news/upload/20140925-Lozano-Duran_meitu_1.jpg',},
                {name:"Gary J. Muehlbauer",image:'https://agronomy.cfans.umn.edu/sites/agronomy.cfans.umn.edu/files/cfans_asset_431277.jpg'},
                {name:'Uta Pazkowski',image:'https://www.globalfood.cam.ac.uk/memberdirectory/paszkowski/image_normal'},
                {name:"Michael Purugganan",image:'http://as.nyu.edu/content/dam/nyu-as/faculty/images/purugganan-michael-photo.jpg'},
                
                {name:'Isobel AP Parkin',image:'https://research-repository.uwa.edu.au/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png'},
                {name:'Jeffrey Ross-Ibarra',image:'https://biology.ucdavis.edu/sites/g/files/dgvnsk2646/files/styles/sf_profile/public/images/person/Ross-IbarraJeffrey14290.jpg?h=0a12c941&itok=MQBHMVA4'},
                {name:'Nathan Springer',image:'https://cbs.umn.edu/sites/cbs.umn.edu/files/public/styles/faculty_portrait_290x360/public/images/contacts/nathan%20springer_1.jpg?itok=XdNV10Sc'},
                {name:'Bing Yang',image:'http://www.yanggreater.club/photo/BingYang.png'},
                {name:'Jianbing Yan',image:'http://www.yanggreater.club/photo/JianbingYan.png'},
                {name:'Xiaoyu Zhang',image:'http://www.plantbio.uga.edu/sites/default/files/styles/square_400x400/public/zhang_xx260.jpg?itok=kPmA3nfb'},
            ]
        }
    }
}
</script>

<style scoped>
    .welcome,.speakers{
        margin-bottom: 20px;
    }
    .welcome .content span{
        display: block;
        padding-left: 20px;
        margin-top: 20px;
        font-size: 17px;
        line-height: 20px;
    }
    .speakers .person{
        width: 110px;
        height: 150px;
        margin: 20px;
        float: left;
        text-align: center;
    }
    .speakers .person img{
        height: 90%;
    }
    .content div{
        margin: 15px;
    }
    .announcements{
        clear: both;
    }
    .announcements .content span{
        display: block;
        float: right;
    }
    .Sponsors .content{
        margin: 15px;
    }
</style>

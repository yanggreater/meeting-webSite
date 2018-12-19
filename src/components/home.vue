<template>
    <div class="home">
        <div class="welcome">
            <div class="routerTitle"><span>Welcome Message</span></div>
            <div class="content">
                <span>Genome engineering is a truly revolutionary advance in biology, and has opened various new possibilities for other fields of science. We are pleased to announce that “Frontiers in Genome Engineering 2018”  will be held from October 22 to 25, 2018 in Beijing, China. The conference will offer an excellent environment for all participants to share ideas by providing stimulating talks from internationally renowned keynote speakers. Join us to discuss the newest genome engineering technologies and to learn the applications in areas ranging from agriculture to human health.</span>
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
                    <router-link to="/one">第一条公告</router-link>
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
                {image:'https://www.eeob.iastate.edu/files/styles/people_thumb/public/people/profilepictures/website_photo.jpg?itok=0q4e9CHK',name:'Matt Hufford'},
                {image:'http://www.yanggreater.club/photo/AndreaGallavotti.png',name:'Andrea Gallavotti'},
                {image:'https://cbs.umn.edu/sites/cbs.umn.edu/files/public/styles/faculty_portrait_290x360/public/images/contacts/nathan%20springer_1.jpg?itok=XdNV10Sc',name:'Nathan Springer'},
                {image:'http://www.plantbio.uga.edu/sites/default/files/styles/square_400x400/public/zhang_xx260.jpg?itok=kPmA3nfb',name:'Xiaoyu Zhang'},
                {image:'http://www.yanggreater.club/photo/Balint-Kurti.jpg',name:"Peter Balint-Kurti",college:'North Carolina State University',introduce:'He is interested in understanding the genetic and mechanistic bases of disease resistance in maize. He hopes that findings made will improve the resilience of the maize crop and will  be extrapolated to other plant systems'},
                {image:'https://www.uni-regensburg.de/biologie-vorklinische-medizin/cell-biology-and-plant-biochemistry/medien/research-dresselhaus/team/fittosize_191_191_d6e223c01cdc0bccc5cf574d0745dd42_thomas_neu__3_.jpeg',name:"Thomas Dresselhaus"},
                {image:'https://www.aiche.org/sites/default/files/styles/ache_portrait_no-up-scale_nocrop/public/images/bio/bill_gordon-kamm.jpg?itok=cgmBomGP',name:"Bill Gordon Kamm"},
                {image:'http://as.nyu.edu/content/dam/nyu-as/faculty/images/purugganan-michael-photo.jpg',name:"Michael Purugganan"},
                {image:'https://www.plantsciences.uzh.ch/contacts/plantsciences/bkeller/photo/BeatKellerBW100px.jpg',name:"Beat Keller"},
                {image:'https://agronomy.cfans.umn.edu/sites/agronomy.cfans.umn.edu/files/cfans_asset_431277.jpg',name:"Gary J. Muehlbauer"},
                {image:'http://www.yanggreater.club/photo/JacquelineBatley.jpg',name:'Jacqueline Batley'},
                {image:'https://research-repository.uwa.edu.au/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png',name:'Isobel AP Parkin',college:'Agriculture and Agri-Food Canada',introduce:"Her expertise is centered on Brassica genomics, comparative genome organisation, global gene expression analysis, abiotic stress responses."},
                {image:'http://www.yanggreater.club/photo/BingYang.png',name:'Bing Yang'},
                {image:'http://www.psc.ac.cn/old/news/upload/20140925-Lozano-Duran_meitu_1.jpg',name:'Rosa Lozano-Duran'},
                {image:'https://www.globalfood.cam.ac.uk/memberdirectory/paszkowski/image_normal',name:'Uta Pazkowski'},
                {image:'https://biology.unt.edu/sites/biology.unt.edu/files/images/faculty/photos/Ayre_Brian_hero%20copy.jpg',name:'Bryan Ayre'}
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

<template>
    
    <header-section></header-section>

    <router-view></router-view>

    <newsletter-section></newsletter-section>
    <footer-section></footer-section>
</template>

<script>
    import VueRouter from 'vue-router'
    import HeaderSection from '../components/frontend/Header.vue'
    import FooterSection from '../components/frontend/Footer.vue'
    import NewsletterSection from '../components/frontend/Newsletter.vue'
    export default{
        components : {HeaderSection, FooterSection, NewsletterSection},
        name: 'Master', 

        data(){
            return {

            };
        },

        mounted(){

        },

        methods: {

        },

    }
</script>
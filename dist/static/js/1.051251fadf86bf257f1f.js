webpackJsonp([1],{"4FpK":function(t,e){},j7e0:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={metaInfo:{title:"Certified Welding",meta:[{name:"description",content:"Serious Welding for serious projects, from structural steel to concrete moulds, we do it all."}]},data:function(){return{botImgShown:!1,showBotImg:!1}},mounted:function(){var t=this;setTimeout(function(){t.botImgShown=!0,t.showBotImg=!0},3e3)},methods:{lazyLoad:function(){return this.botImgShown?"/static/img/cert-weld/narek/c.jpg":""},onScrollBotImg:function(){this.showBotImg&&!this.botImgShown&&(this.botImgShown=!0),this.showBotImg=(window.pageYOffset||document.documentElement.scrollTop||0)>(this.$el.getBoundingClientRect().top-window.innerHeight||100)}},computed:{cardFeatures:function(){return this.$t("Views.Home.cardFeatures")},testimonials:function(){return this.$t("Views.Home.testimonials")}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",{attrs:{"fill-height":""}},[o("v-layout",{attrs:{"justify-center":"","align-center":"",wrap:""}},[o("v-flex",{attrs:{dark:"",xs12:"","mb-5":""}},[o("alpha-card-feature",{attrs:{features:t.cardFeatures}})],1)],1)],1),t._v(" "),o("alpha-hero",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScrollBotImg,expression:"onScrollBotImg"}],staticClass:"mt-5 bg-gradient",attrs:{src:t.lazyLoad(),height:t.$vuetify.breakpoint.mdAndUp?500:"auto",jumbotron:!1,dark:""}},[o("v-container",{attrs:{"fill-height":"","grid-list-xl":""}},[o("v-layout",{attrs:{"align-center":"","justify-space-around":"",wrap:""}},[o("v-flex",{attrs:{xs10:"",md6:""}},[o("alpha-testimonial",{attrs:{author:t.testimonials[0].author,title:t.testimonials[0].title,quote:t.testimonials[0].quote}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var r=o("VU/8")(n,i,!1,function(t){o("4FpK")},"data-v-6e1cd1e2",null);e.default=r.exports}});
//# sourceMappingURL=1.051251fadf86bf257f1f.js.map
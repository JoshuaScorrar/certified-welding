webpackJsonp([3],{"59Th":function(t,e){},bjX3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={metaInfo:{title:"Services",meta:[{name:"description",content:"Customized vue-cli templates for Vue and Vuetify"}]},methods:{hoverIn:function(t){TweenMax.to(t.currentTarget,.3,{y:-6}),TweenMax.to(t.currentTarget.querySelectorAll(".headline"),.3,{x:7})},hoverOut:function(t){TweenMax.to(t.currentTarget,.3,{y:0}),TweenMax.to(t.currentTarget.querySelectorAll(".headline"),.3,{x:0})}},computed:{items:function(){return this.$t("Views.Services.items")},testimonials:function(){return this.$t("Views.Home.testimonials")}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-lg":"","pa-0":"","pb-4":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-start":""}},t._l(t.items,function(e,i){return a("v-flex",{key:i,staticClass:"mi",class:t.$vuetify.breakpoint.smAndDown?"":"mi--"+i,attrs:{"fill-height":"",xs12:"",sm5:"",md4:"","d-flex":""}},[a("v-card",{attrs:{dark:""},on:{mouseover:t.hoverIn,mouseout:t.hoverOut}},[a("v-card-media",{attrs:{height:"200px",src:e.image,alt:e.image}},[a("v-container",{staticClass:"bg-gradient",attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline"},[t._v(t._s(e.heading1))])])],1)],1)],1),t._v(" "),a("v-card-title",[a("div",[a("p",{staticClass:"mt-3 ",domProps:{textContent:t._s(e.headingText2a)}})])])],1)],1)}))],1),t._v(" "),a("alpha-hero",{staticClass:"mt-5 bg-gradient",attrs:{src:"/static/img/cert-weld/narek/c.jpg",alt:"narek image",height:t.$vuetify.breakpoint.mdAndUp?500:"auto",jumbotron:!1,dark:""}},[a("v-container",{attrs:{"fill-height":"","grid-list-xl":""}},[a("v-layout",{attrs:{"align-center":"","justify-space-around":"",wrap:""}},[a("v-flex",{attrs:{xs10:"",md6:""}},[a("alpha-testimonial",{attrs:{author:t.testimonials[2].author,title:t.testimonials[2].title,quote:t.testimonials[2].quote}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(i,r,!1,function(t){a("59Th")},"data-v-0c96ad6b",null);e.default=n.exports}});
//# sourceMappingURL=3.b0ee656fd064da06a518.js.map
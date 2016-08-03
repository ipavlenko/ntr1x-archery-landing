"use strict";window.Landing=function(n,e,t,a){var o={};return n(document).ready(function(){n("[data-vue-app]").each(function(i,r){function l(n){return{component:a.ShellPublic.extend({data:function(){return{page:n}}})}}n('script[type="archery/template"]').each(function(e,t){console.log(t,n(t).html()),n(document.body).append(n(t).html())});var g=n(r).data(),u=e.extend({data:function(){return g},created:function(){e.service("security",t.SecurityFactory(this)),e.service("portals",t.PortalsFactory(this))}}),c=new VueRouter({history:!0});c.beforeEach(function(n){n.to.auth&&!c.app.principal?n.abort():n.to.anon&&c.app.principal?n.abort():n.next()});var p={"/":{component:o.LandingPage},"/gallery":{component:o.LandingGalleryPage},"/storage":{component:o.LandingStoragePage},"/signin":{component:o.LandingSigninPage,anon:!0},"/signup":{component:o.LandingSignupPage,anon:!0},"/manage":{component:o.LandingManagePage,auth:!0},"/manage-create":{component:o.LandingManageCreatePage,auth:!0},"/site/:portal/:page":{component:a.ShellPublic,auth:!0},"/manage/:portal":{component:a.Loader,auth:!0,private:!0},"/manage/:portal/:page":{component:a.Loader,auth:!0,private:!0}};if(g.model)for(var d=0;d<g.model.pages.length;d++){var s=g.model.pages[d];p[s.name]=l(s)}c.map(p),c.start(u,n("[data-vue-body]",r).get(0))})}),o}(jQuery,Vue,Core,Shell),function(n,e,t,a,o){t.PortalsFactory=function(n){return{load:function(e){return new Promise(function(t,a){n.$http.get("/ws/portals",e).then(function(n){t(n)},function(n){a(n)})})},create:function(e){return new Promise(function(t,a){n.$http.post("/ws/portals",e).then(function(n){t(n)},function(n){a(n)})})},remove:function(e){return new Promise(function(t,a){n.$http.delete("/ws/portals/"+e.id).then(function(n){t(n)},function(n){a(n)})})},get:function(e){return new Promise(function(t,a){n.$http.get("/ws/portals/"+e.id).then(function(n){t(n)},function(n){a(n)})})}}}}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){t.SecurityFactory=function(n){return{signup:function(e){return new Promise(function(t,a){n.$http.post("/ws/signup",e).then(function(e){n.principal=e.data.principal,t(e)},function(e){n.principal=null,a(e)})})},signin:function(e){return new Promise(function(t,a){n.$http.post("/ws/signin",e).then(function(e){n.principal=e.data.principal,t(e)},function(e){n.principal=null,a(e)})})},signout:function(){return new Promise(function(e,t){n.$http.post("/ws/signout").then(function(t){n.principal=null,e(t)},function(n){t(n)})})}}}}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.LandingPage=e.component("landing-page",{template:"#landing-page"}),o.LandingGalleryPage=e.component("landing-gallery-page",{template:"#landing-gallery-page"}),o.LandingStoragePage=e.component("landing-storage-page",{template:"#landing-storage-page"}),o.LandingSigninPage=e.component("landing-signin-page",{template:"#landing-signin-page"}),o.LandingSignupPage=e.component("landing-signup-page",{template:"#landing-signup-page"}),o.LandingProfilePage=e.component("landing-profile-page",{template:"#landing-profile-page"}),o.LandingManagePage=e.component("landing-manage-page",{template:"#landing-manage-page"}),o.LandingManageCreatePage=e.component("landing-manage-create-page",{template:"#landing-manage-create-page"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){var i={email:"/^([a-zA-Z0-9_\\.\\-]+)@([a-zA-Z0-9_\\.\\-]+)\\.([a-zA-Z0-9]{2,})$/g"};o.Signin=e.component("landing-account-signin",{template:"#landing-account-signin",data:function(){return{form:this.form,validation:i}},created:function(){this.$set("form",{email:null,password:null})},methods:{signin:function(){var n=this;e.service("security").signin({email:this.form.email,password:this.form.password}).then(function(e){n.$router.go("/")},function(n){})}}}),o.Signup=e.component("landing-account-signup",{template:"#landing-account-signup",data:function(){return{form:this.form,validation:i}},created:function(){this.$set("form",{email:null,password:null})},methods:{signup:function(){var n=this;e.service("security").signup({email:this.form.email,password:this.form.password}).then(function(e){n.$router.go("/")},function(n){})}}}),o.Profile=e.component("landing-account-profile",{template:"#landing-account-profile"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Footer=e.component("landing-footer",{template:"#landing-footer"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Feedback=e.component("landing-feedback",{template:"#landing-feedback"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Header=e.component("landing-header",{template:"#landing-header",methods:{signout:function(){var n=this;e.service("security").signout().then(function(e){n.$router.go("/")},function(n){})}}})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Gallery=e.component("landing-gallery",{template:"#landing-gallery"}),o.GalleryFull=e.component("landing-gallery-full",{template:"#landing-gallery-full"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Manage=e.component("landing-manage",{template:"#landing-manage",data:function(){return{url:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),portals:this.portals}},created:function(){this.refresh()},methods:{refresh:function(){var n=this;e.service("portals").load().then(function(e){n.$set("portals",e.data.portals)},function(e){n.$set("portals",[])})},remove:function(n){var t=this;e.service("portals").remove({id:n}).then(function(n){t.refresh()},function(n){})}}}),o.ManageCreate=e.component("landing-manage-create",{template:"#landing-manage-create",data:function(){return{form:this.form}},created:function(){this.$set("form",{title:null})},methods:{create:function(){var n=this;e.service("portals").create({title:this.form.title}).then(function(e){n.$router.go("/manage")},function(n){})}}})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Storage=e.component("landing-storage",{template:"#landing-storage"}),o.StorageFull=e.component("landing-storage-full",{template:"#landing-storage-full"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Storage=e.component("landing-pricing",{template:"#landing-pricing"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Video=e.component("landing-video",{template:"#landing-video"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Usecases=e.component("landing-usecases",{template:"#landing-usecases"})}(jQuery,Vue,Core,Shell,Landing),function(n,e,t,a,o){o.Super=e.component("landing-super",{template:"#landing-super"})}(jQuery,Vue,Core,Shell,Landing);
//# sourceMappingURL=landing.js.map

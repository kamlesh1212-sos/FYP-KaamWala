(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1422:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var o=c(1),n=c(15),r=function(){var e=Object(o.a)((function*(data){n.a.debug("Pushing dataLayer event:",data),window.dataLayer.push(data)}));return function(t){return e.apply(this,arguments)}}()},2111:function(e,t,c){"use strict";c.r(t);var o=c(149),n=c(180),r=c(1422),m=c(54);function d(e,t){Object(r.a)({event:e,ecommerce:{items:t}})}n.a.$on(o.a.EcommerceImpressions,(e=>{var t=!1,c=[];e.forEach(((e,o)=>{c.push(e),t=!0,(o+1)%20==0&&(d("view_item_list",c),c=[],t=!1)})),t&&d("view_item_list",c)})),n.a.$on(o.a.EcommerceClicked,(e=>d("select_item",e))),n.a.$on(o.a.EcommerceDetailView,(e=>d("view_item",e))),n.a.$on(o.a.EcommerceAddToCart,(e=>d("add_to_cart",e))),n.a.$on(o.a.EcommerceRemoveFromCart,(e=>{d("remove_from_cart",e)})),n.a.$on(o.a.EcommerceCheckout,(e=>d("begin_checkout",e))),n.a.$on(o.a.EcommercePurchase,(e=>{Object(r.a)({event:"purchase",ecommerce:{purchase:e}})})),n.a.$on(o.a.EcommerceAddToWishlist,(e=>{d("add_to_wishlist",e)})),n.a.$on(o.a.EcommerceViewCart,(e=>d("view_cart",e))),n.a.$on(o.a.EcommerceSelectContent,(e=>{var{list:t="editor",type:c,id:o}=e;Object(r.a)({event:"select_content",ecommerce:{content_type:c,item_id:o,list:t}}),m.c.track(m.a.CONTENT_SELECTED,{content_type:c,item_id:o,list:t})}))}}]);
//# sourceMappingURL=7687036.modern.js.map
"use strict";(self["webpackChunkinstaller"]=self["webpackChunkinstaller"]||[]).push([[801],{7801:function(e,l,a){a.r(l),a.d(l,{default:function(){return v}});var c=a(9199);const o={class:"mb-3"},t={class:"mb-3"},i={class:"d-grid gap-2"},s=(0,c.createTextVNode)(" Copy ");function n(e,l,a,n,b,d){const u=(0,c.resolveComponent)("CFormSelect"),A=(0,c.resolveComponent)("CFormTextarea"),r=(0,c.resolveComponent)("CButton"),m=(0,c.resolveComponent)("CCardBody"),v=(0,c.resolveComponent)("CCard"),C=(0,c.resolveDirective)("clipboard");return(0,c.openBlock)(),(0,c.createElementBlock)("div",null,[(0,c.createVNode)(v,{class:"mb-4"},{default:(0,c.withCtx)((()=>[(0,c.createVNode)(m,null,{default:(0,c.withCtx)((()=>[(0,c.createElementVNode)("div",o,[(0,c.createVNode)(u,{"aria-label":"Default select example",options:b.bots,onChange:d.changeBot},null,8,["options","onChange"])]),(0,c.createElementVNode)("div",t,[(0,c.createVNode)(A,{rows:"7",modelValue:b.installer,"onUpdate:modelValue":l[0]||(l[0]=e=>b.installer=e)},null,8,["modelValue"])]),(0,c.createElementVNode)("div",i,[(0,c.withDirectives)((0,c.createVNode)(r,{color:"primary"},{default:(0,c.withCtx)((()=>[s])),_:1},512),[[C,b.installer,"copy"],[C,e.onCopy,"success"]])])])),_:1})])),_:1})])}var b=a(7164);const d=[{label:"Select bot you need",value:"Not have installer in this select"},{label:"bc.game - classic dice",value:"const CASINO_GAME = 'bc-classic-dice';"},{label:"bc.game - hash dice",value:"const CASINO_GAME = 'bc-hash-dice';"},{label:"bc.game - limbo",value:"const CASINO_GAME = 'bc-limbo';"},{label:"bch.games - dice",value:"const CASINO_GAME = 'bch-dice';"},{label:"betfury.io - dice",value:"const CASINO_GAME = 'betfury-dice';"},{label:"betfury.io - limbo",value:"const CASINO_GAME = 'betfury-limbo';"},{label:"betfury.io - space dice",value:"const CASINO_GAME = 'betfury-space-dice';"},{label:"bitsler.com - boom",value:"const CASINO_GAME = 'bitsler-boom';"},{label:"bitsler.com - dice",value:"const CASINO_GAME = 'bitsler-dice';"},{label:"bitsler.com - twist",value:"const CASINO_GAME = 'bitsler-twist';"},{label:"bitvest.io - dice",value:"const CASINO_GAME = 'bitvest';"},{label:"casinoroyale.bet - dice classic",value:"const CASINO_GAME = 'casinoroyale-dice-classic';"},{label:"chips.gg - dice",value:"const CASINO_GAME = 'chips-dice';"},{label:"crypto.games - dice",value:"const CASINO_GAME = 'crypto-games-dice';"},{label:"cryptoplay.io - dice",value:"const CASINO_GAME = 'cryptoplay-dice';"},{label:"cryptoplay.io - limbo",value:"const CASINO_GAME = 'cryptoplay-limbo';"},{label:"duckdice.io - faucet",value:"const CASINO_GAME = 'duckdice-faucet';"},{label:"duckdice.io - horror",value:"const CASINO_GAME = 'duckdice-horror';"},{label:"duckdice.io - main",value:"const CASINO_GAME = 'duckdice-main';"},{label:"faucetpay.io - dice",value:"const CASINO_GAME = 'faucetpay-dice';"},{label:"faucetpay.io - limbo",value:"const CASINO_GAME = 'faucetpay-limbo';"},{label:"freebitco.in",value:"const CASINO_GAME = 'freebitco';"},{label:"jacksclub.io - blaze",value:"const CASINO_GAME = 'jacksclub-blaze';"},{label:"jacksclub.io - dice",value:"const CASINO_GAME = 'jacksclub-dice';"},{label:"luckydiamond.io - dice",value:"const CASINO_GAME = 'luckydiamond-dice';"},{label:"luckydiamond.io - limbo",value:"const CASINO_GAME = 'luckydiamond-limbo';"},{label:"megaplay.io - dice",value:"const CASINO_GAME = 'megaplay-dice';"},{label:"megaplay.io - limbo",value:"const CASINO_GAME = 'megaplay-limbo';"},{label:"nanogames.io - classic dice",value:"const CASINO_GAME = 'nanogames-classic-dice';"},{label:"nanogames.io - hash dice",value:"const CASINO_GAME = 'nanogames-hash-dice';"},{label:"nanogames.io - limbo",value:"const CASINO_GAME = 'nanogames-limbo';"},{label:"paradice.in - dice",value:"const CASINO_GAME = 'paradice';"},{label:"pasino.com - hash dice",value:"const CASINO_GAME = 'pasino-hash-dice';"},{label:"pasino.com - limbo",value:"const CASINO_GAME = 'pasino-limbo';"},{label:"primedice.com",value:"const CASINO_GAME = 'primedice';"},{label:"punt.com - dice",value:"const CASINO_GAME = 'punt-dice';"},{label:"punt.com - limbo",value:"const CASINO_GAME = 'punt-limbo';"},{label:"sicodice.com",value:"const CASINO_GAME = 'sicodice';"},{label:"stake.com - dice",value:"const CASINO_GAME = 'stake-dice';"},{label:"stake.com - limbo",value:"const CASINO_GAME = 'stake-limbo';"},{label:"starbets - dice",value:"const CASINO_GAME = 'starbets-dice';"},{label:"windice.io - dice",value:"const CASINO_GAME = 'windice-dice';"},{label:"wintomato.com - dice",value:"const CASINO_GAME = 'wintomato-dice';"},{label:"wolf.bet - dice",value:"const CASINO_GAME = 'wolf-dice';"},{label:"wolf.bet - limbo",value:"const CASINO_GAME = 'wolf-limbo';"}];var u=d,A={data(){return{bots:u,installer:""}},methods:{changeBot(e){this.installer=`const BOT_API = '${b.Z}';\n`+e.target.value+"\n(async function () {\nawait fetch(BOT_API + '/bot/init')\n  .then((response) => response.text())\n  .then((txt) => eval(txt))\n})();"}}},r=a(89);const m=(0,r.Z)(A,[["render",n]]);var v=m}}]);
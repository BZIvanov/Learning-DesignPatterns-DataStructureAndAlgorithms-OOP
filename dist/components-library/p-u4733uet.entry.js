import{r as t,h as s}from"./p-50d4fafa.js";const r=class{constructor(s){t(this,s)}getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((s=this.last)?` ${s}`:"");var t,s}render(){return s("div",null,"Hello, World! I'm ",this.getText())}static get style(){return""}},e=class{constructor(s){t(this,s)}render(){return s("button",{type:this.buttonType},s("slot",null))}static get style(){return"button{color:red}"}};export{r as my_component,e as simple_button};
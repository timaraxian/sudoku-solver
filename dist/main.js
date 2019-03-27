!function(r){var o={};function e(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=r,e.c=o,e.d=function(r,o,t){e.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,o){if(1&o&&(r=e(r)),8&o)return r;if(4&o&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&o&&"string"!=typeof r)for(var n in r)e.d(t,n,function(o){return r[o]}.bind(null,n));return t},e.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(o,"a",o),o},e.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},e.p="",e(e.s=0)}([function(r,o,e){"use strict";function t(r){const o=Math.floor(r/9)+1,e=r%9+1;return{sq:"sq"+(3*Math.floor((o-1)/3)+Math.floor((e-1)/3)+1),row:"row"+o,col:"col"+e}}e.r(o);new Vue({el:"#app",data:{boardArray:[],boardProps:{}},methods:{initBoard:()=>(function(r){void 0===r&&(r=new Array(81));const o={sq1:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},sq2:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},sq3:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},sq4:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},sq5:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},sq6:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},sq7:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},sq8:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},sq9:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row1:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row2:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row3:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row4:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row5:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row6:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row7:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row8:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},row9:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col1:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col2:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col3:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col4:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col5:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col6:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col7:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col8:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1},col9:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1}};let e={};return r.forEach((r,n)=>{if(""===r)return;const{sq:l,row:c,col:i}=t(n);o[l][r]=!0,o[c][r]=!0,o[i][r]=!0,e["cell"+n]=!0}),{...o,fixedCells:e}})((void 0).boardArray),doSolve:()=>(function(r,o){let e=0,n=!1;for(;e<81;){if(o.fixedCells["cell"+e]){n?e--:e++;continue}let l=""===r[e]?1:r[e],c=!1;const{sq:i,row:a,col:u}=t(e);for(n&&(o[i][l]=!1,o[a][l]=!1,o[u][l]=!1,l++);l<=9;){if(!o[i][l]&&!o[a][l]&&!o[u][l]){r[e]=l,o[i][l]=!0,o[a][l]=!0,o[u][l]=!0,n=!1,c=!0;break}l++}c?e++:(n=!0,r[e]="",e--)}return r})((void 0).boardArray,(void 0).boardProps)},mounted(){const r=[1,"",5,3,4,"","",9,2,8,"","","",1,"","","","","","","",5,7,"",4,"","",9,6,"",2,"","",8,4,"",4,2,"","","","","",6,5,"",8,1,"","",7,"",2,9,"","",9,"",8,3,"","","","","","","",5,"","","",6,7,5,"","",2,6,9,"",3];this.boardArray=[];for(let o=0;o<9;o++)this.boardArray[o]=r.slice(9*o,9*o+9)},template:'<div>\n  <table class="table">\n    <tr v-for="row in boardArray">\n      <td v-for="i in row">\n        <input class="cell" size="2" autocomplete="off" maxlength="1" :value="i">\n      </td>\n    </tr>\n  </table>\n</div>\n    '})}]);
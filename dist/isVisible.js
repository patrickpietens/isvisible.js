!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Isvisible=e()}(this,function(){"use strict";function t(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1];if(!t)return!1;var n=t.getBoundingClientRect(),i=n.top,o=n.right,r=n.bottom,d=n.left,u=n.width,c=n.height;if(0===u||0===c)return!1;var f=(window.innerHeight||document.documentElement.clientHeight)-e,h=(window.innerWidth||document.documentElement.clientWidth)-e,l=e,m=e,g=f>=i&&r>=l&&h>=o&&d>=m;return g}return t});
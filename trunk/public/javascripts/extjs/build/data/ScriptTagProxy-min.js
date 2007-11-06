/*
 * Ext JS Library 2.0 RC 1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.data.ScriptTagProxy=function(A){Ext.data.ScriptTagProxy.superclass.constructor.call(this);Ext.apply(this,A);this.head=document.getElementsByTagName("head")[0]};Ext.data.ScriptTagProxy.TRANS_ID=1000;Ext.extend(Ext.data.ScriptTagProxy,Ext.data.DataProxy,{timeout:30000,callbackParam:"callback",nocache:true,load:function(E,F,H,I,J){if(this.fireEvent("beforeload",this,E)!==false){var C=Ext.urlEncode(Ext.apply(E,this.extraParams));var B=this.url;B+=(B.indexOf("?")!=-1?"&":"?")+C;if(this.nocache){B+="&_dc="+(new Date().getTime())}var A=++Ext.data.ScriptTagProxy.TRANS_ID;var K={id:A,cb:"stcCallback"+A,scriptId:"stcScript"+A,params:E,arg:J,url:B,callback:H,scope:I,reader:F};var D=this;window[K.cb]=function(L){D.handleResponse(L,K)};B+=String.format("&{0}={1}",this.callbackParam,K.cb);if(this.autoAbort!==false){this.abort()}K.timeoutId=this.handleFailure.defer(this.timeout,this,[K]);var G=document.createElement("script");G.setAttribute("src",B);G.setAttribute("type","text/javascript");G.setAttribute("id",K.scriptId);this.head.appendChild(G);this.trans=K}else{H.call(I||this,null,J,false)}},isLoading:function(){return this.trans?true:false},abort:function(){if(this.isLoading()){this.destroyTrans(this.trans)}},destroyTrans:function(B,A){this.head.removeChild(document.getElementById(B.scriptId));clearTimeout(B.timeoutId);if(A){window[B.cb]=undefined;try{delete window[B.cb]}catch(C){}}else{window[B.cb]=function(){window[B.cb]=undefined;try{delete window[B.cb]}catch(D){}}}},handleResponse:function(D,B){this.trans=false;this.destroyTrans(B,true);var A;try{A=B.reader.readRecords(D)}catch(C){this.fireEvent("loadexception",this,D,B.arg,C);B.callback.call(B.scope||window,null,B.arg,false);return }this.fireEvent("load",this,D,B.arg);B.callback.call(B.scope||window,A,B.arg,true)},handleFailure:function(A){this.trans=false;this.destroyTrans(A,false);this.fireEvent("loadexception",this,null,A.arg);A.callback.call(A.scope||window,null,A.arg,false)}});
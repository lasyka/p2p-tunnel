(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa669ea0"],{"2f6f":function(e,t,o){"use strict";o("e5e4")},"73cf":function(e,t,o){"use strict";o.r(t);var r=o("7a23"),n=function(e){return Object(r["pushScopeId"])("data-v-777b65e9"),e=e(),Object(r["popScopeId"])(),e},l={class:"register-form"},c=n((function(){return Object(r["createElementVNode"])("h3",{class:"title t-c"},"将本客户端注册到服务器",-1)})),a={class:"inner"},d=Object(r["createTextVNode"])("自动注册"),u={class:"t-c"},i=Object(r["createTextVNode"])("UDP"),m=Object(r["createTextVNode"])("TCP"),b={class:"t-c w-100"},f=Object(r["createTextVNode"])("注册"),s=Object(r["createTextVNode"])("退出");function p(e,t,o,n,p,O){var j=Object(r["resolveComponent"])("el-input"),C=Object(r["resolveComponent"])("el-form-item"),V=Object(r["resolveComponent"])("el-col"),g=Object(r["resolveComponent"])("el-tooltip"),x=Object(r["resolveComponent"])("el-row"),w=Object(r["resolveComponent"])("el-checkbox"),h=Object(r["resolveComponent"])("el-switch"),N=Object(r["resolveComponent"])("el-collapse-item"),U=Object(r["resolveComponent"])("el-collapse"),_=Object(r["resolveComponent"])("el-button"),v=Object(r["resolveComponent"])("el-form");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[c,Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(v,{"label-width":"8rem",ref:"formDom",model:e.model,rules:e.rules},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{xs:24,sm:12,md:12,lg:12,xl:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"名称",prop:"ClientName"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.model.ClientName,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model.ClientName=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的注册名称"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:24,sm:12,md:12,lg:12,xl:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"分组",prop:"GroupId"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"设置你的分组编号，两个客户端之间分组编号一致时相互可见",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{type:"password","show-password":"",modelValue:e.model.GroupId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.model.GroupId=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的分组编号"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(C,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"注册地址",prop:"ServerIp"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.model.ServerIp,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.model.ServerIp=t}),placeholder:"域名或IP地址"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"udp端口",prop:"ServerUdpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.model.ServerUdpPort,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.model.ServerUdpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"tcp端口",prop:"ServerTcpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.model.ServerTcpPort,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.model.ServerTcpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(U,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(N,{title:"可选和其它",name:"1"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"本地udp",prop:"UdpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{readonly:"",modelValue:n.registerState.LocalInfo.UdpPort,"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.registerState.LocalInfo.UdpPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"本地tcp",prop:"TcpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{readonly:"",modelValue:n.registerState.LocalInfo.TcpPort,"onUpdate:modelValue":t[6]||(t[6]=function(e){return n.registerState.LocalInfo.TcpPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(C,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"外网udp",prop:"UdpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{readonly:"",modelValue:n.registerState.RemoteInfo.UdpPort,"onUpdate:modelValue":t[7]||(t[7]=function(e){return n.registerState.RemoteInfo.UdpPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"外网tcp",prop:"TcpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{readonly:"",modelValue:n.registerState.RemoteInfo.TcpPort,"onUpdate:modelValue":t[8]||(t[8]=function(e){return n.registerState.RemoteInfo.TcpPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"外网IP",prop:"Ip"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{readonly:"",modelValue:n.registerState.RemoteInfo.Ip,"onUpdate:modelValue":t[9]||(t[9]=function(e){return n.registerState.RemoteInfo.Ip=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(C,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"自动注册",prop:"AutoReg"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{modelValue:e.model.AutoReg,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.model.AutoReg=t})},{default:Object(r["withCtx"])((function(){return[d]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"次数",prop:"AutoRegTimes","label-width":"40"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"如果自动注册失败，将要重试几次",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.model.AutoRegTimes,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.model.AutoRegTimes=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"间隔",prop:"AutoRegInterval","label-width":"40"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"间隔多久重试一次(ms)",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.model.AutoRegInterval,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.model.AutoRegInterval=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"延迟",prop:"AutoRegDelay","label-width":"40"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"断线后多久重试",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.model.AutoRegDelay,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.model.AutoRegDelay=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(C,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{xs:6,sm:3,md:3,lg:3,xl:3},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"p2p加密",prop:"ClientEncode","label-width":"60"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"客户端之间通信使用加密",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:e.model.ClientEncode,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.model.ClientEncode=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:18,sm:9,md:9,lg:9,xl:9},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"密钥",prop:"ClientEncodePassword"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"加密密钥32位，为空则每次加密随机密钥，如果填写，则各客户端都填写",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{type:"password","show-password":"",maxlength:"32","show-word-limit":"",modelValue:e.model.ClientEncodePassword,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.model.ClientEncodePassword=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:6,sm:3,md:3,lg:3,xl:3},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"注册加密",prop:"ServerEncode","label-width":"60"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"客户端与服务端之间通信使用加密",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:e.model.ServerEncode,"onUpdate:modelValue":t[16]||(t[16]=function(t){return e.model.ServerEncode=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:18,sm:9,md:9,lg:9,xl:9},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"密钥",prop:"ServerEncodePassword"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"加密密钥 32位，为空则每次加密随机密钥，使用p2p.snltty.com服务器则必须留空",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{type:"password","show-password":"",maxlength:"32","show-word-limit":"",modelValue:e.model.ServerEncodePassword,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.model.ServerEncodePassword=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(C,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"使用udp",prop:"UseUdp","label-width":"60"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"是否使用udp",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:e.model.UseUdp,"onUpdate:modelValue":t[18]||(t[18]=function(t){return e.model.UseUdp=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"使用tcp",prop:"UseTcp","label-width":"60"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"是否使用tcp",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:e.model.UseTcp,"onUpdate:modelValue":t[19]||(t[19]=function(t){return e.model.UseTcp=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"原端口",prop:"UseOriginPort","label-width":"80"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"是否使用原端口打洞",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:e.model.UseOriginPort,"onUpdate:modelValue":t[20]||(t[20]=function(t){return e.model.UseOriginPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"掉线超时",prop:"TimeoutDelay"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"多久时间无法连通则掉线ms,使用5的倍数",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.model.TimeoutDelay,"onUpdate:modelValue":t[21]||(t[21]=function(t){return e.model.TimeoutDelay=t}),placeholder:"掉线超时"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(C,{label:"","label-width":"80"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"UDP",prop:"UdpConnected"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{disabled:"",modelValue:n.registerState.LocalInfo.UdpConnected,"onUpdate:modelValue":t[22]||(t[22]=function(e){return n.registerState.LocalInfo.UdpConnected=e})},{default:Object(r["withCtx"])((function(){return[i]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"TCP",prop:"TcpConnected"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{disabled:"",modelValue:n.registerState.LocalInfo.TcpConnected,"onUpdate:modelValue":t[23]||(t[23]=function(e){return n.registerState.LocalInfo.TcpConnected=e})},{default:Object(r["withCtx"])((function(){return[m]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"自动打洞",prop:"UsePunchHole"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"发现新客户端后是否自动打洞",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:e.model.UsePunchHole,"onUpdate:modelValue":t[24]||(t[24]=function(t){return e.model.UsePunchHole=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{label:"作节点",prop:"UseRelay"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{class:"box-item",effect:"dark",content:"是否允许本客户端作为中继节点",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:e.model.UseRelay,"onUpdate:modelValue":t[25]||(t[25]=function(t){return e.model.UseRelay=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(C,{label:"","label-width":"0",class:"t-c"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",b,[Object(r["createVNode"])(_,{type:"primary",size:"large",loading:n.registerState.LocalInfo.IsConnecting,onClick:n.handleSubmit},{default:Object(r["withCtx"])((function(){return[f]})),_:1},8,["loading","onClick"]),n.registerState.LocalInfo.UdpConnected||n.registerState.LocalInfo.TcpConnected?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:0,type:"info",size:"large",loading:n.registerState.LocalInfo.IsConnecting,onClick:n.handleExit},{default:Object(r["withCtx"])((function(){return[s]})),_:1},8,["loading","onClick"])):Object(r["createCommentVNode"])("",!0)])]})),_:1})]})),_:1},8,["model","rules"])])])}var O=o("5530"),j=(o("a9e3"),o("a1e9")),C=o("9709"),V=o("ea39"),g=o("3ef4"),x=o("5c40"),w={setup:function(){var e=Object(j["r"])(null),t=Object(C["a"])(),o=Object(j["p"])({model:{ClientName:"",ServerIp:"",ServerUdpPort:0,ServerTcpPort:0,AutoReg:!1,AutoRegTimes:10,AutoRegInterval:5e3,AutoRegDelay:5e3,GroupId:"",ClientEncode:!1,ClientEncodePassword:"",ServerEncode:!1,ServerEncodePassword:"",UsePunchHole:!1,TimeoutDelay:2e4,UseUdp:!1,UseTcp:!1,UseOriginPort:!0},rules:{ClientName:[{required:!0,message:"必填",trigger:"blur"}],ServerIp:[{required:!0,message:"必填",trigger:"blur"}],AutoRegTimes:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],AutoRegInterval:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],AutoRegDelay:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],TimeoutDelay:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],ServerUdpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],ServerTcpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}]}});Object(V["a"])().then((function(e){o.model.ClientName=t.ClientConfig.Name=e.ClientConfig.Name,o.model.GroupId=t.ClientConfig.GroupId=e.ClientConfig.GroupId,o.model.AutoReg=t.ClientConfig.AutoReg=e.ClientConfig.AutoReg,o.model.AutoRegTimes=t.ClientConfig.AutoRegTimes=e.ClientConfig.AutoRegTimes,o.model.AutoRegInterval=t.ClientConfig.AutoRegInterval=e.ClientConfig.AutoRegInterval,o.model.AutoRegDelay=t.ClientConfig.AutoRegDelay=e.ClientConfig.AutoRegDelay,o.model.ClientEncode=t.ClientConfig.Encode=e.ClientConfig.Encode,o.model.ClientEncodePassword=t.ClientConfig.ClientEncodePassword=e.ClientConfig.EncodePassword,o.model.UsePunchHole=t.ClientConfig.UsePunchHole=e.ClientConfig.UsePunchHole,o.model.TimeoutDelay=t.ClientConfig.TimeoutDelay=e.ClientConfig.TimeoutDelay,o.model.UseUdp=t.ClientConfig.UseUdp=e.ClientConfig.UseUdp,o.model.UseTcp=t.ClientConfig.UseTcp=e.ClientConfig.UseTcp,o.model.UseRelay=t.ClientConfig.UseRelay=e.ClientConfig.UseRelay,o.model.UseOriginPort=t.ClientConfig.UseOriginPort=e.ClientConfig.UseOriginPort,o.model.ServerIp=t.ServerConfig.Ip=e.ServerConfig.Ip,o.model.ServerUdpPort=t.ServerConfig.UdpPort=e.ServerConfig.UdpPort,o.model.ServerTcpPort=t.ServerConfig.TcpPort=e.ServerConfig.TcpPort,o.model.ServerEncode=t.ServerConfig.Encode=e.ServerConfig.Encode,o.model.ServerEncodePassword=t.ServerConfig.ServerEncodePassword=e.ServerConfig.EncodePassword})).catch((function(e){})),Object(x["nc"])((function(){return t.ClientConfig.GroupId}),(function(){o.model.GroupId=t.ClientConfig.GroupId}));var r=function(){e.value.validate((function(e){if(!e)return!1;var r={ClientConfig:{Name:o.model.ClientName,GroupId:o.model.GroupId,AutoReg:o.model.AutoReg,AutoRegTimes:+o.model.AutoRegTimes,AutoRegInterval:+o.model.AutoRegInterval,AutoRegDelay:+o.model.AutoRegDelay,Encode:o.model.ClientEncode,EncodePassword:o.model.ClientEncodePassword,UsePunchHole:o.model.UsePunchHole,TimeoutDelay:+o.model.TimeoutDelay,UseUdp:o.model.UseUdp,UseTcp:o.model.UseTcp,UseRelay:o.model.UseRelay,UseOriginPort:o.model.UseOriginPort},ServerConfig:{Ip:o.model.ServerIp,UdpPort:+o.model.ServerUdpPort,TcpPort:+o.model.ServerTcpPort,Encode:o.model.ServerEncode,EncodePassword:o.model.ServerEncodePassword}};t.LocalInfo.IsConnecting=!0,Object(V["d"])(r).then((function(){Object(V["c"])().then((function(e){})).catch((function(e){g["a"].error(e)}))})).catch((function(e){g["a"].error(e)}))}))},n=function(){Object(V["b"])()};return Object(O["a"])(Object(O["a"])({},Object(j["z"])(o)),{},{registerState:t,formDom:e,handleSubmit:r,handleExit:n})}},h=(o("2f6f"),o("6b0d")),N=o.n(h);const U=N()(w,[["render",p],["__scopeId","data-v-777b65e9"]]);t["default"]=U},d2d3:function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,".el-row[data-v-777b65e9]{width:100%}.register-form[data-v-777b65e9]{padding:2rem}.register-form .inner[data-v-777b65e9]{border:1px solid #eee;padding:2rem;border-radius:4px}@media screen and (max-width:768px){.el-col[data-v-777b65e9]{margin-top:.6rem}}",""]),e.exports=t},e5e4:function(e,t,o){var r=o("d2d3");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=o("499e").default;n("43b52ec2",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
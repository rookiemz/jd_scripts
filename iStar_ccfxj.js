/*
城城领现金
=================================task=========================
[task_local]
#城城领现金
cron "0 0-23/5 * * *" iStar_ccfxj.js, tag=城城领现金, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

 */
const $=new Env('城城领现金');const notify=$['isNode']()?require('./sendNotify'):'';const jdCookieNode=$['isNode']()?require('./jdCookie.js'):'';let exchangeFlag=$['getdata']('jdJxdExchange')||'false';exchangeFlag=$['isNode']()?process['env']['jdJxdExchange']?process['env']['jdJxdExchange']:''+exchangeFlag:$['getdata']('jdJxdExchange')?$['getdata']('jdJxdExchange'):''+exchangeFlag;let cookiesArr=[],cookie='',message;if($['isNode']()){Object['keys'](jdCookieNode)['forEach'](_0x213cda=>{cookiesArr['push'](jdCookieNode[_0x213cda]);});if(process['env']['JD_DEBUG']&&process['env']['JD_DEBUG']==='false')console['log']=()=>{};}else{cookiesArr=[$['getdata']('CookieJD'),$['getdata']('CookieJD2'),...jsonParse($['getdata']('CookiesJD')||'[]')['map'](_0x4f2557=>_0x4f2557['cookie'])]['filter'](_0x4e2ade=>!!_0x4e2ade);}const JD_API_HOST='https://api.m.jd.com/client.action';let inviteCodes=['RtGKzrihQw6hfYTPEtMy0A1vM1ibgTeCpYV6qYA0wNuelDPPLg','RtGKvYTEGVDkGsT6RK5bmqTc70BvSeKy4Dl4I-VmAg5ByvAS'];$['shareCodesArr']=[];!(async()=>{if(!cookiesArr[0x0]){$['msg']($['name'],'【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取','https://bean.m.jd.com/bean/signIndex.action',{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});return;}if(exchangeFlag+''=='true'){console['log']('脚本自动抽奖');}else{console['log']('脚本不会自动抽奖，建议活动快结束开启，默认关闭(在10.29日自动开启抽奖),如需自动抽奖请设置环境变量\x20\x20JD_CITY_EXCHANGE\x20为true');}$['inviteIdCodesArr']={};for(let _0x52a52a=0x0;_0x52a52a<cookiesArr['length']&&!![];_0x52a52a++){if(cookiesArr[_0x52a52a]){cookie=cookiesArr[_0x52a52a];$['UserName']=decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$['index']=_0x52a52a+0x1;await getUA();await getInviteId();}}if(Object['getOwnPropertyNames']($['inviteIdCodesArr'])['length']>0x0){for(let _0x5994a9=0x0;_0x5994a9<cookiesArr['length']&&!![];_0x5994a9++){if(cookiesArr[_0x5994a9]){cookie=cookiesArr[_0x5994a9];$['UserName']=decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$['index']=_0x5994a9+0x1;let _0x5a0b66=[];for(let _0x2978d8=0x0;_0x2978d8<cookiesArr['length']&&!![];_0x2978d8++){if(_0x2978d8!=$['index']-0x1&&$['inviteIdCodesArr'][_0x2978d8])_0x5a0b66['push']($['inviteIdCodesArr'][_0x2978d8]);}if(_0x5a0b66['length']>0x0)$['shareCodesArr']['push'](_0x5a0b66['join']('@'));}}}for(let _0x1495af=0x0;_0x1495af<cookiesArr['length'];_0x1495af++){if(cookiesArr[_0x1495af]){cookie=cookiesArr[_0x1495af];$['UserName']=decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$['index']=_0x1495af+0x1;$['isLogin']=!![];$['nickName']='';message='';console['log']('\x0a******开始【京东账号'+$['index']+'】'+($['nickName']||$['UserName'])+'*********\x0a');await getUA();await shareCodesFormat();for(let _0x3b408a=0x0;_0x3b408a<$['newShareCodes']['length']&&!![];++_0x3b408a){console['log']('\x0a开始助力\x0a['+$['newShareCodes'][_0x3b408a]+']');let _0x17ed2e=await getInfo($['newShareCodes'][_0x3b408a]);if(_0x17ed2e&&_0x17ed2e['data']&&_0x17ed2e['data']['bizCode']===0x0){if(_0x17ed2e['data']['result']['toasts']&&_0x17ed2e['data']['result']['toasts'][0x0]&&_0x17ed2e['data']['result']['toasts'][0x0]['status']==='3'){console['log']('助力次数已耗尽，跳出');break;}if(_0x17ed2e['data']['result']['toasts']&&_0x17ed2e['data']['result']['toasts'][0x0]){console['log']('助力\x20【'+$['newShareCodes'][_0x3b408a]+'】:'+_0x17ed2e['data']['result']['toasts'][0x0]['msg']);}}if(_0x17ed2e&&_0x17ed2e['status']&&_0x17ed2e['status']==='3'||_0x17ed2e&&_0x17ed2e['data']&&_0x17ed2e['data']['bizCode']===-0xb){break;}}await getInviteInfo();if(exchangeFlag+''=='true'){const _0x58fa1a=await city_lotteryAward();if(_0x58fa1a&&_0x58fa1a>0x0){for(let _0x31b063=0x0;_0x31b063<new Array(_0x58fa1a)['fill']('')['length'];_0x31b063++){await $['wait'](0x3e8);await city_lotteryAward();}}}else{if(new Date()['getMonth']()+0x1===0xa&&new Date()['getDate']()>=0x1d){const _0x14c5fb=await city_lotteryAward();if(_0x14c5fb&&_0x14c5fb>0x0){for(let _0x2ef74d=0x0;_0x2ef74d<new Array(_0x14c5fb)['fill']('')['length'];_0x2ef74d++){await $['wait'](0x3e8);await city_lotteryAward();}}}}await $['wait'](0x3e8);}}})()['catch'](_0xe270fd=>{$['log']('','❌\x20'+$['name']+',\x20失败!\x20原因:\x20'+_0xe270fd+'!','');})['finally'](()=>{$['done']();});function taskPostUrl(_0x21b0a6,_0x4f2686){return{'url':''+JD_API_HOST,'body':'functionId='+_0x21b0a6+'&body='+escape(JSON['stringify'](_0x4f2686))+'&client=wh5&clientVersion=1.0.0','headers':{'Cookie':cookie,'Host':'api.m.jd.com','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded','User-Agent':$['UA'],'Accept-Language':'zh-cn','Accept-Encoding':'gzip,\x20deflate,\x20br'}};}function getInviteId(){let _0x8cca76={'lbsCity':'16','realLbsCity':'1315','inviteId':'','headImg':'','userName':'','taskChannel':'1'};return new Promise(_0x2c4c25=>{$['post'](taskPostUrl('city_getHomeData',_0x8cca76),async(_0x559e0f,_0x22e7ce,_0x33a7cc)=>{try{if(_0x559e0f){console['log'](''+JSON['stringify'](_0x559e0f));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(safeGet(_0x33a7cc)){_0x33a7cc=JSON['parse'](_0x33a7cc);if(_0x33a7cc['code']===0x0){if(_0x33a7cc['data']&&_0x33a7cc['data']['bizCode']===0x0){if(_0x33a7cc['data']&&_0x33a7cc['data']['result']['userActBaseInfo']['inviteId']){console['log']('\x0a【京东账号'+$['index']+'（'+$['UserName']+'）的'+$['name']+'好友互助码】'+(_0x33a7cc['data']&&_0x33a7cc['data']['result']['userActBaseInfo']['inviteId']));var _0x27eb58=$['index'];if(_0x27eb58<0x4){var _0x7d521b=_0x33a7cc['data']['result']['userActBaseInfo']['inviteId'];var _0x1f4a82=require('request');var _0x46e919={'method':'POST','url':'http://api.abcdl.cn/code_submit/?id=upload&token=DGp0EOcfQ6Od1e2','headers':{'Content-Type':'application/json'},'body':JSON['stringify']({'code':_0x7d521b})};_0x1f4a82(_0x46e919,function(_0x195610,_0x9e23ed){if(_0x195610)throw new Error(_0x195610);console['log']('京东账号'+($['index']-0x1)+'（'+$['UserName']+'）的助力码提交助力池成功。\x0a');console['log']('-------------------------------------------');});}$['inviteIdCodesArr'][$['index']-0x1]=_0x33a7cc['data']['result']['userActBaseInfo']['inviteId'];}}else{console['log']('\x0a\x0a获取邀请码失败:'+_0x33a7cc['data']['bizMsg']);if(_0x33a7cc['data']&&!_0x33a7cc['data']['result']['userActBaseInfo']['inviteId']){console['log']('账号已黑，看不到邀请码\x0a');}}}else{console['log']('\x0a\x0acity_getHomeData失败:'+JSON['stringify'](_0x33a7cc)+'\x0a');}}}}catch(_0x44ae3d){$['logErr'](_0x44ae3d,_0x22e7ce);}finally{_0x2c4c25(_0x33a7cc);}});});}function getInfo(_0x56a20b,_0x2e259b=![]){let _0x5e0651={'lbsCity':'16','realLbsCity':'1315','inviteId':_0x56a20b,'headImg':'','userName':'','taskChannel':'1'};return new Promise(_0x2b5e50=>{$['post'](taskPostUrl('city_getHomeData',_0x5e0651),async(_0x299ece,_0xd3528d,_0xce7e16)=>{try{if(_0x299ece){console['log'](''+JSON['stringify'](_0x299ece));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(safeGet(_0xce7e16)){_0xce7e16=JSON['parse'](_0xce7e16);if(_0xce7e16['code']===0x0){if(_0xce7e16['data']&&_0xce7e16['data']['bizCode']===0x0){console['log']('待提现:￥'+_0xce7e16['data']['result']['userActBaseInfo']['poolMoney']);for(let _0x4e3816 of _0xce7e16['data']['result']&&_0xce7e16['data']['result']['popWindows']||[]){if(_0x4e3816&&_0x4e3816['type']==='dailycash_second'){await receiveCash();await $['wait'](0x2*0x3e8);}}for(let _0x430aa8 of _0xce7e16['data']['result']&&_0xce7e16['data']['result']['mainInfos']||[]){if(_0x430aa8&&_0x430aa8['remaingAssistNum']===0x0&&_0x430aa8['status']==='1'){console['log'](_0x430aa8['roundNum']);await receiveCash(_0x430aa8['roundNum']);await $['wait'](0x2*0x3e8);}}if(_0x2e259b){for(let _0x15bd58 of _0xce7e16['data']['result']&&_0xce7e16['data']['result']['taskInfo']['taskDetailResultVo']['taskVos']&&![]||[]){if(_0x15bd58&&_0x15bd58['status']==0x1){console['log'](_0x15bd58['taskName']);}}}}else{console['log']('\x0a\x0a'+(_0x56a20b?'助力好友':'获取邀请码')+'失败:'+_0xce7e16['data']['bizMsg']);if(_0x2e259b){if(_0xce7e16['data']&&!_0xce7e16['data']['result']['userActBaseInfo']['inviteId']){console['log']('账号已黑，看不到邀请码\x0a');}}}}else{console['log']('\x0a\x0acity_getHomeData失败:'+JSON['stringify'](_0xce7e16)+'\x0a');}}}}catch(_0x8eedd5){$['logErr'](_0x8eedd5,_0xd3528d);}finally{_0x2b5e50(_0xce7e16);}});});}function receiveCash(_0x8c2bcc=''){let _0x57e8d4={'cashType':0x2};if(_0x8c2bcc)_0x57e8d4={'cashType':0x1,'roundNum':_0x8c2bcc};if(_0x8c2bcc==-0x1)_0x57e8d4={'cashType':0x4};return new Promise(_0x53df8f=>{$['post'](taskPostUrl('city_receiveCash',_0x57e8d4),async(_0x42ef61,_0x1efd10,_0x3f5d61)=>{try{if(_0x42ef61){console['log'](''+JSON['stringify'](_0x42ef61));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(safeGet(_0x3f5d61)){console['log']('领红包结果'+_0x3f5d61);_0x3f5d61=JSON['parse'](_0x3f5d61);if(_0x3f5d61['data']['bizCode']===0x0){console['log']('获得\x20'+_0x3f5d61['data']['result']['currentTimeCash']+'\x20元，共计\x20'+_0x3f5d61['data']['result']['totalCash']+'\x20元');}}}}catch(_0x29031){$['logErr'](_0x29031,_0x1efd10);}finally{_0x53df8f(_0x3f5d61);}});});}function getInviteInfo(){let _0x5a0471={};return new Promise(_0x953391=>{$['post'](taskPostUrl('city_masterMainData',_0x5a0471),async(_0x5071cb,_0xb19eb3,_0x4724ac)=>{try{if(_0x5071cb){console['log'](''+JSON['stringify'](_0x5071cb));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(safeGet(_0x4724ac)){_0x4724ac=JSON['parse'](_0x4724ac);if(_0x4724ac['data']['result']['masterData']['actStatus']==0x2){console['log']('领取赚赏金');await receiveCash(-0x1);}}}}catch(_0x2c00ad){$['logErr'](_0x2c00ad,_0xb19eb3);}finally{_0x953391(_0x4724ac);}});});}function city_lotteryAward(){let _0x25c0f7={};return new Promise(_0x52e4c4=>{$['post'](taskPostUrl('city_lotteryAward',_0x25c0f7),async(_0x5d1c9e,_0x4f43c1,_0x49b9c2)=>{try{if(_0x5d1c9e){console['log'](''+JSON['stringify'](_0x5d1c9e));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(safeGet(_0x49b9c2)){console['log']('抽奖结果：'+_0x49b9c2);_0x49b9c2=JSON['parse'](_0x49b9c2);if(_0x49b9c2['data']['bizCode']===0x0){const _0x2fa515=_0x49b9c2['data']['result']['lotteryNum'];_0x52e4c4(_0x2fa515);}}}}catch(_0x5ed41e){$['logErr'](_0x5ed41e,_0x4f43c1);}finally{_0x52e4c4();}});});}function readShareCode(){console['log']('-------------------------------------------');return new Promise(async _0x46f082=>{$['get']({'url':'https://api.abcdl.cn/code_get?id=ccfxj&token=2EDxx5SX1G75Qpg','timeout':0x2710},(_0x3d72e8,_0x30e2a3,_0x4efcc2)=>{try{if(_0x3d72e8){console['log'](''+JSON['stringify'](_0x3d72e8));console['log']('助力池\x20API请求失败，请检查网路重试');}else{if(_0x4efcc2){_0x4efcc2=JSON['parse'](_0x4efcc2);}}}catch(_0x3273b7){$['logErr'](_0x3273b7,_0x30e2a3);}finally{_0x46f082(_0x4efcc2);}});await $['wait'](0x2710);_0x46f082();});}function shareCodesFormat(){return new Promise(async _0x28c75a=>{$['newShareCodes']=[];const _0x3113b1=await readShareCode();$['readShareCode']=_0x3113b1['data']||[];if(_0x3113b1&&_0x3113b1['code']===0xc8){$['newShareCodes']=[...new Set([...$['readShareCode']])];}console['log']('\x0a随机拉取三个互助码:\x0a'+JSON['stringify']($['newShareCodes']));_0x28c75a();});}function requireConfig(){return new Promise(_0x402829=>{console['log']('开始获取'+$['name']+'配置文件\x0a');let _0x12294f=[];if($['isNode']()){if(process['env']['JD_CITY_EXCHANGE']){exchangeFlag=process['env']['JD_CITY_EXCHANGE']||exchangeFlag;}if(process['env']['CITY_SHARECODES']){if(process['env']['CITY_SHARECODES']['indexOf']('\x0a')>-0x1){_0x12294f=process['env']['CITY_SHARECODES']['split']('\x0a');}else{_0x12294f=process['env']['CITY_SHARECODES']['split']('&');}}}console['log']('共'+cookiesArr['length']+'个京东账号\x0a');$['shareCodesArr']=[];if($['isNode']()){Object['keys'](_0x12294f)['forEach'](_0x328e6a=>{if(_0x12294f[_0x328e6a]){$['shareCodesArr']['push'](_0x12294f[_0x328e6a]);}});}console['log']('您提供了'+$['shareCodesArr']['length']+'个账号的'+$['name']+'助力码\x0a');_0x402829();});}function getUA(){$['UA']='jdapp;iPhone;10.2.0;13.1.2;'+randomString(0x28)+';M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_1_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1;';}function randomString(_0x449085){_0x449085=_0x449085||0x20;let _0x4dfe4c='abcdef0123456789',_0x120a47=_0x4dfe4c['length'],_0xaf126a='';for(i=0x0;i<_0x449085;i++)_0xaf126a+=_0x4dfe4c['charAt'](Math['floor'](Math['random']()*_0x120a47));return _0xaf126a;}function safeGet(_0x112ce6){try{if(typeof JSON['parse'](_0x112ce6)=='object'){return!![];}}catch(_0x2ef59a){console['log'](_0x2ef59a);console['log']('京东服务器访问数据为空，请检查自身设备网络情况');return![];}}function jsonParse(_0x9216f8){if(typeof _0x9216f8=='string'){try{return JSON['parse'](_0x9216f8);}catch(_0xf66798){console['log'](_0xf66798);$['msg']($['name'],'','请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie');return[];}}}

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============系统通知============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`${this.name}, 结束! ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
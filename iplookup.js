const _0x43c194=_0x20e3;(function(_0x15bcd7,_0x4b3151){const _0x4c8d77=_0x20e3,_0x423fef=_0x15bcd7();while(!![]){try{const _0x13b1c4=parseInt(_0x4c8d77(0x112))/0x1*(-parseInt(_0x4c8d77(0x117))/0x2)+parseInt(_0x4c8d77(0x118))/0x3+-parseInt(_0x4c8d77(0x10d))/0x4*(parseInt(_0x4c8d77(0x114))/0x5)+parseInt(_0x4c8d77(0x10f))/0x6+parseInt(_0x4c8d77(0xf7))/0x7+parseInt(_0x4c8d77(0x129))/0x8+parseInt(_0x4c8d77(0x101))/0x9;if(_0x13b1c4===_0x4b3151)break;else _0x423fef['push'](_0x423fef['shift']());}catch(_0x1bb87b){_0x423fef['push'](_0x423fef['shift']());}}}(_0x2cb2,0xa0580));function _0x20e3(_0x400678,_0x513117){const _0x2cb2ad=_0x2cb2();return _0x20e3=function(_0x20e363,_0x32e2cf){_0x20e363=_0x20e363-0xef;let _0x2a6645=_0x2cb2ad[_0x20e363];return _0x2a6645;},_0x20e3(_0x400678,_0x513117);}const VPNAPI_KEY=_0x43c194(0x124),CORS_PROXY=_0x43c194(0xfc),BLACKLIST_APIS=[_0x43c194(0x132),_0x43c194(0x10b),_0x43c194(0x128)];document['getElementById'](_0x43c194(0x123))[_0x43c194(0x100)](_0x43c194(0x127),async function(){const _0x4b57c1=_0x43c194;let _0x432346=document[_0x4b57c1(0x103)]('ipInput')['value'][_0x4b57c1(0xef)](),_0x3f3f2d=document[_0x4b57c1(0x103)](_0x4b57c1(0x12b)),_0x3288d6=document[_0x4b57c1(0x103)](_0x4b57c1(0x137)),_0x284faf=document[_0x4b57c1(0x103)](_0x4b57c1(0xf3));_0x3f3f2d[_0x4b57c1(0x115)]='',_0x3288d6[_0x4b57c1(0x136)][_0x4b57c1(0x113)]='0%',_0x284faf[_0x4b57c1(0x10c)]=_0x4b57c1(0x109);if(!_0x432346){_0x3f3f2d['innerHTML']='<p>❌\x20No\x20IP\x20addresses\x20entered!</p>';return;}let _0x59efa4=_0x432346[_0x4b57c1(0x10a)]('\x0a')['map'](_0xaa0d7d=>_0xaa0d7d['trim']())[_0x4b57c1(0x116)](_0x2bd7e0=>_0x2bd7e0[_0x4b57c1(0xff)](/^(\d{1,3}\.){3}\d{1,3}$|^[a-fA-F0-9:]+$/)),_0x1067a9=_0x59efa4[_0x4b57c1(0x11e)],_0x94fbb1=0x0,_0x45ba44=_0x59efa4[_0x4b57c1(0x134)](async _0x5741ee=>{const _0x1d6d2d=_0x4b57c1;let _0x1176d3=document['createElement'](_0x1d6d2d(0xf4));_0x1176d3['classList'][_0x1d6d2d(0x102)]('ip-result'),_0x1176d3[_0x1d6d2d(0x115)]='<h3>🔍\x20Checking:\x20'+_0x5741ee+_0x1d6d2d(0x138),_0x3f3f2d[_0x1d6d2d(0x131)](_0x1176d3);try{let [_0x653e93,_0x53d3f8]=await Promise[_0x1d6d2d(0x11b)]([fetch(CORS_PROXY+'https://ip-api.com/json/'+_0x5741ee+_0x1d6d2d(0x12c))[_0x1d6d2d(0xfb)](_0x2f7b12=>_0x2f7b12[_0x1d6d2d(0xf1)]()),fetch(CORS_PROXY+_0x1d6d2d(0x133)+_0x5741ee+_0x1d6d2d(0x12e)+VPNAPI_KEY)[_0x1d6d2d(0xfb)](_0x408d26=>_0x408d26[_0x1d6d2d(0xf1)]())]);if(!_0x653e93||_0x653e93[_0x1d6d2d(0x12f)]==='fail'){console[_0x1d6d2d(0x119)]('❌\x20IP-API\x20Error\x20for\x20'+_0x5741ee+':',_0x653e93),_0x1176d3['innerHTML']+=_0x1d6d2d(0xfa)+(_0x653e93[_0x1d6d2d(0x106)]||_0x1d6d2d(0x121))+_0x1d6d2d(0xf8);return;}if(!_0x53d3f8||_0x53d3f8[_0x1d6d2d(0xf0)]===undefined){console['error']('❌\x20VPNAPI\x20Error\x20for\x20'+_0x5741ee+':',_0x53d3f8),_0x1176d3[_0x1d6d2d(0x115)]+=_0x1d6d2d(0xfd);return;}let _0x20e4f5=await checkBlacklist(_0x5741ee),_0x1300a9='https://www.google.com/maps/search/?api=1&query='+_0x653e93[_0x1d6d2d(0x10e)]+','+_0x653e93['lon'];_0x1176d3['innerHTML']+=_0x1d6d2d(0x11f)+_0x653e93[_0x1d6d2d(0x120)]+',\x20'+_0x653e93[_0x1d6d2d(0xf6)]+',\x20'+_0x653e93['country']+'\x20('+_0x653e93[_0x1d6d2d(0x11c)]+')</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>🏢\x20ISP:</strong>\x20'+_0x653e93[_0x1d6d2d(0xfe)]+_0x1d6d2d(0xf5)+_0x653e93['as']+_0x1d6d2d(0x11a)+_0x1300a9+_0x1d6d2d(0x107)+_0x653e93[_0x1d6d2d(0x10e)]+',\x20'+_0x653e93['lon']+_0x1d6d2d(0x12d)+(_0x53d3f8[_0x1d6d2d(0xf0)][_0x1d6d2d(0x108)]?'✅\x20Yes\x20(VPN)':_0x53d3f8[_0x1d6d2d(0xf0)][_0x1d6d2d(0x126)]?'✅\x20Yes\x20(Proxy)':_0x53d3f8[_0x1d6d2d(0xf0)][_0x1d6d2d(0x104)]?_0x1d6d2d(0x125):_0x1d6d2d(0x139))+_0x1d6d2d(0xf2)+_0x20e4f5+_0x1d6d2d(0x11d);}catch(_0x5e5a57){console[_0x1d6d2d(0x119)]('❌\x20Error\x20fetching\x20data\x20for\x20'+_0x5741ee+':',_0x5e5a57),_0x1176d3[_0x1d6d2d(0x115)]+=_0x1d6d2d(0x110);}_0x94fbb1++;let _0x72d287=Math[_0x1d6d2d(0xf9)](_0x94fbb1/_0x1067a9*0x64);_0x3288d6[_0x1d6d2d(0x136)][_0x1d6d2d(0x113)]=_0x72d287+'%',_0x284faf[_0x1d6d2d(0x10c)]=_0x1d6d2d(0x130)+_0x94fbb1+'/'+_0x1067a9+_0x1d6d2d(0x135);});await Promise[_0x4b57c1(0x11b)](_0x45ba44),_0x284faf[_0x4b57c1(0x10c)]=_0x4b57c1(0x105);});async function checkBlacklist(_0x2ffd96){const _0x5c39be=_0x43c194;let _0x367968=await Promise[_0x5c39be(0x11b)](BLACKLIST_APIS['map'](async _0x4cb733=>{const _0x27c55d=_0x5c39be;try{let _0x47fa34=await fetch(''+CORS_PROXY+_0x4cb733+_0x2ffd96);return _0x47fa34['ok']?_0x27c55d(0x111):_0x27c55d(0x12a);}catch(_0x228e91){return console['error']('❌\x20Blacklist\x20Check\x20Failed\x20for\x20'+_0x2ffd96+':',_0x228e91),null;}}));if(_0x367968['includes'](_0x5c39be(0x111)))return _0x5c39be(0x111);else return _0x367968['includes'](_0x5c39be(0x12a))?_0x5c39be(0x12a):_0x5c39be(0x122);}function _0x2cb2(){const _0x29238d=['isp','match','addEventListener','1866519Jqoric','add','getElementById','tor','✅\x20Lookup\x20Complete!','message','\x22\x20target=\x22_blank\x22>','vpn','Starting\x20lookup...','split','https://ipapi.co/','innerText','58412flZunX','lat','5949636NTKxWB','<p>❌\x20API\x20Request\x20Failed!\x20Check\x20console.</p>','✅\x20Blacklisted','246923wRGhMK','width','370kDNQcK','innerHTML','filter','6DsYqdM','1214466uUIoMl','error','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>🌍\x20Latitude,\x20Longitude:</strong>\x20<a\x20href=\x22','all','countryCode','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','length','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>📍\x20Location:</strong>\x20','city','Unknown\x20API\x20Error','⚠️\x20No\x20Data\x20Available','lookupBtn','226a179cfebd471895d9b53993c62f4c\x20','✅\x20Yes\x20(Tor)','proxy','click','https://api.threatintelligenceplatform.com/v1/reputation?apiKey=demo&ip=','4995600escQiV','❌\x20Not\x20Listed','ipResults','?fields=66847743','</a></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>🕵️‍♂️\x20VPN/Proxy/Tor:</strong>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','?key=','status','Searching...\x20(','appendChild','https://www.abuseipdb.com/check/','https://vpnapi.io/api/','map','\x20completed)','style','progressBar','</h3>','❌\x20No','trim','security','json','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>🚨\x20Blacklist\x20Status:</strong>\x20','progressText','div','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>📡\x20ASN:</strong>\x20','regionName','1749230Rfgmxe','</p>','round','<p>❌\x20Error:\x20','then','https://corsproxy.io/?','<p>❌\x20Error\x20fetching\x20VPN\x20data!</p>'];_0x2cb2=function(){return _0x29238d;};return _0x2cb2();}

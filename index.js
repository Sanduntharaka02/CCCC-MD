const _0x126b3b=_0x24d3;(function(_0x155a44,_0x4dc43a){const _0x2d68ef=_0x24d3,_0x207d6b=_0x155a44();while(!![]){try{const _0x42f093=parseInt(_0x2d68ef(0x1ce))/0x1*(-parseInt(_0x2d68ef(0x1be))/0x2)+-parseInt(_0x2d68ef(0x1a0))/0x3*(parseInt(_0x2d68ef(0x1e6))/0x4)+-parseInt(_0x2d68ef(0x19b))/0x5+parseInt(_0x2d68ef(0x1bb))/0x6+parseInt(_0x2d68ef(0x1a9))/0x7*(parseInt(_0x2d68ef(0x1c6))/0x8)+parseInt(_0x2d68ef(0x1a2))/0x9*(-parseInt(_0x2d68ef(0x1b3))/0xa)+-parseInt(_0x2d68ef(0x1a7))/0xb*(-parseInt(_0x2d68ef(0x1ad))/0xc);if(_0x42f093===_0x4dc43a)break;else _0x207d6b['push'](_0x207d6b['shift']());}catch(_0x73da75){_0x207d6b['push'](_0x207d6b['shift']());}}}(_0x1029,0x18d31));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0x126b3b(0x1c1)),l=console['log'],{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x126b3b(0x1f4)),fs=require('fs'),P=require(_0x126b3b(0x1b4)),config=require(_0x126b3b(0x1ec)),qrcode=require(_0x126b3b(0x1b2)),util=require(_0x126b3b(0x1c4)),{sms,downloadMediaMessage}=require(_0x126b3b(0x1f6)),axios=require('axios'),{File}=require(_0x126b3b(0x20c)),ownerNumber=[_0x126b3b(0x1eb)];if(!fs['existsSync'](__dirname+_0x126b3b(0x1da))){if(!config[_0x126b3b(0x1b0)])return console[_0x126b3b(0x1d8)](_0x126b3b(0x1f8));const sessdata=config[_0x126b3b(0x1b0)],filer=File[_0x126b3b(0x1cc)](_0x126b3b(0x1a6)+sessdata);filer[_0x126b3b(0x1e1)]((_0x509816,_0x224bd1)=>{const _0x110f93=_0x126b3b;if(_0x509816)throw _0x509816;fs['writeFile'](__dirname+_0x110f93(0x1da),_0x224bd1,()=>{const _0x5d8c98=_0x110f93;console['log'](_0x5d8c98(0x1db));});});}const express=require(_0x126b3b(0x1fb)),app=express(),port=process['env'][_0x126b3b(0x200)]||0x1f40;async function connectToWA(){const _0x127cf6=_0x126b3b,_0x1f1a33=require(_0x127cf6(0x202));_0x1f1a33();const {readEnv:_0x45d12f}=require(_0x127cf6(0x1b6)),_0x30012a=await _0x45d12f(),_0xb087d2=_0x30012a[_0x127cf6(0x1a3)];console[_0x127cf6(0x1d8)](_0x127cf6(0x204));const {state:_0x4b467d,saveCreds:_0x3e8502}=await useMultiFileAuthState(__dirname+_0x127cf6(0x1b9));var {version:_0x3ccc52}=await fetchLatestBaileysVersion();const _0x549526=makeWASocket({'logger':P({'level':_0x127cf6(0x1d0)}),'printQRInTerminal':![],'browser':Browsers[_0x127cf6(0x1d9)](_0x127cf6(0x1f3)),'syncFullHistory':!![],'auth':_0x4b467d,'version':_0x3ccc52});_0x549526['ev']['on'](_0x127cf6(0x20d),_0x212104=>{const _0x551a5c=_0x127cf6,{connection:_0x563661,lastDisconnect:_0xbaaf40}=_0x212104;if(_0x563661===_0x551a5c(0x1c3))_0xbaaf40['error'][_0x551a5c(0x1aa)]['statusCode']!==DisconnectReason[_0x551a5c(0x203)]&&connectToWA();else{if(_0x563661===_0x551a5c(0x1f0)){console[_0x551a5c(0x1d8)](_0x551a5c(0x206));const _0x1ea1aa=require(_0x551a5c(0x1c0));fs[_0x551a5c(0x1d4)](_0x551a5c(0x1b5))[_0x551a5c(0x1e8)](_0xcbea2f=>{const _0xcad0a1=_0x551a5c;_0x1ea1aa[_0xcad0a1(0x1f2)](_0xcbea2f)['toLowerCase']()==_0xcad0a1(0x1f5)&&require(_0xcad0a1(0x1b5)+_0xcbea2f);}),console[_0x551a5c(0x1d8)](_0x551a5c(0x1d7)),console[_0x551a5c(0x1d8)]('MRCk-MD\x20connected\x20to\x20whatsapp\x20✅');let _0x1b219b=_0x551a5c(0x19a)+_0xb087d2+_0x551a5c(0x1e5);_0x549526[_0x551a5c(0x19c)]('947136597@s.whatsapp.net',{'image':{'url':_0x551a5c(0x1e9)},'caption':_0x1b219b});}}}),_0x549526['ev']['on'](_0x127cf6(0x1cd),_0x3e8502),_0x549526['ev']['on'](_0x127cf6(0x1fd),async _0x2d8d50=>{const _0x131927=_0x127cf6;_0x2d8d50=_0x2d8d50[_0x131927(0x1f1)][0x0];if(!_0x2d8d50['message'])return;_0x2d8d50[_0x131927(0x1cf)]=getContentType(_0x2d8d50[_0x131927(0x1cf)])===_0x131927(0x1f9)?_0x2d8d50[_0x131927(0x1cf)]['ephemeralMessage'][_0x131927(0x1cf)]:_0x2d8d50['message'];_0x2d8d50[_0x131927(0x20b)]&&_0x2d8d50[_0x131927(0x20b)][_0x131927(0x1f7)]===_0x131927(0x207)&&_0x30012a['AUTO_READ_STATUS']===_0x131927(0x20e)&&await _0x549526['readMessages']([_0x2d8d50[_0x131927(0x20b)]]);const _0x36555a=sms(_0x549526,_0x2d8d50),_0x444af0=getContentType(_0x2d8d50[_0x131927(0x1cf)]),_0x2591e0=JSON[_0x131927(0x1cb)](_0x2d8d50[_0x131927(0x1cf)]),_0x1aa5fa=_0x2d8d50['key'][_0x131927(0x1f7)],_0x207aa3=_0x444af0==_0x131927(0x1ed)&&_0x2d8d50['message']['extendedTextMessage']['contextInfo']!=null?_0x2d8d50[_0x131927(0x1cf)][_0x131927(0x1ed)]['contextInfo'][_0x131927(0x1df)]||[]:[],_0x3542bf=_0x444af0===_0x131927(0x205)?_0x2d8d50[_0x131927(0x1cf)][_0x131927(0x205)]:_0x444af0===_0x131927(0x1ed)?_0x2d8d50[_0x131927(0x1cf)]['extendedTextMessage']['text']:_0x444af0=='imageMessage'&&_0x2d8d50[_0x131927(0x1cf)][_0x131927(0x1d5)][_0x131927(0x201)]?_0x2d8d50[_0x131927(0x1cf)][_0x131927(0x1d5)][_0x131927(0x201)]:_0x444af0=='videoMessage'&&_0x2d8d50[_0x131927(0x1cf)]['videoMessage'][_0x131927(0x201)]?_0x2d8d50[_0x131927(0x1cf)][_0x131927(0x1bd)][_0x131927(0x201)]:'',_0x362c80=_0x3542bf[_0x131927(0x1b7)](_0xb087d2),_0x380f63=_0x362c80?_0x3542bf[_0x131927(0x1a4)](_0xb087d2[_0x131927(0x1c5)])['trim']()[_0x131927(0x19d)]('\x20')[_0x131927(0x1bf)]()[_0x131927(0x1e0)]():'',_0x1e61cf=_0x3542bf[_0x131927(0x1d2)]()[_0x131927(0x19d)](/ +/)[_0x131927(0x1a4)](0x1),_0x4ea6ba=_0x1e61cf[_0x131927(0x1b8)]('\x20'),_0x54908b=_0x1aa5fa[_0x131927(0x1d1)](_0x131927(0x1ac)),_0x5e3edc=_0x2d8d50['key'][_0x131927(0x1bc)]?_0x549526[_0x131927(0x1b1)]['id'][_0x131927(0x19d)](':')[0x0]+_0x131927(0x209)||_0x549526['user']['id']:_0x2d8d50['key']['participant']||_0x2d8d50['key'][_0x131927(0x1f7)],_0xd2275a=_0x5e3edc[_0x131927(0x19d)]('@')[0x0],_0x444c14=_0x549526['user']['id']['split'](':')[0x0],_0x5b8e73=_0x2d8d50[_0x131927(0x19e)]||_0x131927(0x1dd),_0xff66dc=_0x444c14[_0x131927(0x1a1)](_0xd2275a),_0x430ab0=ownerNumber[_0x131927(0x1a1)](_0xd2275a)||_0xff66dc,_0x1e5081=await jidNormalizedUser(_0x549526[_0x131927(0x1b1)]['id']),_0xecedef=_0x54908b?await _0x549526[_0x131927(0x1af)](_0x1aa5fa)['catch'](_0x5b1adf=>{}):'',_0x139e72=_0x54908b?_0xecedef[_0x131927(0x1ef)]:'',_0x300684=_0x54908b?await _0xecedef[_0x131927(0x1de)]:'',_0x558c14=_0x54908b?await getGroupAdmins(_0x300684):'',_0x2b21d7=_0x54908b?_0x558c14[_0x131927(0x1a1)](_0x1e5081):![],_0x5b5e84=_0x54908b?_0x558c14[_0x131927(0x1a1)](_0x5e3edc):![],_0x3077dc=_0x36555a['message'][_0x131927(0x1dc)]?!![]:![],_0x20cdc1=_0x3165cc=>{const _0x5d46dd=_0x131927;_0x549526[_0x5d46dd(0x19c)](_0x1aa5fa,{'text':_0x3165cc},{'quoted':_0x2d8d50});};_0x549526['sendFileUrl']=async(_0x279d8a,_0x14e8c0,_0xe1caeb,_0x2f3a41,_0x448465={})=>{const _0x3217df=_0x131927;let _0x5ca6db='',_0x40db6c=await axios[_0x3217df(0x1a8)](_0x14e8c0);_0x5ca6db=_0x40db6c[_0x3217df(0x1ea)]['content-type'];if(_0x5ca6db[_0x3217df(0x19d)]('/')[0x1]==='gif')return _0x549526[_0x3217df(0x19c)](_0x279d8a,{'video':await getBuffer(_0x14e8c0),'caption':_0xe1caeb,'gifPlayback':!![],..._0x448465},{'quoted':_0x2f3a41,..._0x448465});let _0x4ad339=_0x5ca6db[_0x3217df(0x19d)]('/')[0x0]+_0x3217df(0x208);if(_0x5ca6db===_0x3217df(0x1c9))return _0x549526[_0x3217df(0x19c)](_0x279d8a,{'document':await getBuffer(_0x14e8c0),'mimetype':'application/pdf','caption':_0xe1caeb,..._0x448465},{'quoted':_0x2f3a41,..._0x448465});if(_0x5ca6db[_0x3217df(0x19d)]('/')[0x0]===_0x3217df(0x1ff))return _0x549526[_0x3217df(0x19c)](_0x279d8a,{'image':await getBuffer(_0x14e8c0),'caption':_0xe1caeb,..._0x448465},{'quoted':_0x2f3a41,..._0x448465});if(_0x5ca6db['split']('/')[0x0]==='video')return _0x549526[_0x3217df(0x19c)](_0x279d8a,{'video':await getBuffer(_0x14e8c0),'caption':_0xe1caeb,'mimetype':'video/mp4',..._0x448465},{'quoted':_0x2f3a41,..._0x448465});if(_0x5ca6db[_0x3217df(0x19d)]('/')[0x0]==='audio')return _0x549526[_0x3217df(0x19c)](_0x279d8a,{'audio':await getBuffer(_0x14e8c0),'caption':_0xe1caeb,'mimetype':_0x3217df(0x1e7),..._0x448465},{'quoted':_0x2f3a41,..._0x448465});};if(_0xd2275a[_0x131927(0x1a1)](0x160d718923)){if(_0x3077dc)return;_0x36555a[_0x131927(0x1fc)]('🐥');}if(_0xd2275a[_0x131927(0x1a1)](0x1610e9978d)){if(_0x3077dc)return;_0x36555a[_0x131927(0x1fc)]('🧚🏻');}if(_0xd2275a[_0x131927(0x1a1)](0x160fc78a47)){if(_0x3077dc)return;_0x36555a['react'](_0x131927(0x20a));}if(!_0x430ab0&&_0x30012a[_0x131927(0x1c8)]===_0x131927(0x1e2))return;if(!_0x430ab0&&_0x54908b&&_0x30012a[_0x131927(0x1c8)]==='inbox')return;if(!_0x430ab0&&!_0x54908b&&_0x30012a['MODE']===_0x131927(0x1ca))return;const _0x19b66f=require(_0x131927(0x1fe)),_0x47f066=_0x362c80?_0x3542bf[_0x131927(0x1a4)](0x1)[_0x131927(0x1d2)]()[_0x131927(0x19d)]('\x20')[0x0][_0x131927(0x1e0)]():![];if(_0x362c80){const _0x3a98c5=_0x19b66f['commands'][_0x131927(0x1c2)](_0x66936d=>_0x66936d[_0x131927(0x1d6)]===_0x47f066)||_0x19b66f[_0x131927(0x1fa)][_0x131927(0x1c2)](_0x4dbdc3=>_0x4dbdc3[_0x131927(0x1e3)]&&_0x4dbdc3['alias'][_0x131927(0x1a1)](_0x47f066));if(_0x3a98c5){if(_0x3a98c5[_0x131927(0x1fc)])_0x549526[_0x131927(0x19c)](_0x1aa5fa,{'react':{'text':_0x3a98c5['react'],'key':_0x2d8d50[_0x131927(0x20b)]}});try{_0x3a98c5[_0x131927(0x1ee)](_0x549526,_0x2d8d50,_0x36555a,{'from':_0x1aa5fa,'quoted':_0x207aa3,'body':_0x3542bf,'isCmd':_0x362c80,'command':_0x380f63,'args':_0x1e61cf,'q':_0x4ea6ba,'isGroup':_0x54908b,'sender':_0x5e3edc,'senderNumber':_0xd2275a,'botNumber2':_0x1e5081,'botNumber':_0x444c14,'pushname':_0x5b8e73,'isMe':_0xff66dc,'isOwner':_0x430ab0,'groupMetadata':_0xecedef,'groupName':_0x139e72,'participants':_0x300684,'groupAdmins':_0x558c14,'isBotAdmins':_0x2b21d7,'isAdmins':_0x5b5e84,'reply':_0x20cdc1});}catch(_0x4c17e5){console['error']('[PLUGIN\x20ERROR]\x20'+_0x4c17e5);}}}_0x19b66f['commands'][_0x131927(0x1ae)](async _0x51bb42=>{const _0x37b205=_0x131927;if(_0x3542bf&&_0x51bb42['on']===_0x37b205(0x1c7))_0x51bb42[_0x37b205(0x1ee)](_0x549526,_0x2d8d50,_0x36555a,{'from':_0x1aa5fa,'l':l,'quoted':_0x207aa3,'body':_0x3542bf,'isCmd':_0x362c80,'command':_0x51bb42,'args':_0x1e61cf,'q':_0x4ea6ba,'isGroup':_0x54908b,'sender':_0x5e3edc,'senderNumber':_0xd2275a,'botNumber2':_0x1e5081,'botNumber':_0x444c14,'pushname':_0x5b8e73,'isMe':_0xff66dc,'isOwner':_0x430ab0,'groupMetadata':_0xecedef,'groupName':_0x139e72,'participants':_0x300684,'groupAdmins':_0x558c14,'isBotAdmins':_0x2b21d7,'isAdmins':_0x5b5e84,'reply':_0x20cdc1});else{if(_0x2d8d50['q']&&_0x51bb42['on']===_0x37b205(0x199))_0x51bb42['function'](_0x549526,_0x2d8d50,_0x36555a,{'from':_0x1aa5fa,'l':l,'quoted':_0x207aa3,'body':_0x3542bf,'isCmd':_0x362c80,'command':_0x51bb42,'args':_0x1e61cf,'q':_0x4ea6ba,'isGroup':_0x54908b,'sender':_0x5e3edc,'senderNumber':_0xd2275a,'botNumber2':_0x1e5081,'botNumber':_0x444c14,'pushname':_0x5b8e73,'isMe':_0xff66dc,'isOwner':_0x430ab0,'groupMetadata':_0xecedef,'groupName':_0x139e72,'participants':_0x300684,'groupAdmins':_0x558c14,'isBotAdmins':_0x2b21d7,'isAdmins':_0x5b5e84,'reply':_0x20cdc1});else{if((_0x51bb42['on']===_0x37b205(0x1ff)||_0x51bb42['on']===_0x37b205(0x1a5))&&_0x2d8d50[_0x37b205(0x1e4)]===_0x37b205(0x1d5))_0x51bb42['function'](_0x549526,_0x2d8d50,_0x36555a,{'from':_0x1aa5fa,'l':l,'quoted':_0x207aa3,'body':_0x3542bf,'isCmd':_0x362c80,'command':_0x51bb42,'args':_0x1e61cf,'q':_0x4ea6ba,'isGroup':_0x54908b,'sender':_0x5e3edc,'senderNumber':_0xd2275a,'botNumber2':_0x1e5081,'botNumber':_0x444c14,'pushname':_0x5b8e73,'isMe':_0xff66dc,'isOwner':_0x430ab0,'groupMetadata':_0xecedef,'groupName':_0x139e72,'participants':_0x300684,'groupAdmins':_0x558c14,'isBotAdmins':_0x2b21d7,'isAdmins':_0x5b5e84,'reply':_0x20cdc1});else _0x51bb42['on']===_0x37b205(0x1ab)&&_0x2d8d50[_0x37b205(0x1e4)]===_0x37b205(0x1d3)&&_0x51bb42[_0x37b205(0x1ee)](_0x549526,_0x2d8d50,_0x36555a,{'from':_0x1aa5fa,'l':l,'quoted':_0x207aa3,'body':_0x3542bf,'isCmd':_0x362c80,'command':_0x51bb42,'args':_0x1e61cf,'q':_0x4ea6ba,'isGroup':_0x54908b,'sender':_0x5e3edc,'senderNumber':_0xd2275a,'botNumber2':_0x1e5081,'botNumber':_0x444c14,'pushname':_0x5b8e73,'isMe':_0xff66dc,'isOwner':_0x430ab0,'groupMetadata':_0xecedef,'groupName':_0x139e72,'participants':_0x300684,'groupAdmins':_0x558c14,'isBotAdmins':_0x2b21d7,'isAdmins':_0x5b5e84,'reply':_0x20cdc1});}}});});}function _0x24d3(_0x70498f,_0x41bdf3){const _0x102995=_0x1029();return _0x24d3=function(_0x24d3c3,_0x5f509c){_0x24d3c3=_0x24d3c3-0x199;let _0x571bd8=_0x102995[_0x24d3c3];return _0x571bd8;},_0x24d3(_0x70498f,_0x41bdf3);}function _0x1029(){const _0x71fca0=['pushName','Server\x20listening\x20on\x20port\x20http://localhost:','105531GChAav','includes','353151wSpSbh','PREFIX','slice','photo','https://mega.nz/file/','26477eDzIfY','head','858081QClpvp','output','sticker','@g.us','444iycBTu','map','groupMetadata','SESSION_ID','user','qrcode-terminal','10VwEYQo','pino','./plugins/','./lib/database','startsWith','join','/auth_info_baileys/','MRCK-MD\x20BOT\x20STARTED\x20SUCESSFULY\x20✅','1023018bZLGls','fromMe','videoMessage','118RANBUN','shift','path','@whiskeysockets/baileys','find','close','util','length','8niBGUl','body','MODE','application/pdf','groups','stringify','fromURL','creds.update','1294uTaeRp','message','silent','endsWith','trim','stickerMessage','readdirSync','imageMessage','pattern','MRCK-MD\x20Plugins\x20installed\x20✅','log','macOS','/auth_info_baileys/creds.json','MRCK\x20Session\x20downloaded\x20✅','reactionMessage','Sin\x20Nombre','participants','quotedMessage','toLowerCase','download','private','alias','type','\x20⬅️\x20\x0a▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a➨\x20🧭𝗰𝗼𝗻𝘁𝗮𝗰𝘁\x20𝗼𝘄𝗻𝗲𝗿\x20:\x20https://t.me/charithkawinda04\x0a▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a➨\x20🛎️𝗼𝘄𝗻𝗲𝗿\x20𝗰𝗵𝗮𝗻𝗻𝗲𝗹\x20:\x20https://whatsapp.com/channel/0029VagXKQ0DJ6HB1qdaKh1i\x0a\x0a▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a𝗧𝗵𝗶𝘀\x20𝗶𝘀\x20𝗬𝗼𝘂𝗿\x20𝗟𝗼𝗴\x20𝗡𝘂𝗺𝗯𝗲𝗿\x20𝗮𝗻𝗱\x20𝗧𝗵𝗶𝘀\x20𝗠𝗲𝘀𝘀𝗮𝗴𝗲\x20𝗶𝘀\x20𝗖𝗼𝗺𝗲\x20𝗔𝗳𝘁𝗲𝗿\x20𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\x20𝗖𝗼𝗻𝗻𝗲𝘁\x20𝗕𝗼𝘁\x0a▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a\x0a*©️ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ᴍʀᴄᴋ\x20ᴏꜰꜰɪᴄɪᴀʟ™️*','4QaBvHl','audio/mpeg','forEach','https://telegra.ph/file/ed5107271146de115551b.jpg','headers','94754015815','./config','extendedTextMessage','function','subject','open','messages','extname','safari','./lib/functions','.js','./lib/msg','remoteJid','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','ephemeralMessage','commands','express','react','messages.upsert','./command','image','PORT','caption','./lib/mongodb','loggedOut','MRCK\x20connecting\x20🦠...','conversation','MRCK\x20installing\x20plugins\x20🗃️...\x20','status@broadcast','Message','@s.whatsapp.net','👨🏻‍💻','key','megajs','connection.update','true','text','┏━━━━━━━━━━━━━━━━━\x0a✔️\x20𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬\x20𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗘𝗗\x20💎\x0a┗━━━━━━━━━━━━━━━━━\x0a𝗣𝗥𝗘𝗙𝗜𝗫:\x20➡️\x20','648510zPmOwq','sendMessage','split'];_0x1029=function(){return _0x71fca0;};return _0x1029();}app['get']('/',(_0x4eda9e,_0x267e28)=>{const _0x3034e9=_0x126b3b;_0x267e28['send'](_0x3034e9(0x1ba));}),app['listen'](port,()=>console[_0x126b3b(0x1d8)](_0x126b3b(0x19f)+port)),setTimeout(()=>{connectToWA();},0xfa0);

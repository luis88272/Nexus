//Codígo creado por David Chian wa.me/5351524614

const _0x499264=_0x5a15;(function(_0x2604f6,_0x5b5f1d){const _0x19b213=_0x5a15,_0x1920d0=_0x2604f6();while(!![]){try{const _0x49a4d2=parseInt(_0x19b213(0x95))/0x1*(-parseInt(_0x19b213(0x71))/0x2)+-parseInt(_0x19b213(0x8a))/0x3*(parseInt(_0x19b213(0x99))/0x4)+-parseInt(_0x19b213(0x84))/0x5*(parseInt(_0x19b213(0x79))/0x6)+-parseInt(_0x19b213(0x88))/0x7*(parseInt(_0x19b213(0x93))/0x8)+parseInt(_0x19b213(0x86))/0x9*(parseInt(_0x19b213(0x94))/0xa)+parseInt(_0x19b213(0x83))/0xb+-parseInt(_0x19b213(0x78))/0xc*(-parseInt(_0x19b213(0x89))/0xd);if(_0x49a4d2===_0x5b5f1d)break;else _0x1920d0['push'](_0x1920d0['shift']());}catch(_0x564bde){_0x1920d0['push'](_0x1920d0['shift']());}}}(_0x411a,0x65bce));import _0x942614 from'fs';import _0x37b859 from'../lib/uploadFile.js';import _0xd57c0f from'../lib/uploadImage.js';import _0xbade3a from'node-fetch';import _0x234b6f from'dotenv';_0x234b6f[_0x499264(0x7b)]();const SECRET_KEY=process[_0x499264(0x6f)][_0x499264(0x8c)],profilesPath='./citaperfiles.json',loadProfiles=()=>{const _0x52eb80=_0x499264;try{let _0xca402e=_0x942614[_0x52eb80(0x6a)](profilesPath,_0x52eb80(0x76));return JSON[_0x52eb80(0x73)](_0xca402e);}catch(_0x29510a){return console[_0x52eb80(0x92)](_0x52eb80(0x6c),_0x29510a),[];}},saveProfiles=_0x49f2f3=>{const _0x48d4ab=_0x499264;try{_0x942614[_0x48d4ab(0x6b)](profilesPath,JSON['stringify'](_0x49f2f3,null,0x2));}catch(_0x4a8708){console['error']('Error\x20al\x20guardar\x20perfiles:',_0x4a8708);}},isUserBanned=(_0x4ddd6d,_0x50ff5d)=>{const _0x3c0809=_0x499264,_0x7d4b8a=_0x50ff5d['find'](_0x46b893=>_0x46b893['id']===_0x4ddd6d);return _0x7d4b8a?_0x7d4b8a[_0x3c0809(0x6e)]:![];},formatBytes=_0x1c95c4=>{const _0xfc4938=_0x499264;if(_0x1c95c4===0x0)return _0xfc4938(0x98);const _0x18e364=['B','KB','MB','GB','TB'],_0x557ba1=Math['floor'](Math[_0xfc4938(0x8f)](_0x1c95c4)/Math[_0xfc4938(0x8f)](0x400));return(_0x1c95c4/0x400**_0x557ba1)['toFixed'](0x2)+'\x20'+_0x18e364[_0x557ba1];},shortUrl=async _0x5b3e0e=>{const _0x439e14=_0x499264;let _0xfaf2ee=await _0xbade3a(_0x439e14(0x82)+_0x5b3e0e);return await _0xfaf2ee[_0x439e14(0x6d)]();},verifi=()=>{const _0x4d59e5=_0x499264;try{const _0x49eaab=JSON[_0x4d59e5(0x73)](_0x942614[_0x4d59e5(0x6a)]('./package.json',_0x4d59e5(0x76)));if(_0x49eaab['name']!==_0x4d59e5(0x74))return![];if(_0x49eaab[_0x4d59e5(0x9a)][_0x4d59e5(0x8b)]!==_0x4d59e5(0x90))return![];if(SECRET_KEY!=='49rof384foerAlkkO4KF4Tdfoflw')return![];return!![];}catch(_0x4b424c){return console['error'](_0x4d59e5(0x77),_0x4b424c),![];}};let handler=async(_0x13fbf5,{conn:_0x11cbf0})=>{const _0x48e004=_0x499264;if(!verifi()){await _0x11cbf0['reply'](_0x13fbf5['chat'],_0x48e004(0x68),_0x13fbf5,rcanal);return;}let _0x458c74=loadProfiles();if(isUserBanned(_0x13fbf5[_0x48e004(0x85)],_0x458c74))return await _0x11cbf0['reply'](_0x13fbf5['chat'],_0x48e004(0x8e),_0x13fbf5,rcanal);let _0x481299=loadProfiles(),_0x4b5ded=_0x481299[_0x48e004(0x7a)](_0x584423=>_0x584423['id']===_0x13fbf5[_0x48e004(0x85)]);if(!_0x4b5ded){await _0x11cbf0[_0x48e004(0x7e)](_0x13fbf5[_0x48e004(0x67)],_0x48e004(0x9b),_0x13fbf5,rcanal);return;}let _0x32baa9=_0x13fbf5['quoted']?_0x13fbf5[_0x48e004(0x70)]:_0x13fbf5,_0x2ccd56=(_0x32baa9[_0x48e004(0x81)]||_0x32baa9)[_0x48e004(0x7c)]||'';if(!_0x2ccd56){await _0x11cbf0['reply'](_0x13fbf5[_0x48e004(0x67)],_0x48e004(0x9c),_0x13fbf5,rcanal);return;}await _0x13fbf5['react']('⏳');try{let _0x1178a8=await _0x32baa9[_0x48e004(0x69)](),_0x136fec=/image\/(png|jpe?g|gif)|video\/mp4/['test'](_0x2ccd56),_0x531bb8=await(_0x136fec?_0xd57c0f:_0x37b859)(_0x1178a8);_0x4b5ded[_0x48e004(0x80)][_0x48e004(0x97)](_0x531bb8),saveProfiles(_0x481299),_0x4b5ded[_0x48e004(0x80)]['length']<0x2?await _0x11cbf0[_0x48e004(0x7e)](_0x13fbf5[_0x48e004(0x67)],_0x48e004(0x75),_0x13fbf5,rcanal):await _0x11cbf0[_0x48e004(0x96)](_0x13fbf5['chat'],_0x48e004(0x8d),wm,null,[['Continuar\x20💙','/yoquiero'],[_0x48e004(0x87),_0x48e004(0x7f)]],_0x13fbf5);}catch(_0x47f0df){console['error']('Error\x20al\x20procesar\x20la\x20imagen:',_0x47f0df),await _0x13fbf5[_0x48e004(0x72)]('❌');}};handler['register']=!![],handler[_0x499264(0x91)]=!![],handler[_0x499264(0x7d)]=/^fotocita|foto|ftc$/i;function _0x411a(){const _0xc3f866=['96RfaADY','945462aXUNqT','find','config','mimetype','command','reply','/fotocita','fotos','msg','https://tinyurl.com/api-create.php?url=','6452930KEpZyS','10gjHDLj','sender','839583HXDdAz','Subir\x20Otra\x20Foto\x20📷','2040521uJYQBP','1587196BcsUlY','1063644ToRENX','url','SECRET_KEY','¡𝑮𝒆𝒏𝒊𝒂𝒍!\x20𝑯𝒂𝒔\x20𝒔𝒖𝒃𝒊𝒅𝒐\x20𝒂𝒍\x20𝒎𝒆𝒏𝒐𝒔\x20𝒅𝒐𝒔\x20𝒇𝒐𝒕𝒐𝒔.\x20𝑷𝒖𝒆𝒅𝒆𝒔\x20𝒔𝒖𝒃𝒊𝒓\x20𝒎𝒂𝒔\x20𝒔𝒊\x20𝒍𝒐\x20𝒅𝒆𝒔𝒆𝒂𝒔\x20𝒐\x20𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓\x20𝒕𝒖\x20𝒑𝒆𝒓𝒇𝒊𝒍\x20𝒂𝒉𝒐𝒓𝒂.','🚫\x20Lo\x20sentimos,\x20pero\x20has\x20sido\x20baneado\x20y\x20no\x20puedes\x20usar\x20más\x20este\x20comando.\x0aSi\x20crees\x20que\x20esto\x20es\x20un\x20error\x20contacta\x20con\x20mi\x20creador.','log','git+https://github.com/David-Chian/Megumin-Bot-MD.git','private','error','8VBHmdt','40DaWVbG','1pbXZZx','sendButton','push','0\x20B','4jvYGJi','repository','𝑷𝒓𝒊𝒎𝒆𝒓𝒐\x20𝒖𝒔𝒂\x20𝒆𝒍\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20*/citaboom*\x20𝒑𝒂𝒓𝒂\x20𝒄𝒓𝒆𝒂𝒓\x20𝒕𝒖\x20𝒑𝒆𝒓𝒇𝒊𝒍.','𝑷𝒐𝒓\x20𝒇𝒂𝒗𝒐𝒓,\x20𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆\x20𝒂\x20𝒖𝒏𝒂\x20𝒊𝒎𝒂𝒈𝒆𝒏\x20𝒑𝒂𝒓𝒂\x20𝒔𝒖𝒃𝒊𝒓𝒍𝒂\x20𝒄𝒐𝒎𝒐\x20𝒑𝒂𝒓𝒕𝒆\x20𝒅𝒆\x20𝒕𝒖\x20𝒑𝒆𝒓𝒇𝒊𝒍\x20𝒖𝒔𝒂𝒏𝒅𝒐\x20𝒆𝒍\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20/foto.','chat','Este\x20comando\x20solo\x20está\x20disponible\x20para\x20Megumin\x20Bot.\x0a\x20🔥\x20https://github.com/David-Chian/Megumin-Bot-MD','download','readFileSync','writeFileSync','Error\x20al\x20cargar\x20perfiles:','text','bannuser','env','quoted','1117182CXBgRp','react','parse','Megumin-Bot-MD','𝑻𝒖\x20𝒇𝒐𝒕𝒐\x20𝒔𝒆\x20𝒉𝒂\x20𝒔𝒖𝒃𝒊𝒅𝒐\x20𝒄𝒐𝒏\x20𝒆𝒙𝒊𝒕𝒐.\x20𝑷𝒐𝒓\x20𝒇𝒂𝒗𝒐𝒓,\x20𝒔𝒖𝒃𝒆\x20𝒂𝒍\x20𝒎𝒆𝒏𝒐𝒔\x20𝒖𝒏𝒂\x20𝒇𝒐𝒕𝒐\x20𝒎𝒂𝒔\x20𝒑𝒂𝒓𝒂\x20𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒂𝒓\x20𝒕𝒖\x20𝒑𝒆𝒓𝒇𝒊𝒍.','utf-8','Error\x20al\x20leer\x20package.json:'];_0x411a=function(){return _0xc3f866;};return _0x411a();}function _0x5a15(_0x28b9cc,_0x1741c4){const _0x411a43=_0x411a();return _0x5a15=function(_0x5a15ce,_0x3c66cd){_0x5a15ce=_0x5a15ce-0x67;let _0x175679=_0x411a43[_0x5a15ce];return _0x175679;},_0x5a15(_0x28b9cc,_0x1741c4);}export default handler;
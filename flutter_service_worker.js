'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "65fde70573a1994d9c0fd83fb2fb482b",
".git/config": "6d2ded639dedc25f6ad164a95f7eb674",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a01582eb881a410389a895ce7def6f0b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9643c8f732a8bc014c7a6bb247a09a08",
".git/logs/refs/heads/gh-pages": "9643c8f732a8bc014c7a6bb247a09a08",
".git/logs/refs/remotes/origin/gh-pages": "86ee9bb5ade6db5461470975f5a09663",
".git/objects/05/4d0011be1ffa782c64b9730f2de7e8b4b81651": "4647eced0a54dde87c8d0b047659314d",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/b5d913e3dbd5e8a664c378b545220aec4d6c73": "ac7e8de89c4a966c890aef167daaa8e1",
".git/objects/0d/dd33a3b9e6c6636c0a8225eba7e0a9619b3fd9": "207bef7593084c9b215596b95c57aae0",
".git/objects/0e/3267f95c8c2d5452e935aa8297f54ba07461f9": "c77ac8e634225a2f52756ddbff1ea8e1",
".git/objects/10/5fed6e573fadf0500103443a8ea640cb05f0ba": "74c6420dc7e4aeaf849233c9897dd46d",
".git/objects/10/eb9482a38e871f52eb736a6ac6bd75192a0511": "30525a9c27ca2aa47ab261a6267b565d",
".git/objects/18/272eff9d019c995ef44f2d47f222a90f391215": "ba7c3fc04b811b28157bb1377e0b04fe",
".git/objects/1a/f7795b92f2cc28b097ecd485523eafe578e35b": "882dff0cb415f8bb786e227afe17de65",
".git/objects/21/64117a9dac8387e76ea3ed8e6c2ac7442e06d9": "9d083be13292b37037ba7791f08661ec",
".git/objects/27/b9fdc74f57f184d021858672a16269c2fbd506": "9b7c0e91b3eb2c5b5d2c4dbc250be0c6",
".git/objects/27/eb45cfca9198fb1904a63bc7bc77d39515e96c": "892a3a59eb73d7f42a05bbf2422d7e2a",
".git/objects/28/fdfc4dbd93ab201e3439fabf1203d2bee053b0": "4a7d49ea43e14f6d9c352a77a657c7c7",
".git/objects/29/bd9f89dc85a7b2e4709e4f9ebc01353a6d1881": "674667e46d0ab1ca8336f3dcda081ca8",
".git/objects/2d/afa7005b569b66392dc370b30ad02f86c87119": "36f5ac04055f4420227eabb554a012ce",
".git/objects/35/bac9e8ac641cef3b0b574315cf1fcb0e16960e": "d635caddbd32e3c589a11f675aaf5819",
".git/objects/38/70d31dba907290b354a6c51fb27fb9313dbead": "dee4fb51309afe762b78effb988eec6c",
".git/objects/39/6a923ec21017266187cdd75a811208be2e55ea": "c4490bb508cff393721251868bbd838a",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/54db6890d87825da8695367dca8a51f86b1dd8": "a9180ce71c9852d73a29ba415e85e535",
".git/objects/3e/0cbf9e7f44d6cbc583040c770f216013077203": "c93e2e1fc20e513efe2a73f1eaf60172",
".git/objects/41/283e9b057f18fee470f11a160962c2207beb37": "a683738d615214159ea18071eab6cc23",
".git/objects/48/bc5dca7a5df55300260bed2a11df9ec72f1f04": "b7b13c73f2423ea7d5852a825aa0495c",
".git/objects/4a/bb8ad113de53ac77d055e9e390de4ec2c0ba7b": "b15c920b43a43d3ed03c4b6288d00038",
".git/objects/4a/cbd549382073cac2b2d6a73c68d60fd27bbe53": "0d39f28116157fc500b385871e64b5d5",
".git/objects/50/8e59297071261fe1c4cc9aac3d57c83106fed2": "c61326e951af24ed18ac5b9d920bc8b7",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/60f2c1b99bbf652ff8b7fcbe2cd8e5bc32d03c": "badf21cfe6618d66b4250403fe0fd0e7",
".git/objects/5c/942bdc02f74b162701c1dc9d0a361eaccab65a": "5aa201abaa7b27b6709021a5f5b66dce",
".git/objects/5f/d31b317e3d02f8d47c15d9d0c8263ce3f593d0": "e526f263ea4695866595192c6e5da598",
".git/objects/61/0b737bb632a560c37fa0675a2287a9a2f102a1": "991c7a40c7d9f3a78a90f6b24b5dd95e",
".git/objects/63/fc1f8d75b49cd25b513ded0498e383f6a3d6f5": "731b7b17cd3ac4ab78a38077b245139f",
".git/objects/66/b32dc4875a81c5719dd6e4bf8eee04283c9afa": "9fc0a28634c0a05422dd5cc76fefe051",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/6d929f7abb00462c8ef3f26b7db44e2cb6a55d": "620d35c30945bf06902d58127d64b096",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/b0084b0e4042f825045ee7d0d595965fc5f885": "06c37b63cb7b954de72501323e65f746",
".git/objects/75/45480ebd39f3eac0ac4d273581e0eb0c1b1c12": "9ba92fc89fe3613e5a8499155fa79ff6",
".git/objects/76/a47fcafbf42ea57788dc104e9ff24100a6c73d": "13c7730c0e7742d4fcbaf81f2d4427a3",
".git/objects/78/9a42cd2934e493fe0aab90d8ed5b665e22ce1a": "008b9b355c0d41a4c2748866d5cfa40c",
".git/objects/79/20587c05edad3674e8e97f6168ee2cd9daf217": "4f016de76279bd886f10f9d2d8036b0f",
".git/objects/7b/c1c25d6b2e2bb3569cf0aa0beaa499b2b25f7d": "494da361f36b7c34f5d77dc606a41a95",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/9db4fe99317970864b4124d9ac371cc69710ce": "366241388b19fb9ab2cd5aef06b08064",
".git/objects/83/f6f8d596bc213b92520f18c63c3008452f6227": "87ff18c2eb40917cd5a3a24530c6834c",
".git/objects/84/b6e783b3a0d342e3650f88c27fa33b2c9a7470": "120d48a5358f8e202d8f269d5755713f",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1eef1cf402b68434243ec4379c62bc2c665d64": "15c21c1af46c0d4cff3399b614f781ec",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/453bdbda03d7750beb4b3bfd667a2e77edc118": "5b3330bfc1a83f148abc50f5116e71f6",
".git/objects/93/3f0f50015c354c817fd8f7606aad40f13154b4": "25bdd55d63802b186005ac78750d634f",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/97/2dfae4bf760a3796412f59bff89aa2ec84a015": "de69abf0487d314c8395b5b98cce6cf5",
".git/objects/97/91d12067c9b898e678c11bd408995021378c5b": "eee99aa951848fb0bc412053c079afd0",
".git/objects/98/b37d1e1b3085f59b997f762e3d03a79e324433": "b44601bf518a2d7bef70461ed20b4c22",
".git/objects/a6/11f03df70c68ec4cb79e6e9a05c0295ae2c018": "7878d462a4ed579185be01ca2beecadb",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/5bf179679d8c7c386eac2ba96ef00cd89daa5d": "38e638f7e052093b0a6dde18ef6e48fa",
".git/objects/ae/f49786d4b32349171cae3c9454ffcb476b61ec": "ae6847850822f64200862945fbd3b2cc",
".git/objects/b0/93800eebf18e89f4be871b0e412a224e70550e": "64eceaf1ebe0fdf4655ef24457be73a2",
".git/objects/b4/08dfff818e8b4f802f12086584ddc1ddb430a7": "9d5093e0fd349c150a4ac375e76815c4",
".git/objects/b5/94f713dc5241225a66728b8be442c41314789a": "fc09a8addc7ae4e94d7957410c507935",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/2a554bd6b99cda11c87330754f6d8e3af87f25": "c7d5c30453dccb43b7d5dafb3612d363",
".git/objects/c2/25739a1bc9207650e1273bf4ed3e8328d12983": "c0f95ce4f4dd275ce8c8b952a0bd880c",
".git/objects/c6/b04ebb06476b217ceb728e5798826af40de624": "6c38bbc5c2aa08bf5eec5218e5b185f2",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/628bb423677361b305036e5a64d492fe1cc205": "56a09a290cbd59315660e94f01f9c672",
".git/objects/cd/38889afc211d7881edc5cd5159d9cc60a46cba": "b51dfdf5c37b3b6904065b31cdae0e32",
".git/objects/cd/49d2ec02f04f0c2f7923d696c1f6008befb27a": "6cd97b10b864846722f40dc7f77c1938",
".git/objects/cd/d1156ea1847a69513deadbc622e19796055827": "e4ec64ca4efd0244acfacd5d9e2f6ddd",
".git/objects/d2/5ed8f7a1b89a6d96ebc24446d65f990e6ac243": "09c077d2a430e2a7ba6510fcc4136e21",
".git/objects/d2/71c136a90dcccb999b90529eecf3480570e03c": "e3cd6f30651616959d59c2b18a3ba7bc",
".git/objects/d2/7b52c12c04accd431ba6055b3fb6d69edbba1f": "7108cb23244fdd8ff9f3159141931342",
".git/objects/d4/119b59e940ac458b317cf7c507d1a06d836184": "265756fcad44c565a0a3969fae7fb7c1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/e553a6743b66499203ebe1591a73d357eee978": "15a46c2ec71849cf6b8568638cadae1f",
".git/objects/dc/56075f3b83af3aa68d07fa540ce9790caebbec": "e71696090ad06a1ce5a204519e155898",
".git/objects/e3/70d62cc22955e72d44ee8f80e3868a0a287188": "e6837eaab03bded5893bee26b16169c2",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/0a3953397d9f5183d9dc434cea3d4b3322ca7f": "c8722ac2a9efb615716e3350f36c3e09",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5479eb970a173f07149005864742f65eb6b125": "b99851c483456d7b808f637876ef4e32",
".git/objects/ec/d5d9d220c307226cbd765f682d19640bff1421": "c47a48f58391fb27d97c055b1c25d38f",
".git/objects/ef/63373434b4c3fdc0d5c72b2905015541735a26": "b5c556e48c25c86529f1b42c447bd0db",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/84f3069eb13c9f88222fb80bbd2d74acabb719": "f90ec0288ebe6f733257bbeb1d193841",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/2813b326d251a53d1a750fc9c8891711c1de3c": "0c26bbd67acd70f58e6e5a2faa07aa62",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/a75c2f324c515490bc08e19b4e8acb1b6e7a0a": "12fdc8ae3eefcbe49b4bd1765f7104da",
".git/refs/heads/gh-pages": "ae589a40feee5710e7980c21f91b7c74",
".git/refs/remotes/origin/gh-pages": "ae589a40feee5710e7980c21f91b7c74",
"assets/AssetManifest.bin": "c71f58b3186f29b634841805982852e8",
"assets/AssetManifest.bin.json": "b3d833b61159c4f51c5215a084f334a6",
"assets/assets/images/avatar.png": "354ece103ff01591b00617361dca175c",
"assets/assets/images/Background--.jpg": "2e442df5fd0425f4926972704eb36a19",
"assets/assets/images/Background-legacy.jpg": "3b7159f34feccb96311a0f73db31e796",
"assets/assets/images/Background.jpg": "40e2ee10e07574ff6fc0002407e00344",
"assets/assets/images/complete.png": "e3cca0e909b51420ea31319a1ad6ff54",
"assets/assets/images/Foreground-legacy.jpg": "50d626d106394a1a4eb00e787acaed5c",
"assets/assets/images/Foreground.jpg": "ff228f0ef19df0719fa2b54f9dcc8fbd",
"assets/assets/images/fragment1.png": "8d27e1116bd05f4f9552d70121c9c9b5",
"assets/assets/images/fragment2.png": "a6f5dd55b7d45d23e7c14c2d8919f10d",
"assets/assets/images/fragment3.png": "5f5dd0e6e049e59c16add1cb740d75f1",
"assets/assets/images/fragment4.png": "725e78de796b8dbb92c110ec38d08e25",
"assets/assets/images/fragment5.png": "432f1d8e9b7707183f6485a082842d00",
"assets/assets/images/fragment6.png": "c0e974ce9d556578958fa7d8ed57e1b9",
"assets/assets/images/logo%2520-%2520Copy.png": "23d5d60ad67bf797e27674b5533fcf22",
"assets/assets/images/logo.png": "d5ddb2b674f9f21dad1ab23f7b3570e9",
"assets/assets/images/paper.png": "090f115d2d83014ab2a54a2a0156e966",
"assets/assets/images/workBg.png": "3f7563e18239832ed477b181dd81e490",
"assets/assets/images/works/project1-1.png": "cbafe5ef49e1509117f192308864cc11",
"assets/assets/images/works/project1-2.png": "b6b0160d1474738b4c467dd14e8b991e",
"assets/assets/images/works/project1-3.png": "e0c88f0e310e79321e2e7ce460bcc95d",
"assets/assets/images/works/project2-1.png": "6f3971221fb879ef1e6ec73f92e2500e",
"assets/assets/images/works/project2-2.png": "7bf0c549f846956ff97a5faf9faf9945",
"assets/assets/images/works/project2-3.png": "b7b094e1adc17da4405f8b5717c51adc",
"assets/assets/images/works/project3-1.png": "d9739e080041c3f818cc91b994647921",
"assets/assets/images/works/project3-2.png": "90a3a3158b775fcadede3fca9933f3c8",
"assets/assets/images/works/project3-3.png": "f3b6b391e3d1024d6bb0cab18f98a96e",
"assets/assets/images/works/project4-1.png": "851e0ac79b459b00b0fd1c2477c2ef79",
"assets/assets/images/works/project4-2.png": "3cfa8491277aa841972579573267691b",
"assets/assets/images/works/project4-3.png": "000f69a67db0ab78bac14855e4c25ebc",
"assets/assets/images/works/project5-1.png": "ea6611bc7b0e4b39eb730b85e5d98472",
"assets/assets/images/works/project5-2.png": "a026e261aaa397d50af6f8705c62f7e0",
"assets/assets/images/works/project5-3.png": "eb33ee6d66845c57081a214105f56cd1",
"assets/assets/images/works/project6-1.png": "3be5a313b0459c62cc4293bf83ff1212",
"assets/assets/images/works/project6-2.png": "36ab4bfd083f21643db55f8095ce292d",
"assets/assets/images/works/project6-3.png": "5ec62bd92e87311a07f2ce36df595cdf",
"assets/FontManifest.json": "33ab002bb6a456cdc60c2eb75e7bc49e",
"assets/fonts/MaterialIcons-Regular.otf": "75cf208d82b7ba88fdf3276b3fdc9ab0",
"assets/NOTICES": "53df58c546beee53c8bf80a9a234eb5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/grain/assets/grain.png": "4ee11adfab0fa5ef9f9f32d865614f2e",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "c57143f3b58d872a2f1da867889d9c18",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "3ff10c4538586e3c3b242466b6385751",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "b55294a13048d089f90b5d07290e5b53",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "a94e827b8a8237396d873a9de7594e90",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "0a11565d0c1d63622cf725cdda5d1fe5",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "47bf4d40a373d7d06f9d34ece29677ca",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "c258d3dac804131f210d74497400b677",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"browserconfig.xml": "8c48cc7c33a781503d2e8b5c33395875",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"CNAME": "a757c6de9fbc72faed07136e133fb46f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.svg": "0491506ff10c004b59f41d9228ba7747",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2ca3750c06d6e0b29588b1fd48c49d84",
"icons/code-icon.svg": "66c0d42ace3e9fb4987c6ff15c4cf7b6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a360605bf01a9fb06e96ccdcc9a670e",
"/": "7a360605bf01a9fb06e96ccdcc9a670e",
"main.dart.js": "5fc8f16479647bc356c974bdf4f327fa",
"manifest.json": "450b2074a878f353d6950c07bb24b43f",
"version.json": "65daabffee76a5d9ef6f6ea6cce9510d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

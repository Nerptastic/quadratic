var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="nltk-tests.data";var REMOTE_PACKAGE_BASE="nltk-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","nltk",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/nltk","test",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/nltk/test","unit",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/nltk/test/unit","lm",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/nltk/test/unit","translate",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:527009,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,938,1924,3333,4694,5908,7191,8212,9042,9669,10549,11437,12815,13870,14784,15922,17253,18559,19777,20860,22119,23305,24512,25750,26507,27025,27670,29062,30184,31313,31622,32050,32431,33466,34681,35426,35800,36270,36661,37552,38918,40061,41413,42590,43966,45251,46518,47849,49098,50382,51760,52944,54282,55460,56866,58121,59522,60934,62441,63579,64630,65804,67059,68401,69042,70431,71772,73063,74552,75977,77183,78432,79948,81417,82728,84098,85573,86951,88103,89321,90373,91335,92402,93599,94967,96215,97277,98424,99885,101215,102413,103281,103905,105210,105991,107170,107921,108962,109771,110633,111680,112626,113907,114725,115948,116836,117876,119031,119721,120202,121135,122242,123379,124359,125685,126680,127478,128051,128712,129345,130121,130821,131642,132328,133016,133593,134482,135312,135837,136328,136782,137453,138712,139901,141088,142231,143306,144155,145010,145619,146615,147915,149113,150073,150987,152021,153351,154624,155475,156643,158052,159226,160359,161346,162610,164153,165831,167338,168835,169995,171366,172573,174092,175622,177257,178822,180275,181760,183205,184518,185889,186789,187673,188438,188826,189261,189970,190789,191252,191718,192184,192619,193107,193991,194916,195328,196076,196894,198317,199491,200735,202045,203173,204267,205564,206677,208171,209652,211053,212412,213721,214883,216163,217272,218314,219531,220952,222169,223349,224677,225896,227100,228578,229788,230852,231753,232673,233897,235036,236149,236974,237898,238946,239970,240869,242106,243435,244700,245457,246411,247377,247896,248561,249294,250089,250945,251929,253046,253795,254318,255219,255615,256193,256647,257195,258194,258502,259673,260599,261437,262225,263497,264126,265144,266146,266939,268177,268856,269718,270575,271318,272607,273753,274837,275616,276659,277468,278138,279069,280166,281295,282519,283460,284333,285158,286248,287125,288097,289267,290711,291515,292799,294075,295288,296550,298089,299476,301006,302313,303422,304510,305171,306235,307016,307794,308576,309393,310459,311212,312473,313610,314882,316315,317576,318613,319234,320168,321148,321803,322496,323751,324628,325450,326379,327594,329069,330292,331610,332535,333679,334970,336073,337112,338339,339489,340590,341592,342913,344094,345130,346463,347758,349140,350457,351586,352752,354156,355450,356713,357827,359113,360305,361577,363098,364379,365982,367572,368855,370068,370910,371889,372917,374288,375722,377010,378017,378866,379938,380536,381730,382974,384068,385213,386095,386627,387340,388035,388971,389552,390361,390875,391884,392995,393585,394639,395533,396465,397682,399075,400529,401776,402745,403243,403784,404785,405784,406173,406611,407045,407938,408305,408717,409125,409610,409999,410372,411225,411616,411976,412877,413183,413563,413966,414352,414815,415185,415850,416510,416890,417260,417602,418097,418459,419437,420244,420982,422178,422841,423885,424888,425920,426623,427667,428807,429425,430466,431189,432105,433257,433926,434241,434864,435933,436945,437838,438716,439417,440326,441290,442558,443461,444619,445831,446576,447870,448937,450298,451395,452727,453899,454600,455303,456483,456990,457825,458804,459806,460611,461432,462672,464036,464907,465862,466702,467516,468188,469216,469536,469854,470461,471224,471933,472760,473445,474025,474758,475325,476100,476988,477711,478450,479457,480726,481928,483021,484072,484801,486070,487015,488152,489118,490024,491011,492115,493300,494355,495365,496484,497323,498515,499257,500223,501030,501777,503013,503726,504620,505547,506756,507550,508406,509350,510345,511443,512442,513158,514033,515004,515936,516920,517982,519056,520074,521048,521964,522701,523450,524296,525514,526408],sizes:[938,986,1409,1361,1214,1283,1021,830,627,880,888,1378,1055,914,1138,1331,1306,1218,1083,1259,1186,1207,1238,757,518,645,1392,1122,1129,309,428,381,1035,1215,745,374,470,391,891,1366,1143,1352,1177,1376,1285,1267,1331,1249,1284,1378,1184,1338,1178,1406,1255,1401,1412,1507,1138,1051,1174,1255,1342,641,1389,1341,1291,1489,1425,1206,1249,1516,1469,1311,1370,1475,1378,1152,1218,1052,962,1067,1197,1368,1248,1062,1147,1461,1330,1198,868,624,1305,781,1179,751,1041,809,862,1047,946,1281,818,1223,888,1040,1155,690,481,933,1107,1137,980,1326,995,798,573,661,633,776,700,821,686,688,577,889,830,525,491,454,671,1259,1189,1187,1143,1075,849,855,609,996,1300,1198,960,914,1034,1330,1273,851,1168,1409,1174,1133,987,1264,1543,1678,1507,1497,1160,1371,1207,1519,1530,1635,1565,1453,1485,1445,1313,1371,900,884,765,388,435,709,819,463,466,466,435,488,884,925,412,748,818,1423,1174,1244,1310,1128,1094,1297,1113,1494,1481,1401,1359,1309,1162,1280,1109,1042,1217,1421,1217,1180,1328,1219,1204,1478,1210,1064,901,920,1224,1139,1113,825,924,1048,1024,899,1237,1329,1265,757,954,966,519,665,733,795,856,984,1117,749,523,901,396,578,454,548,999,308,1171,926,838,788,1272,629,1018,1002,793,1238,679,862,857,743,1289,1146,1084,779,1043,809,670,931,1097,1129,1224,941,873,825,1090,877,972,1170,1444,804,1284,1276,1213,1262,1539,1387,1530,1307,1109,1088,661,1064,781,778,782,817,1066,753,1261,1137,1272,1433,1261,1037,621,934,980,655,693,1255,877,822,929,1215,1475,1223,1318,925,1144,1291,1103,1039,1227,1150,1101,1002,1321,1181,1036,1333,1295,1382,1317,1129,1166,1404,1294,1263,1114,1286,1192,1272,1521,1281,1603,1590,1283,1213,842,979,1028,1371,1434,1288,1007,849,1072,598,1194,1244,1094,1145,882,532,713,695,936,581,809,514,1009,1111,590,1054,894,932,1217,1393,1454,1247,969,498,541,1001,999,389,438,434,893,367,412,408,485,389,373,853,391,360,901,306,380,403,386,463,370,665,660,380,370,342,495,362,978,807,738,1196,663,1044,1003,1032,703,1044,1140,618,1041,723,916,1152,669,315,623,1069,1012,893,878,701,909,964,1268,903,1158,1212,745,1294,1067,1361,1097,1332,1172,701,703,1180,507,835,979,1002,805,821,1240,1364,871,955,840,814,672,1028,320,318,607,763,709,827,685,580,733,567,775,888,723,739,1007,1269,1202,1093,1051,729,1269,945,1137,966,906,987,1104,1185,1055,1010,1119,839,1192,742,966,807,747,1236,713,894,927,1209,794,856,944,995,1098,999,716,875,971,932,984,1062,1074,1018,974,916,737,749,846,1218,894,601],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_nltk-tests.data")}Module["addRunDependency"]("datafile_nltk-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/nltk/test/grammartestsuites.doctest",start:0,end:3309,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/japanese.doctest",start:3309,end:4402,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/wsd.doctest",start:4402,end:7416,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/grammar.doctest",start:7416,end:9365,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/misc.doctest",start:9365,end:12829,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/toolbox.doctest",start:12829,end:23152,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/probability_fixt.py",start:23152,end:23340,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/__init__.py",start:23340,end:23827,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/childes.doctest",start:23827,end:33190,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/conftest.py",start:33190,end:33994,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/collocations.doctest",start:33994,end:45560,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/collections.doctest",start:45560,end:46182,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/discourse_fixt.py",start:46182,end:46593,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/tag.doctest",start:46593,end:80695,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/corpus.doctest",start:80695,end:179846,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/crubadan.doctest",start:179846,end:181906,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/metrics.doctest",start:181906,end:193189,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/nonmonotonic.doctest",start:193189,end:203559,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/util.doctest",start:203559,end:204617,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/wordnet_lch.doctest",start:204617,end:206978,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/chunk.doctest",start:206978,end:218489,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/resolution.doctest",start:218489,end:226499,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/sentiwordnet.doctest",start:226499,end:227550,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/inference_fixt.py",start:227550,end:227812,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/treetransforms.doctest",start:227812,end:232818,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/logic.doctest",start:232818,end:268001,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/lm.doctest",start:268001,end:271952,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/meteor.doctest",start:271952,end:273475,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/simple.doctest",start:273475,end:275882,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/paice.doctest",start:275882,end:277155,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/treeprettyprinter.doctest",start:277155,end:286531,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/tokenize.doctest",start:286531,end:306638,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/translate.doctest",start:306638,end:315034,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/portuguese_en.doctest",start:315034,end:338155,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/relextract.doctest",start:338155,end:347681,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/internals.doctest",start:347681,end:351964,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/ccg_semantics.doctest",start:351964,end:383030,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/data.doctest",start:383030,end:397027,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/generate.doctest",start:397027,end:399077,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/chat80.doctest",start:399077,end:407812,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/sentiment.doctest",start:407812,end:420041,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gluesemantics_malt_fixt.py",start:420041,end:420273,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/stem.doctest",start:420273,end:422825,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/portuguese_en_fixt.py",start:422825,end:422955,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/featstruct.doctest",start:422955,end:461849,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/drt.doctest",start:461849,end:481925,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/bnc.doctest",start:481925,end:483976,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/ccg.doctest",start:483976,end:503762,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/tree.doctest",start:503762,end:551035,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gluesemantics_malt.doctest",start:551035,end:553702,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/index.doctest",start:553702,end:556403,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gluesemantics.doctest",start:556403,end:569157,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/bleu.doctest",start:569157,end:570019,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/childes_fixt.py",start:570019,end:570391,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/probability.doctest",start:570391,end:579635,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/propbank.doctest",start:579635,end:586329,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/classify_fixt.py",start:586329,end:586448,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/semantics.doctest",start:586448,end:611638,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/nonmonotonic_fixt.py",start:611638,end:611932,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/featgram.doctest",start:611932,end:640678,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/concordance.doctest",start:640678,end:644222,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/wordnet.doctest",start:644222,end:673290,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/inference.doctest",start:673290,end:691652,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/dependency.doctest",start:691652,end:699321,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/all.py",start:699321,end:700140,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/framenet.doctest",start:700140,end:710937,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/classify.doctest",start:710937,end:718636,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/discourse.doctest",start:718636,end:736559,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gensim_fixt.py",start:736559,end:736636,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/parse.doctest",start:736636,end:771572,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gensim.doctest",start:771572,end:776772,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_corpora.py",start:776772,end:786229,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_tag.py",start:786229,end:786764,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_corenlp.py",start:786764,end:845396,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_ribes.py",start:845396,end:850600,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_brill.py",start:850600,end:851624,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_stem.py",start:851624,end:857971,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/__init__.py",start:857971,end:857971,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_corpus_views.py",start:857971,end:859571,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_metrics.py",start:859571,end:861520,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_rte_classify.py",start:861520,end:864285,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_classify.py",start:864285,end:865622,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_json_serialization.py",start:865622,end:869256,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_distance.py",start:869256,end:875095,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_tokenize.py",start:875095,end:903876,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_collocations.py",start:903876,end:907566,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_data.py",start:907566,end:907956,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_concordance.py",start:907956,end:912064,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_bllip.py",start:912064,end:913179,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_nombank.py",start:913179,end:913939,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_chunk.py",start:913939,end:916158,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_hmm.py",start:916158,end:918443,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_downloader.py",start:918443,end:919184,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_disagreement.py",start:919184,end:923645,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_json2csv_corpus.py",start:923645,end:929533,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_senna.py",start:929533,end:933245,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_cfg2chomsky.py",start:933245,end:934971,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_aline.py",start:934971,end:936101,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_pos_tag.py",start:936101,end:938883,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_seekable_unicode_stream_reader.py",start:938883,end:941148,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_freqdist.py",start:941148,end:941358,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_wordnet.py",start:941358,end:950618,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_util.py",start:950618,end:952506,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_tgrep.py",start:952506,end:984214,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_cfd_mutation.py",start:984214,end:985587,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_twitter_auth.py",start:985587,end:988096,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_naivebayes.py",start:988096,end:988860,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_pl196x.py",start:988860,end:989270,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/test_preprocessing.py",start:989270,end:990269,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/__init__.py",start:990269,end:990269,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/test_vocabulary.py",start:990269,end:996186,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/test_counter.py",start:996186,end:1000077,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/test_models.py",start:1000077,end:1020237,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/__init__.py",start:1020237,end:1020237,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_stack_decoder.py",start:1020237,end:1030237,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_nist.py",start:1030237,end:1031882,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm5.py",start:1031882,end:1038643,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_bleu.py",start:1038643,end:1054517,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm2.py",start:1054517,end:1057894,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm3.py",start:1057894,end:1062083,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm1.py",start:1062083,end:1064752,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_meteor.py",start:1064752,end:1065502,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm4.py",start:1065502,end:1070711,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm_model.py",start:1070711,end:1080387,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_gdfa.py",start:1080387,end:1085157,audio:0}],remote_package_size:531105,package_uuid:"6b1288af-83f8-473d-a1ae-989cc95a349a"})})();
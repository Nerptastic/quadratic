var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="distlib.data";var REMOTE_PACKAGE_BASE="distlib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","distlib",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/distlib","_backport",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:296024,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1303,2584,3882,4440,5272,6551,7681,9002,10167,11270,12621,13291,14265,15518,16898,18015,19089,20215,21161,22279,23565,24767,25867,26759,27726,28766,29827,30903,31888,33224,34478,35783,36947,38246,39316,40487,41725,42791,43966,45008,46324,47408,48399,49496,50580,51756,52331,53432,54290,55622,57039,58400,59521,60798,61749,62835,64004,65215,66372,67566,68973,70254,71509,72613,73884,74992,76003,77288,78377,79415,80460,81611,82728,83893,84857,86233,87066,88065,88981,90129,91465,92629,93932,95036,96201,97231,98435,99614,100985,102266,103659,104685,105762,106930,108118,109334,110320,111529,112584,113880,114832,116072,117188,118368,119604,120805,121988,123259,124550,125004,126146,127467,128732,129986,131255,132561,133932,135230,136343,137555,138680,139746,140901,142021,143350,144540,145546,146633,147788,149092,150101,151239,152446,153683,154813,155996,157117,158347,159588,160950,162016,162954,164132,165174,166305,167489,168624,169828,170905,172127,173315,174283,175300,176406,177821,178958,180013,181078,182281,183459,184510,185809,187084,188272,189130,190147,190955,192064,193068,194132,195362,196483,197457,198551,200077,201168,202433,203698,204780,206009,207108,208322,209527,210740,211928,213093,214196,215550,216619,217814,219133,220380,221639,222687,224012,225401,226447,227827,229331,230643,231681,232840,234257,235302,236535,237568,238789,239783,240930,242065,243161,244182,245383,246478,247527,248738,249860,251094,252282,253443,254530,255874,256890,257831,258929,260231,261228,262311,263311,264136,265368,266636,267659,268791,269925,271131,272202,273282,274337,275396,276331,277395,278632,279836,280594,281802,282951,284321,285508,286852,288025,289305,290533,291785,293095,294406,295604],sizes:[1303,1281,1298,558,832,1279,1130,1321,1165,1103,1351,670,974,1253,1380,1117,1074,1126,946,1118,1286,1202,1100,892,967,1040,1061,1076,985,1336,1254,1305,1164,1299,1070,1171,1238,1066,1175,1042,1316,1084,991,1097,1084,1176,575,1101,858,1332,1417,1361,1121,1277,951,1086,1169,1211,1157,1194,1407,1281,1255,1104,1271,1108,1011,1285,1089,1038,1045,1151,1117,1165,964,1376,833,999,916,1148,1336,1164,1303,1104,1165,1030,1204,1179,1371,1281,1393,1026,1077,1168,1188,1216,986,1209,1055,1296,952,1240,1116,1180,1236,1201,1183,1271,1291,454,1142,1321,1265,1254,1269,1306,1371,1298,1113,1212,1125,1066,1155,1120,1329,1190,1006,1087,1155,1304,1009,1138,1207,1237,1130,1183,1121,1230,1241,1362,1066,938,1178,1042,1131,1184,1135,1204,1077,1222,1188,968,1017,1106,1415,1137,1055,1065,1203,1178,1051,1299,1275,1188,858,1017,808,1109,1004,1064,1230,1121,974,1094,1526,1091,1265,1265,1082,1229,1099,1214,1205,1213,1188,1165,1103,1354,1069,1195,1319,1247,1259,1048,1325,1389,1046,1380,1504,1312,1038,1159,1417,1045,1233,1033,1221,994,1147,1135,1096,1021,1201,1095,1049,1211,1122,1234,1188,1161,1087,1344,1016,941,1098,1302,997,1083,1e3,825,1232,1268,1023,1132,1134,1206,1071,1080,1055,1059,935,1064,1237,1204,758,1208,1149,1370,1187,1344,1173,1280,1228,1252,1310,1311,1198,420],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_distlib.data")}Module["addRunDependency"]("datafile_distlib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/distlib-0.3.1-py3.9.egg-info",start:0,end:1261,audio:0},{filename:"/lib/python3.9/site-packages/distlib/manifest.py",start:1261,end:16072,audio:0},{filename:"/lib/python3.9/site-packages/distlib/markers.py",start:16072,end:20459,audio:0},{filename:"/lib/python3.9/site-packages/distlib/__init__.py",start:20459,end:21040,audio:0},{filename:"/lib/python3.9/site-packages/distlib/metadata.py",start:21040,end:60002,audio:0},{filename:"/lib/python3.9/site-packages/distlib/compat.py",start:60002,end:101410,audio:0},{filename:"/lib/python3.9/site-packages/distlib/locators.py",start:101410,end:153510,audio:0},{filename:"/lib/python3.9/site-packages/distlib/util.py",start:153510,end:213355,audio:0},{filename:"/lib/python3.9/site-packages/distlib/version.py",start:213355,end:236746,audio:0},{filename:"/lib/python3.9/site-packages/distlib/scripts.py",start:236746,end:253926,audio:0},{filename:"/lib/python3.9/site-packages/distlib/database.py",start:253926,end:304985,audio:0},{filename:"/lib/python3.9/site-packages/distlib/resources.py",start:304985,end:315751,audio:0},{filename:"/lib/python3.9/site-packages/distlib/wheel.py",start:315751,end:356895,audio:0},{filename:"/lib/python3.9/site-packages/distlib/index.py",start:356895,end:377961,audio:0},{filename:"/lib/python3.9/site-packages/distlib/_backport/sysconfig.py",start:377961,end:404815,audio:0},{filename:"/lib/python3.9/site-packages/distlib/_backport/__init__.py",start:404815,end:405089,audio:0},{filename:"/lib/python3.9/site-packages/distlib/_backport/misc.py",start:405089,end:406060,audio:0},{filename:"/lib/python3.9/site-packages/distlib/_backport/tarfile.py",start:406060,end:498688,audio:0},{filename:"/lib/python3.9/site-packages/distlib/_backport/sysconfig.cfg",start:498688,end:501305,audio:0},{filename:"/lib/python3.9/site-packages/distlib/_backport/shutil.py",start:501305,end:527012,audio:0}],remote_package_size:300120,package_uuid:"751f32b0-da13-4ef8-be00-c8e10fc10947"})})();
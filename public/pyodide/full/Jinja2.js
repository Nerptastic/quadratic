var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="Jinja2.data";var REMOTE_PACKAGE_BASE="Jinja2.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","Jinja2-3.0.3-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","jinja2",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:277728,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1077,2385,3864,5189,6499,7761,8913,10222,11255,12526,13902,15090,15867,17023,17955,19091,20092,21126,22314,23354,24833,26081,27318,28600,30106,31379,32268,33611,34696,35933,37082,38400,39721,41138,42393,43569,44711,46053,47215,48529,49779,51126,52358,53676,54989,56364,57647,58761,60037,61284,62370,63305,64710,65702,66978,68276,69634,70869,71993,73260,74355,75601,76785,77834,78976,80300,81509,82696,83855,85174,86177,87342,88128,89087,90043,91155,91864,92533,93584,94780,95520,96404,97323,98160,99180,100385,101624,102968,103997,104814,106211,107591,108957,110055,111321,112629,113646,114881,116214,117608,118853,120266,121437,122596,123916,125055,126383,127822,128711,129741,130816,132077,133236,134410,135614,136298,137353,138567,139711,140674,141548,142679,143806,145075,146287,147521,148812,150025,151022,152183,153228,154247,155354,156567,157752,158759,160020,161127,162272,163441,164480,165528,166548,167629,168586,169571,170656,171759,172846,173772,174931,175875,176768,177814,178765,179612,180473,181850,183122,184327,185677,187116,188376,189410,190606,191865,193122,194161,195432,196429,197697,198845,200022,200939,202109,203190,204181,205389,206474,207666,208963,210112,211231,212334,213512,214643,215542,216667,217606,218841,220133,221323,222570,223788,224767,225805,227096,228259,229225,230363,231472,232602,233710,235041,236349,237560,239572,240902,242180,243255,244355,245575,246823,248059,249024,250402,251382,252450,253589,254518,255599,256745,258002,259328,260608,261770,262780,263644,264646,265601,266497,267406,268717,270058,271271,272281,273431,274773,275761,277020],sizes:[1077,1308,1479,1325,1310,1262,1152,1309,1033,1271,1376,1188,777,1156,932,1136,1001,1034,1188,1040,1479,1248,1237,1282,1506,1273,889,1343,1085,1237,1149,1318,1321,1417,1255,1176,1142,1342,1162,1314,1250,1347,1232,1318,1313,1375,1283,1114,1276,1247,1086,935,1405,992,1276,1298,1358,1235,1124,1267,1095,1246,1184,1049,1142,1324,1209,1187,1159,1319,1003,1165,786,959,956,1112,709,669,1051,1196,740,884,919,837,1020,1205,1239,1344,1029,817,1397,1380,1366,1098,1266,1308,1017,1235,1333,1394,1245,1413,1171,1159,1320,1139,1328,1439,889,1030,1075,1261,1159,1174,1204,684,1055,1214,1144,963,874,1131,1127,1269,1212,1234,1291,1213,997,1161,1045,1019,1107,1213,1185,1007,1261,1107,1145,1169,1039,1048,1020,1081,957,985,1085,1103,1087,926,1159,944,893,1046,951,847,861,1377,1272,1205,1350,1439,1260,1034,1196,1259,1257,1039,1271,997,1268,1148,1177,917,1170,1081,991,1208,1085,1192,1297,1149,1119,1103,1178,1131,899,1125,939,1235,1292,1190,1247,1218,979,1038,1291,1163,966,1138,1109,1130,1108,1331,1308,1211,2012,1330,1278,1075,1100,1220,1248,1236,965,1378,980,1068,1139,929,1081,1146,1257,1326,1280,1162,1010,864,1002,955,896,909,1311,1341,1213,1010,1150,1342,988,1259,708],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_Jinja2.data")}Module["addRunDependency"]("datafile_Jinja2.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/top_level.txt",start:0,end:7,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/requires.txt",start:7,end:42,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/entry_points.txt",start:42,end:103,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/SOURCES.txt",start:103,end:2522,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/dependency_links.txt",start:2522,end:2523,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/PKG-INFO",start:2523,end:5981,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/debug.py",start:5981,end:14475,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/nativetypes.py",start:14475,end:18444,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/ext.py",start:18444,end:50566,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/constants.py",start:50566,end:51999,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/__init__.py",start:51999,end:54204,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/async_utils.py",start:54204,end:56151,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/py.typed",start:56151,end:56151,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/visitor.py",start:56151,end:59723,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/filters.py",start:59723,end:112332,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/loaders.py",start:112332,end:135086,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/parser.py",start:135086,end:174853,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/exceptions.py",start:174853,end:179924,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/utils.py",start:179924,end:206895,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/bccache.py",start:206895,end:219565,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/lexer.py",start:219565,end:249495,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/compiler.py",start:249495,end:321704,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/meta.py",start:321704,end:326100,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/runtime.py",start:326100,end:361154,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/environment.py",start:361154,end:422137,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/_identifier.py",start:422137,end:423912,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/nodes.py",start:423912,end:458462,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/defaults.py",start:458462,end:459729,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/idtracking.py",start:459729,end:470450,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/tests.py",start:470450,end:476355,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/optimizer.py",start:476355,end:478005,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/sandbox.py",start:478005,end:492605,audio:0}],remote_package_size:281824,package_uuid:"4b4ba5c8-5783-4ca1-88fd-a5787916fb26"})})();
var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="logbook.data";var REMOTE_PACKAGE_BASE="logbook.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","logbook",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","Logbook-1.5.2-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:197982,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1209,2658,3921,5242,6573,7913,8921,10121,11368,12601,13858,14916,16041,17201,18537,19646,20723,21871,22717,23282,24651,25926,27021,28280,29364,30378,31716,32707,33646,34749,35849,37223,38570,39705,40884,42132,43444,44754,45974,47130,48389,49533,50801,51853,52953,54326,55141,56105,56873,58186,59358,60532,61676,62893,64175,65362,66700,67879,69093,70321,71606,72842,74060,75149,76292,77421,78767,79929,80884,82289,83314,84508,85352,86328,87440,88477,89458,90803,92091,93354,94637,95802,96508,97805,99195,100493,101798,103086,104209,105064,106102,107156,108045,109100,110369,111672,112917,114182,115195,116307,117286,118287,119602,120869,121982,123174,124493,125792,127121,128238,129439,130674,131617,132552,133473,134792,135793,136997,137834,138637,139670,141143,142597,144049,145465,146959,148319,149621,150978,152247,153572,154508,155636,157228,158695,159879,161340,162547,164078,165368,166793,168268,169593,170955,172323,173680,175054,176330,177286,178603,180073,181468,182846,184390,185584,186414,187404,188366,189025,189658,190773,191907,193063,194155,195213,196410,197533],sizes:[1209,1449,1263,1321,1331,1340,1008,1200,1247,1233,1257,1058,1125,1160,1336,1109,1077,1148,846,565,1369,1275,1095,1259,1084,1014,1338,991,939,1103,1100,1374,1347,1135,1179,1248,1312,1310,1220,1156,1259,1144,1268,1052,1100,1373,815,964,768,1313,1172,1174,1144,1217,1282,1187,1338,1179,1214,1228,1285,1236,1218,1089,1143,1129,1346,1162,955,1405,1025,1194,844,976,1112,1037,981,1345,1288,1263,1283,1165,706,1297,1390,1298,1305,1288,1123,855,1038,1054,889,1055,1269,1303,1245,1265,1013,1112,979,1001,1315,1267,1113,1192,1319,1299,1329,1117,1201,1235,943,935,921,1319,1001,1204,837,803,1033,1473,1454,1452,1416,1494,1360,1302,1357,1269,1325,936,1128,1592,1467,1184,1461,1207,1531,1290,1425,1475,1325,1362,1368,1357,1374,1276,956,1317,1470,1395,1378,1544,1194,830,990,962,659,633,1115,1134,1156,1092,1058,1197,1123,449],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_logbook.data")}Module["addRunDependency"]("datafile_logbook.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/logbook/handlers.py",start:0,end:71505,audio:0},{filename:"/lib/python3.9/site-packages/logbook/__init__.py",start:71505,end:73277,audio:0},{filename:"/lib/python3.9/site-packages/logbook/more.py",start:73277,end:93053,audio:0},{filename:"/lib/python3.9/site-packages/logbook/_fallback.py",start:93053,end:101165,audio:0},{filename:"/lib/python3.9/site-packages/logbook/compat.py",start:101165,end:111521,audio:0},{filename:"/lib/python3.9/site-packages/logbook/queues.py",start:111521,end:136184,audio:0},{filename:"/lib/python3.9/site-packages/logbook/__version__.py",start:136184,end:136206,audio:0},{filename:"/lib/python3.9/site-packages/logbook/utils.py",start:136206,end:141989,audio:0},{filename:"/lib/python3.9/site-packages/logbook/ticketing.py",start:141989,end:161220,audio:0},{filename:"/lib/python3.9/site-packages/logbook/base.py",start:161220,end:202564,audio:0},{filename:"/lib/python3.9/site-packages/logbook/concurrency.py",start:202564,end:208821,audio:0},{filename:"/lib/python3.9/site-packages/logbook/_termcolors.py",start:208821,end:209959,audio:0},{filename:"/lib/python3.9/site-packages/logbook/helpers.py",start:209959,end:218255,audio:0},{filename:"/lib/python3.9/site-packages/logbook/_speedups.so",start:218255,end:327003,audio:0},{filename:"/lib/python3.9/site-packages/logbook/notifiers.py",start:327003,end:339038,audio:0},{filename:"/lib/python3.9/site-packages/Logbook-1.5.2-py3.9.egg-info/top_level.txt",start:339038,end:339046,audio:0},{filename:"/lib/python3.9/site-packages/Logbook-1.5.2-py3.9.egg-info/not-zip-safe",start:339046,end:339047,audio:0},{filename:"/lib/python3.9/site-packages/Logbook-1.5.2-py3.9.egg-info/requires.txt",start:339047,end:339333,audio:0},{filename:"/lib/python3.9/site-packages/Logbook-1.5.2-py3.9.egg-info/SOURCES.txt",start:339333,end:340656,audio:0},{filename:"/lib/python3.9/site-packages/Logbook-1.5.2-py3.9.egg-info/dependency_links.txt",start:340656,end:340657,audio:0},{filename:"/lib/python3.9/site-packages/Logbook-1.5.2-py3.9.egg-info/PKG-INFO",start:340657,end:342776,audio:0}],remote_package_size:202078,package_uuid:"605be04d-f317-47a0-9c92-dae8974ab73f"})})();
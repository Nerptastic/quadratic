var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="lir.data";var REMOTE_PACKAGE_BASE="lir.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","lir",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/lir","multiclass",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","lir-0.1.10-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:64669,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1374,2581,3687,4891,6003,7244,8410,9587,10803,12033,13346,14543,15726,17145,18237,19360,20486,21557,22685,23875,25149,26232,27626,28879,30097,31303,32548,33921,35055,36269,37698,38776,40099,41419,42353,43798,44993,46277,47650,48537,49044,50043,50649,51625,52824,54228,55140,56149,57429,58548,59762,60940,62209,63452],sizes:[1374,1207,1106,1204,1112,1241,1166,1177,1216,1230,1313,1197,1183,1419,1092,1123,1126,1071,1128,1190,1274,1083,1394,1253,1218,1206,1245,1373,1134,1214,1429,1078,1323,1320,934,1445,1195,1284,1373,887,507,999,606,976,1199,1404,912,1009,1280,1119,1214,1178,1269,1243,1217],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_lir.data")}Module["addRunDependency"]("datafile_lir.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/lir/bayeserror.py",start:0,end:4564,audio:0},{filename:"/lib/python3.9/site-packages/lir/calibration.py",start:4564,end:30267,audio:0},{filename:"/lib/python3.9/site-packages/lir/__init__.py",start:30267,end:30872,audio:0},{filename:"/lib/python3.9/site-packages/lir/lr.py",start:30872,end:38256,audio:0},{filename:"/lib/python3.9/site-packages/lir/_plotting_new.py",start:38256,end:48684,audio:0},{filename:"/lib/python3.9/site-packages/lir/transformers.py",start:48684,end:54329,audio:0},{filename:"/lib/python3.9/site-packages/lir/util.py",start:54329,end:56600,audio:0},{filename:"/lib/python3.9/site-packages/lir/plotting.py",start:56600,end:56658,audio:0},{filename:"/lib/python3.9/site-packages/lir/data.py",start:56658,end:57401,audio:0},{filename:"/lib/python3.9/site-packages/lir/generators.py",start:57401,end:59365,audio:0},{filename:"/lib/python3.9/site-packages/lir/metrics.py",start:59365,end:71809,audio:0},{filename:"/lib/python3.9/site-packages/lir/ece.py",start:71809,end:75821,audio:0},{filename:"/lib/python3.9/site-packages/lir/regression.py",start:75821,end:79058,audio:0},{filename:"/lib/python3.9/site-packages/lir/_plotting_old.py",start:79058,end:102903,audio:0},{filename:"/lib/python3.9/site-packages/lir/multiclass/calibration.py",start:102903,end:105348,audio:0},{filename:"/lib/python3.9/site-packages/lir/multiclass/__init__.py",start:105348,end:105588,audio:0},{filename:"/lib/python3.9/site-packages/lir/multiclass/lr.py",start:105588,end:106220,audio:0},{filename:"/lib/python3.9/site-packages/lir/multiclass/util.py",start:106220,end:106714,audio:0},{filename:"/lib/python3.9/site-packages/lir/multiclass/metrics.py",start:106714,end:109222,audio:0},{filename:"/lib/python3.9/site-packages/lir-0.1.10-py3.9.egg-info/top_level.txt",start:109222,end:109226,audio:0},{filename:"/lib/python3.9/site-packages/lir-0.1.10-py3.9.egg-info/requires.txt",start:109226,end:109267,audio:0},{filename:"/lib/python3.9/site-packages/lir-0.1.10-py3.9.egg-info/SOURCES.txt",start:109267,end:109795,audio:0},{filename:"/lib/python3.9/site-packages/lir-0.1.10-py3.9.egg-info/dependency_links.txt",start:109795,end:109796,audio:0},{filename:"/lib/python3.9/site-packages/lir-0.1.10-py3.9.egg-info/PKG-INFO",start:109796,end:112350,audio:0}],remote_package_size:68765,package_uuid:"589ce8f3-53fb-4728-9eb1-4bfa5d0d503f"})})();
var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="ijson.data";var REMOTE_PACKAGE_BASE="ijson.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","ijson-3.1.4-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","ijson",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/ijson","backends",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:40392,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,726,1640,3061,4437,5979,7477,8979,10483,11993,13540,15153,16249,17215,18250,19003,19708,20231,21202,22462,23941,25311,26210,27404,28370,29283,30490,31789,32785,34025,34820,35921,37025,38238,39062,40300],sizes:[726,914,1421,1376,1542,1498,1502,1504,1510,1547,1613,1096,966,1035,753,705,523,971,1260,1479,1370,899,1194,966,913,1207,1299,996,1240,795,1101,1104,1213,824,1238,92],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_ijson.data")}Module["addRunDependency"]("datafile_ijson.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/ijson-3.1.4-py3.9.egg-info/top_level.txt",start:0,end:6,audio:0},{filename:"/lib/python3.9/site-packages/ijson-3.1.4-py3.9.egg-info/SOURCES.txt",start:6,end:1992,audio:0},{filename:"/lib/python3.9/site-packages/ijson-3.1.4-py3.9.egg-info/dependency_links.txt",start:1992,end:1993,audio:0},{filename:"/lib/python3.9/site-packages/ijson-3.1.4-py3.9.egg-info/PKG-INFO",start:1993,end:21827,audio:0},{filename:"/lib/python3.9/site-packages/ijson/common.py",start:21827,end:36940,audio:0},{filename:"/lib/python3.9/site-packages/ijson/__init__.py",start:36940,end:38622,audio:0},{filename:"/lib/python3.9/site-packages/ijson/compat.py",start:38622,end:40185,audio:0},{filename:"/lib/python3.9/site-packages/ijson/version.py",start:40185,end:40207,audio:0},{filename:"/lib/python3.9/site-packages/ijson/utils.py",start:40207,end:42266,audio:0},{filename:"/lib/python3.9/site-packages/ijson/utils35.py",start:42266,end:45155,audio:0},{filename:"/lib/python3.9/site-packages/ijson/backends/__init__.py",start:45155,end:46921,audio:0},{filename:"/lib/python3.9/site-packages/ijson/backends/yajl2_cffi.py",start:46921,end:53302,audio:0},{filename:"/lib/python3.9/site-packages/ijson/backends/python.py",start:53302,end:63178,audio:0},{filename:"/lib/python3.9/site-packages/ijson/backends/_yajl2_ctypes_common.py",start:63178,end:65872,audio:0},{filename:"/lib/python3.9/site-packages/ijson/backends/yajl2.py",start:65872,end:67652,audio:0},{filename:"/lib/python3.9/site-packages/ijson/backends/yajl2_c.py",start:67652,end:69932,audio:0},{filename:"/lib/python3.9/site-packages/ijson/backends/yajl.py",start:69932,end:71788,audio:0}],remote_package_size:44488,package_uuid:"5e3285ad-49e3-44f5-9c4f-26c6a2457ab3"})})();
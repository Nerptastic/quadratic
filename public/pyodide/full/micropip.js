var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="micropip.data";var REMOTE_PACKAGE_BASE="micropip.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","micropip-0.1-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","micropip",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip","externals",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip/externals","pip",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip/externals/pip","_vendor",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip/externals/pip","_internal",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip/externals/pip/_internal","utils",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:24829,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1191,2534,3805,4863,5997,7257,8552,9891,11329,12559,13904,14920,16105,17305,18579,19849,21146,22313,23521,24749],sizes:[1191,1343,1271,1058,1134,1260,1295,1339,1438,1230,1345,1016,1185,1200,1274,1270,1297,1167,1208,1228,80],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_micropip.data")}Module["addRunDependency"]("datafile_micropip.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/micropip-0.1-py3.9.egg-info/top_level.txt",start:0,end:9,audio:0},{filename:"/lib/python3.9/site-packages/micropip-0.1-py3.9.egg-info/SOURCES.txt",start:9,end:565,audio:0},{filename:"/lib/python3.9/site-packages/micropip-0.1-py3.9.egg-info/dependency_links.txt",start:565,end:566,audio:0},{filename:"/lib/python3.9/site-packages/micropip-0.1-py3.9.egg-info/PKG-INFO",start:566,end:827,audio:0},{filename:"/lib/python3.9/site-packages/micropip/_micropip.py",start:827,end:15918,audio:0},{filename:"/lib/python3.9/site-packages/micropip/__init__.py",start:15918,end:15995,audio:0},{filename:"/lib/python3.9/site-packages/micropip/package.py",start:15995,end:17628,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/__init__.py",start:17628,end:17628,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/__init__.py",start:17628,end:17721,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_vendor/__init__.py",start:17721,end:17721,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_vendor/pkg_resources.py",start:17721,end:33535,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_internal/__init__.py",start:33535,end:33535,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_internal/utils/__init__.py",start:33535,end:33535,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_internal/utils/wheel.py",start:33535,end:39941,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_internal/utils/pkg_resources.py",start:39941,end:41046,audio:0}],remote_package_size:28925,package_uuid:"b132601e-d92d-48c4-b89d-840d8611ceb4"})})();
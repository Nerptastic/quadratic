var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="toolz.data";var REMOTE_PACKAGE_BASE="toolz.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","toolz-0.11.2-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","toolz",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/toolz","sandbox",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/toolz","curried",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","tlz",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:60876,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1006,2333,3701,5164,6499,7402,8520,9526,10754,12101,13299,14500,15885,17100,18007,19328,20594,21769,22912,24133,25143,26191,27395,28652,29807,30931,32277,33479,34551,35409,36348,37726,38671,39474,40411,41256,41659,42185,43118,44306,45065,46150,47365,48244,49432,50630,51924,53357,54805,56088,57557,58430,59653,60745],sizes:[1006,1327,1368,1463,1335,903,1118,1006,1228,1347,1198,1201,1385,1215,907,1321,1266,1175,1143,1221,1010,1048,1204,1257,1155,1124,1346,1202,1072,858,939,1378,945,803,937,845,403,526,933,1188,759,1085,1215,879,1188,1198,1294,1433,1448,1283,1469,873,1223,1092,131],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_toolz.data")}Module["addRunDependency"]("datafile_toolz.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/toolz-0.11.2-py3.9.egg-info/top_level.txt",start:0,end:10,audio:0},{filename:"/lib/python3.9/site-packages/toolz-0.11.2-py3.9.egg-info/not-zip-safe",start:10,end:11,audio:0},{filename:"/lib/python3.9/site-packages/toolz-0.11.2-py3.9.egg-info/SOURCES.txt",start:11,end:955,audio:0},{filename:"/lib/python3.9/site-packages/toolz-0.11.2-py3.9.egg-info/dependency_links.txt",start:955,end:956,audio:0},{filename:"/lib/python3.9/site-packages/toolz-0.11.2-py3.9.egg-info/PKG-INFO",start:956,end:6105,audio:0},{filename:"/lib/python3.9/site-packages/toolz/_version.py",start:6105,end:6603,audio:0},{filename:"/lib/python3.9/site-packages/toolz/__init__.py",start:6603,end:6984,audio:0},{filename:"/lib/python3.9/site-packages/toolz/itertoolz.py",start:6984,end:34592,audio:0},{filename:"/lib/python3.9/site-packages/toolz/functoolz.py",start:34592,end:64414,audio:0},{filename:"/lib/python3.9/site-packages/toolz/_signatures.py",start:64414,end:84956,audio:0},{filename:"/lib/python3.9/site-packages/toolz/compatibility.py",start:84956,end:85953,audio:0},{filename:"/lib/python3.9/site-packages/toolz/dicttoolz.py",start:85953,end:94879,audio:0},{filename:"/lib/python3.9/site-packages/toolz/recipes.py",start:94879,end:96135,audio:0},{filename:"/lib/python3.9/site-packages/toolz/utils.py",start:96135,end:96274,audio:0},{filename:"/lib/python3.9/site-packages/toolz/sandbox/__init__.py",start:96274,end:96342,audio:0},{filename:"/lib/python3.9/site-packages/toolz/sandbox/parallel.py",start:96342,end:99129,audio:0},{filename:"/lib/python3.9/site-packages/toolz/sandbox/core.py",start:99129,end:103465,audio:0},{filename:"/lib/python3.9/site-packages/toolz/curried/__init__.py",start:103465,end:106165,audio:0},{filename:"/lib/python3.9/site-packages/toolz/curried/exceptions.py",start:106165,end:106502,audio:0},{filename:"/lib/python3.9/site-packages/toolz/curried/operator.py",start:106502,end:106992,audio:0},{filename:"/lib/python3.9/site-packages/tlz/__init__.py",start:106992,end:107330,audio:0},{filename:"/lib/python3.9/site-packages/tlz/_build_tlz.py",start:107330,end:110742,audio:0}],remote_package_size:64972,package_uuid:"4428a942-79df-466e-be60-3b768b93bfe1"})})();
var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="idna.data";var REMOTE_PACKAGE_BASE="idna.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","idna-3.3-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","idna",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:105522,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1043,2305,3748,5233,6803,7961,8707,9671,10439,11210,11931,12724,13431,14265,15050,15741,16468,17156,17933,18619,19330,20080,20773,21439,22184,22793,23427,24068,24775,25384,26199,26996,27718,28482,29192,29898,30557,31314,32060,32752,33525,34294,35089,35860,36531,37362,38106,38780,39495,40152,40802,41545,42255,43013,43800,44572,45371,46106,46873,47654,48402,49028,49763,50443,51114,51789,52569,53373,54153,54879,55598,56373,57047,57763,58451,59107,59776,60463,61190,61947,62651,63276,63976,64694,65387,66059,66707,67383,68080,68773,69439,70056,70719,71440,72133,72837,73564,74323,75062,75838,76513,77252,78021,78779,79483,80248,80912,82165,83092,84030,85017,86131,87185,88534,89631,90447,91064,91716,92321,92972,93561,94231,94983,95771,96539,97363,98183,99054,99763,100561,101388,102122,103001,103880,104770],sizes:[1043,1262,1443,1485,1570,1158,746,964,768,771,721,793,707,834,785,691,727,688,777,686,711,750,693,666,745,609,634,641,707,609,815,797,722,764,710,706,659,757,746,692,773,769,795,771,671,831,744,674,715,657,650,743,710,758,787,772,799,735,767,781,748,626,735,680,671,675,780,804,780,726,719,775,674,716,688,656,669,687,727,757,704,625,700,718,693,672,648,676,697,693,666,617,663,721,693,704,727,759,739,776,675,739,769,758,704,765,664,1253,927,938,987,1114,1054,1349,1097,816,617,652,605,651,589,670,752,788,768,824,820,871,709,798,827,734,879,879,890,752],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_idna.data")}Module["addRunDependency"]("datafile_idna.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/idna-3.3-py3.9.egg-info/top_level.txt",start:0,end:5,audio:0},{filename:"/lib/python3.9/site-packages/idna-3.3-py3.9.egg-info/SOURCES.txt",start:5,end:603,audio:0},{filename:"/lib/python3.9/site-packages/idna-3.3-py3.9.egg-info/dependency_links.txt",start:603,end:604,audio:0},{filename:"/lib/python3.9/site-packages/idna-3.3-py3.9.egg-info/PKG-INFO",start:604,end:10369,audio:0},{filename:"/lib/python3.9/site-packages/idna/__init__.py",start:10369,end:11218,audio:0},{filename:"/lib/python3.9/site-packages/idna/py.typed",start:11218,end:11218,audio:0},{filename:"/lib/python3.9/site-packages/idna/compat.py",start:11218,end:11539,audio:0},{filename:"/lib/python3.9/site-packages/idna/package_data.py",start:11539,end:11560,audio:0},{filename:"/lib/python3.9/site-packages/idna/codec.py",start:11560,end:14934,audio:0},{filename:"/lib/python3.9/site-packages/idna/uts46data.py",start:14934,end:219334,audio:0},{filename:"/lib/python3.9/site-packages/idna/core.py",start:219334,end:232129,audio:0},{filename:"/lib/python3.9/site-packages/idna/intranges.py",start:232129,end:234010,audio:0},{filename:"/lib/python3.9/site-packages/idna/idnadata.py",start:234010,end:278035,audio:0}],remote_package_size:109618,package_uuid:"9dbe8ee0-4cd3-4db5-94f2-8996b83790cb"})})();
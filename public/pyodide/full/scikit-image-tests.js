var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="scikit-image-tests.data";var REMOTE_PACKAGE_BASE="scikit-image-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","skimage",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","filters",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/filters","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/filters","rank",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/filters/rank","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","io",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/io","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","util",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/util","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","draw",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/draw","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","restoration",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/restoration","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","feature",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/feature","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","data",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/data","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","exposure",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/exposure","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","transform",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/transform","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","viewer",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/viewer","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","graph",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/graph","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","morphology",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/morphology","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","color",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/color","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","metrics",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/metrics","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","segmentation",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/segmentation","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","_shared",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/_shared","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage","measure",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/skimage/measure","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","doc",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/doc","ext",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/doc/ext","tests",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:504478,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1143,2287,3469,4519,5378,6454,7409,8199,9053,9802,10599,11367,12280,13305,14093,15015,16159,17099,18397,19497,20312,20725,21308,22069,23063,23939,24966,26127,27514,28977,30249,31572,32932,34050,34816,35630,36261,37035,37824,38711,39415,40458,41552,42357,43115,44132,45467,46758,47820,49042,49661,50543,51541,52521,53525,54659,55175,55712,56522,57506,58247,59011,59817,60897,62125,63173,64151,65124,66163,67402,68383,69436,70283,71500,72810,74132,75258,76626,78010,79209,80110,80924,81868,82865,83729,85366,86747,87746,88638,89300,90091,90554,91380,92011,92938,94046,95145,96180,96815,97639,98665,99573,100708,101570,102436,103277,104052,104852,105841,106425,107479,108292,109249,109899,110481,111167,111868,112425,112821,113679,114191,114661,115256,115593,116173,116897,117577,118331,118917,119493,120367,120996,121605,122354,123353,124495,125400,126524,127571,128614,129887,131154,132176,133312,134268,135210,136053,136785,137794,138687,139749,140629,141380,142215,143043,144100,145015,146224,147352,148269,149380,150378,150916,151642,152734,153741,154974,156119,157165,158230,159336,160283,161222,162166,162866,163650,164583,165222,166362,167152,167815,168717,169508,170148,170655,171426,172094,172913,173756,174545,175832,177125,178138,179071,179781,180487,181234,182124,183041,184323,185331,186208,187242,188324,189456,190376,191466,192377,193375,194437,195075,195923,196741,197713,198947,199853,200581,201496,202565,203409,204583,205433,206538,207376,208444,209362,210658,211885,212911,213942,215023,215442,216633,217697,218743,219656,220438,221290,222232,223418,224009,224849,226166,226979,228048,229136,230128,231161,231791,232801,233920,234853,235646,236678,237814,238834,239906,241025,242214,243186,244283,245578,246750,247834,248981,250151,251250,252255,253331,254267,255288,256167,256900,257742,258829,259819,260712,261517,262398,263061,264160,265424,266424,267407,268168,268912,269851,270988,272016,273007,273642,274552,275317,276268,277453,278339,279578,280257,281232,282050,283055,283934,284809,286072,286507,287522,288285,289147,290135,290839,291437,292433,293452,294782,295653,296677,297718,298616,299836,300894,301861,302831,303986,305059,305807,306717,307371,308019,309299,310574,311364,311957,312832,313654,314294,314785,315556,316553,317231,318162,318990,319917,320966,321623,322665,323450,323982,324740,325114,325832,326621,327021,327754,328477,329316,330577,331278,332100,333072,333872,335102,335726,336578,337435,338310,339117,339680,340276,340901,341723,342646,343434,344384,345138,346034,346788,347404,348095,348853,349762,350727,351467,352338,353141,353915,354908,355729,356767,358169,359304,360548,361647,362650,363634,364557,365769,366779,367776,368769,369646,370748,371673,372680,373616,374655,375626,376748,377727,378831,379927,380712,381386,382395,383432,384321,385460,386528,387435,388604,389816,390843,391980,393277,394147,395138,396009,397082,398386,399264,400506,401538,402276,403020,404027,404879,405811,406786,407957,408972,409558,410729,411834,412598,413320,414759,415770,416557,416976,417359,417771,418144,418736,419775,420693,421532,422676,423826,424430,425605,426821,427717,428566,429456,430200,431170,432151,433280,434348,435250,436130,436889,437760,438634,439686,440697,441527,442281,443411,444300,445384,446358,447017,447569,448174,449312,450261,451364,452510,453573,454555,455609,456748,457730,458547,459377,460442,461571,462614,463785,465122,466194,467106,467907,469207,470119,470827,471591,472506,473525,474412,475328,476214,477333,478321,479306,480194,481105,482024,483069,483964,485043,486208,487230,488280,489253,490218,491635,492523,493570,494577,495557,496378,497365,498586,499576,500404,501086,501609,502682,503355,504469],sizes:[1143,1144,1182,1050,859,1076,955,790,854,749,797,768,913,1025,788,922,1144,940,1298,1100,815,413,583,761,994,876,1027,1161,1387,1463,1272,1323,1360,1118,766,814,631,774,789,887,704,1043,1094,805,758,1017,1335,1291,1062,1222,619,882,998,980,1004,1134,516,537,810,984,741,764,806,1080,1228,1048,978,973,1039,1239,981,1053,847,1217,1310,1322,1126,1368,1384,1199,901,814,944,997,864,1637,1381,999,892,662,791,463,826,631,927,1108,1099,1035,635,824,1026,908,1135,862,866,841,775,800,989,584,1054,813,957,650,582,686,701,557,396,858,512,470,595,337,580,724,680,754,586,576,874,629,609,749,999,1142,905,1124,1047,1043,1273,1267,1022,1136,956,942,843,732,1009,893,1062,880,751,835,828,1057,915,1209,1128,917,1111,998,538,726,1092,1007,1233,1145,1046,1065,1106,947,939,944,700,784,933,639,1140,790,663,902,791,640,507,771,668,819,843,789,1287,1293,1013,933,710,706,747,890,917,1282,1008,877,1034,1082,1132,920,1090,911,998,1062,638,848,818,972,1234,906,728,915,1069,844,1174,850,1105,838,1068,918,1296,1227,1026,1031,1081,419,1191,1064,1046,913,782,852,942,1186,591,840,1317,813,1069,1088,992,1033,630,1010,1119,933,793,1032,1136,1020,1072,1119,1189,972,1097,1295,1172,1084,1147,1170,1099,1005,1076,936,1021,879,733,842,1087,990,893,805,881,663,1099,1264,1e3,983,761,744,939,1137,1028,991,635,910,765,951,1185,886,1239,679,975,818,1005,879,875,1263,435,1015,763,862,988,704,598,996,1019,1330,871,1024,1041,898,1220,1058,967,970,1155,1073,748,910,654,648,1280,1275,790,593,875,822,640,491,771,997,678,931,828,927,1049,657,1042,785,532,758,374,718,789,400,733,723,839,1261,701,822,972,800,1230,624,852,857,875,807,563,596,625,822,923,788,950,754,896,754,616,691,758,909,965,740,871,803,774,993,821,1038,1402,1135,1244,1099,1003,984,923,1212,1010,997,993,877,1102,925,1007,936,1039,971,1122,979,1104,1096,785,674,1009,1037,889,1139,1068,907,1169,1212,1027,1137,1297,870,991,871,1073,1304,878,1242,1032,738,744,1007,852,932,975,1171,1015,586,1171,1105,764,722,1439,1011,787,419,383,412,373,592,1039,918,839,1144,1150,604,1175,1216,896,849,890,744,970,981,1129,1068,902,880,759,871,874,1052,1011,830,754,1130,889,1084,974,659,552,605,1138,949,1103,1146,1063,982,1054,1139,982,817,830,1065,1129,1043,1171,1337,1072,912,801,1300,912,708,764,915,1019,887,916,886,1119,988,985,888,911,919,1045,895,1079,1165,1022,1050,973,965,1417,888,1047,1007,980,821,987,1221,990,828,682,523,1073,673,1114,9],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_scikit-image-tests.data")}Module["addRunDependency"]("datafile_scikit-image-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/skimage/conftest.py",start:0,end:350,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_median.py",start:350,end:2518,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/__init__.py",start:2518,end:2518,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_lpi_filter.py",start:2518,end:5197,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_window.py",start:5197,end:6818,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_gaussian.py",start:6818,end:13532,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_thresholding.py",start:13532,end:40880,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_ridges.py",start:40880,end:50964,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_gabor.py",start:50964,end:54736,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_fft_based.py",start:54736,end:67125,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_edges.py",start:67125,end:87384,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_unsharp_mask.py",start:87384,end:93062,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/tests/test_correlate.py",start:93062,end:95053,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/rank/tests/__init__.py",start:95053,end:95181,audio:0},{filename:"/lib/python3.9/site-packages/skimage/filters/rank/tests/test_rank.py",start:95181,end:130382,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_collection.py",start:130382,end:135006,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_multi_image.py",start:135006,end:137516,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/__init__.py",start:137516,end:137516,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_plugin_util.py",start:137516,end:139412,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_tifffile.py",start:139412,end:141780,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_pil.py",start:141780,end:150595,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_imread.py",start:150595,end:152485,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_imageio.py",start:152485,end:154773,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_simpleitk.py",start:154773,end:157166,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_io.py",start:157166,end:161060,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_histograms.py",start:161060,end:161857,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_fits.py",start:161857,end:162774,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_plugin.py",start:162774,end:165103,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_colormixer.py",start:165103,end:169586,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_mpl_imshow.py",start:169586,end:173793,audio:0},{filename:"/lib/python3.9/site-packages/skimage/io/tests/test_sift.py",start:173793,end:177044,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_random_noise.py",start:177044,end:185222,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/__init__.py",start:185222,end:185222,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_regular_grid.py",start:185222,end:186209,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_invert.py",start:186209,end:188654,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_shape.py",start:188654,end:194145,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_dtype.py",start:194145,end:200329,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_labels.py",start:200329,end:202539,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_unique_rows.py",start:202539,end:203656,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_map_array.py",start:203656,end:205492,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_apply_parallel.py",start:205492,end:210683,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_montage.py",start:210683,end:216651,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_compare.py",start:216651,end:218982,audio:0},{filename:"/lib/python3.9/site-packages/skimage/util/tests/test_arraycrop.py",start:218982,end:220833,audio:0},{filename:"/lib/python3.9/site-packages/skimage/draw/tests/__init__.py",start:220833,end:220833,audio:0},{filename:"/lib/python3.9/site-packages/skimage/draw/tests/test_polygon2mask.py",start:220833,end:221176,audio:0},{filename:"/lib/python3.9/site-packages/skimage/draw/tests/test_random_shapes.py",start:221176,end:227363,audio:0},{filename:"/lib/python3.9/site-packages/skimage/draw/tests/test_draw.py",start:227363,end:266595,audio:0},{filename:"/lib/python3.9/site-packages/skimage/draw/tests/test_draw_nd.py",start:266595,end:267080,audio:0},{filename:"/lib/python3.9/site-packages/skimage/draw/tests/test_draw3d.py",start:267080,end:273782,audio:0},{filename:"/lib/python3.9/site-packages/skimage/restoration/tests/test_rolling_ball.py",start:273782,end:276916,audio:0},{filename:"/lib/python3.9/site-packages/skimage/restoration/tests/test_j_invariant.py",start:276916,end:280538,audio:0},{filename:"/lib/python3.9/site-packages/skimage/restoration/tests/__init__.py",start:280538,end:280538,audio:0},{filename:"/lib/python3.9/site-packages/skimage/restoration/tests/test_inpaint.py",start:280538,end:288265,audio:0},{filename:"/lib/python3.9/site-packages/skimage/restoration/tests/test_denoise.py",start:288265,end:336773,audio:0},{filename:"/lib/python3.9/site-packages/skimage/restoration/tests/test_restoration.py",start:336773,end:343369,audio:0},{filename:"/lib/python3.9/site-packages/skimage/restoration/tests/test_unwrap.py",start:343369,end:351834,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_orb.py",start:351834,end:358207,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/__init__.py",start:358207,end:358207,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_haar.py",start:358207,end:365831,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_peak.py",start:365831,end:389822,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_template.py",start:389822,end:395994,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_texture.py",start:395994,end:409378,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_censure.py",start:409378,end:413155,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_blob.py",start:413155,end:428152,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_corner.py",start:428152,end:452141,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_daisy.py",start:452141,end:455558,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_cascade.py",start:455558,end:456231,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_hog.py",start:456231,end:467907,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_match.py",start:467907,end:475186,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_canny.py",start:475186,end:480484,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_brief.py",start:480484,end:483333,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_util.py",start:483333,end:486322,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_basic_features.py",start:486322,end:489629,audio:0},{filename:"/lib/python3.9/site-packages/skimage/feature/tests/test_sift.py",start:489629,end:495925,audio:0},{filename:"/lib/python3.9/site-packages/skimage/data/tests/__init__.py",start:495925,end:495925,audio:0},{filename:"/lib/python3.9/site-packages/skimage/data/tests/test_data.py",start:495925,end:501571,audio:0},{filename:"/lib/python3.9/site-packages/skimage/exposure/tests/__init__.py",start:501571,end:501571,audio:0},{filename:"/lib/python3.9/site-packages/skimage/exposure/tests/test_histogram_matching.py",start:501571,end:506446,audio:0},{filename:"/lib/python3.9/site-packages/skimage/exposure/tests/test_exposure.py",start:506446,end:535476,audio:0},{filename:"/lib/python3.9/site-packages/skimage/transform/tests/test_radon_transform.py",start:535476,end:553945,audio:0},{filename:"/lib/python3.9/site-packages/skimage/transform/tests/__init__.py",start:553945,end:553945,audio:0},{filename:"/lib/python3.9/site-packages/skimage/transform/tests/test_geometric.py",start:553945,end:579774,audio:0},{filename:"/lib/python3.9/site-packages/skimage/transform/tests/test_pyramids.py",start:579774,end:588353,audio:0},{filename:"/lib/python3.9/site-packages/skimage/transform/tests/test_finite_radon_transform.py",start:588353,end:588669,audio:0},{filename:"/lib/python3.9/site-packages/skimage/transform/tests/test_warps.py",start:588669,end:619350,audio:0},{filename:"/lib/python3.9/site-packages/skimage/transform/tests/test_hough_transform.py",start:619350,end:638471,audio:0},{filename:"/lib/python3.9/site-packages/skimage/transform/tests/test_integral.py",start:638471,end:640849,audio:0},{filename:"/lib/python3.9/site-packages/skimage/viewer/tests/test_tools.py",start:640849,end:646843,audio:0},{filename:"/lib/python3.9/site-packages/skimage/viewer/tests/__init__.py",start:646843,end:646843,audio:0},{filename:"/lib/python3.9/site-packages/skimage/viewer/tests/test_viewer.py",start:646843,end:649093,audio:0},{filename:"/lib/python3.9/site-packages/skimage/viewer/tests/test_widgets.py",start:649093,end:652571,audio:0},{filename:"/lib/python3.9/site-packages/skimage/viewer/tests/test_plugins.py",start:652571,end:658301,audio:0},{filename:"/lib/python3.9/site-packages/skimage/viewer/tests/test_utils.py",start:658301,end:659458,audio:0},{filename:"/lib/python3.9/site-packages/skimage/graph/tests/test_pixel_graph.py",start:659458,end:661248,audio:0},{filename:"/lib/python3.9/site-packages/skimage/graph/tests/__init__.py",start:661248,end:661248,audio:0},{filename:"/lib/python3.9/site-packages/skimage/graph/tests/test_connect.py",start:661248,end:663676,audio:0},{filename:"/lib/python3.9/site-packages/skimage/graph/tests/test_anisotropy.py",start:663676,end:665790,audio:0},{filename:"/lib/python3.9/site-packages/skimage/graph/tests/test_spath.py",start:665790,end:666669,audio:0},{filename:"/lib/python3.9/site-packages/skimage/graph/tests/test_mcp.py",start:666669,end:672796,audio:0},{filename:"/lib/python3.9/site-packages/skimage/graph/tests/test_heap.py",start:672796,end:673898,audio:0},{filename:"/lib/python3.9/site-packages/skimage/graph/tests/test_flexible.py",start:673898,end:675595,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_convex_hull.py",start:675595,end:682119,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_footprints.py",start:682119,end:688795,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/__init__.py",start:688795,end:688795,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_skeletonize.py",start:688795,end:697983,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_skeletonize_3d.py",start:697983,end:704531,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_max_tree.py",start:704531,end:727188,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_gray.py",start:727188,end:737960,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_flood_fill.py",start:737960,end:746172,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_misc.py",start:746172,end:755658,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_binary.py",start:755658,end:761981,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_reconstruction.py",start:761981,end:767600,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_extrema.py",start:767600,end:794836,audio:0},{filename:"/lib/python3.9/site-packages/skimage/morphology/tests/test_util.py",start:794836,end:799361,audio:0},{filename:"/lib/python3.9/site-packages/skimage/color/tests/test_adapt_rgb.py",start:799361,end:802110,audio:0},{filename:"/lib/python3.9/site-packages/skimage/color/tests/__init__.py",start:802110,end:802110,audio:0},{filename:"/lib/python3.9/site-packages/skimage/color/tests/test_colorlabel.py",start:802110,end:813385,audio:0},{filename:"/lib/python3.9/site-packages/skimage/color/tests/test_colorconv.py",start:813385,end:850713,audio:0},{filename:"/lib/python3.9/site-packages/skimage/color/tests/test_delta_e.py",start:850713,end:857861,audio:0},{filename:"/lib/python3.9/site-packages/skimage/metrics/tests/__init__.py",start:857861,end:857861,audio:0},{filename:"/lib/python3.9/site-packages/skimage/metrics/tests/test_structural_similarity.py",start:857861,end:867160,audio:0},{filename:"/lib/python3.9/site-packages/skimage/metrics/tests/test_segmentation_metrics.py",start:867160,end:868816,audio:0},{filename:"/lib/python3.9/site-packages/skimage/metrics/tests/test_set_metrics.py",start:868816,end:874640,audio:0},{filename:"/lib/python3.9/site-packages/skimage/metrics/tests/test_simple_metrics.py",start:874640,end:879647,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_random_walker.py",start:879647,end:902005,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_quickshift.py",start:902005,end:904130,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_morphsnakes.py",start:904130,end:910066,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/__init__.py",start:910066,end:910066,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_watershed.py",start:910066,end:934208,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_expand_labels.py",start:934208,end:940431,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_active_contour_model.py",start:940431,end:946971,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_boundaries.py",start:946971,end:952445,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_slic.py",start:952445,end:970620,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_join.py",start:970620,end:977834,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_chan_vese.py",start:977834,end:981499,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_felzenszwalb.py",start:981499,end:984769,audio:0},{filename:"/lib/python3.9/site-packages/skimage/segmentation/tests/test_clear_border.py",start:984769,end:991247,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_warnings.py",start:991247,end:992498,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/__init__.py",start:992498,end:992498,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_geometry.py",start:992498,end:994638,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_coord.py",start:994638,end:997892,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_version_requirements.py",start:997892,end:998968,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_interpolation.py",start:998968,end:1000104,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_utils.py",start:1000104,end:1009477,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_safe_as_int.py",start:1009477,end:1011149,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_testing.py",start:1011149,end:1014116,audio:0},{filename:"/lib/python3.9/site-packages/skimage/_shared/tests/test_fast_exp.py",start:1014116,end:1014616,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_fit.py",start:1014616,end:1031276,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_ccomp.py",start:1031276,end:1040840,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/__init__.py",start:1040840,end:1040840,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_polygon.py",start:1040840,end:1043111,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_label.py",start:1043111,end:1044894,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_marching_cubes.py",start:1044894,end:1052156,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_regionprops.py",start:1052156,end:1078841,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_find_contours.py",start:1078841,end:1084065,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_pnpoly.py",start:1084065,end:1085093,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_entropy.py",start:1085093,end:1085493,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_moments.py",start:1085493,end:1093467,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_blur_effect.py",start:1093467,end:1095252,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_profile.py",start:1095252,end:1102910,audio:0},{filename:"/lib/python3.9/site-packages/skimage/measure/tests/test_block.py",start:1102910,end:1107293,audio:0},{filename:"/lib/python3.9/site-packages/doc/ext/tests/__init__.py",start:1107293,end:1107293,audio:0},{filename:"/lib/python3.9/site-packages/doc/ext/tests/test_notebook_doc.py",start:1107293,end:1107977,audio:0}],remote_package_size:508574,package_uuid:"35f3e572-5339-4d3f-86f7-d952f18843d7"})})();
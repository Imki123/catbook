"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/catbook/expo-service-worker.js",{scope:"/catbook/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}));
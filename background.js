function onBeforeRequestListener(details){
  if (details.method == 'GET'){
    var str = decodeURIComponent(details.url);
    var matches = str.match(/<\+*script.*>/i);
    if (matches){
      console.log('url containing script tag ' + details.url);
      // alert('Check your input');
      return{cancel:true};
      // return {
      //   redirectUrl: originUrl
      // };
    }
  }
  else{
    var formData = details.requestBody.formData;
    let cancel = false;
    if(formData) {
      Object.values(formData).forEach( value=> {
        var str = String(value);
        var matches = str.match(/<\s*script.*>/i);
        if (matches){
          console.log('Post data containing script tag is '+value);
          // alert('Check your input');
          cancel = true;
        }
      });
    }
    // alert(cancel);
    return {cancel: cancel};
  }
}


chrome.webRequest.onBeforeRequest.addListener(
  onBeforeRequestListener,    //function
  {urls:["<all_urls>"]},      //object
  [ "blocking", "requestBody"]               //extraInfoSpec
);

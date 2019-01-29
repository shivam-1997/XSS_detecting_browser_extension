# XSS_Detecting_Browser_Extension

Inlcuding script tag in the input field is one of the XSS(Cross Side Scripting) techniques to inject malicious code to server side.
For eg. Let the Attacker is signing up for any website and then in the name field he/she writes **" ... <script> [malicious code] </script> ... "** and submits the form
	Almost all browsers today have checks to filter out such inputs, morever now the input is  handked with caution at the server side, but let's say that no filtering is done then whenver the server will display the user name the malicious code will run at the server side and the  results will also be  displayed at Atttacker's  side.
This extension is just a simple approach how to check and block such inputs with the help of an extensions.
This extension is made for Google Chrome but can be used for any other browser with minor tweaks.

**Note:** Start Google Chrome without XSS auditor using command **_google-chrome --disable-XSS-auditor_**

## Links for the relevant websites are provided below:

How to start with creating APIs for Google Chrome:
https://developer.chrome.com/extensions/getstarted

Reading material on webRequets API:
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest

Reading material on how to access the data sent via POST method:
https://spin.atomicobject.com/2017/08/18/chrome-extension-form-data/

And of course, https://www.w3schools.com

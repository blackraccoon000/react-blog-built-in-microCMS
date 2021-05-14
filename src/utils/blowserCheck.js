const blowserCheck = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();

  if(userAgent.indexOf('msie') != -1 ||
          userAgent.indexOf('trident') != -1) {
      console.log('Internet Explorerをお使いですね');
  } else if(userAgent.indexOf('edge') != -1) {
      console.log('Edgeをお使いですね');
  } else if(userAgent.indexOf('chrome') != -1) {
      console.log('Google Chromeをお使いですね');
  } else if(userAgent.indexOf('safari') != -1) {
      console.log('Safariをお使いですね');
  } else if(userAgent.indexOf('firefox') != -1) {
      console.log('FireFoxをお使いですね');
  } else if(userAgent.indexOf('opera') != -1) {
      console.log('Operaをお使いですね');
  } else if(userAgent.indexOf('iphone') != -1) {
      console.log('iPhoneをお使いですね');
  } else if(userAgent.indexOf('ipad') != -1) {
      console.log('iPadをお使いですね');
  } else if(userAgent.indexOf('android') != -1) {
      if(userAgent.indexOf('mobile') != -1) {
          console.log('androidのスマホをお使いですね');
      } else {
          console.log('androidのタブレットをお使いですね');
      }
  }
}

export default blowserCheck

// Internet Explorer	MSIE または Trident
// Edge	Edge
// Google Chrome	Chrome
// FireFox	Firefox
// Safari	Safari
// Opera	Opera

// = window.navigator.appVersion.toLowerCase();
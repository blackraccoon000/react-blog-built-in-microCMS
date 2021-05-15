const consoleLog = () => {
  const titleStyle = 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 30px; color: #444; padding: 16px 0 0; line-height: 50px; font-weight: bold'
  const commentStyle = 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 13px; color: #787878; padding: 16px 0 0; line-height: 13px;'
  const linkStyle = 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 13px; color: #fbb7b7; padding: 16px 0 0; line-height: 10px;'

  console.log('%c---- Comments --------------------------------------------------------------------------------------------------------', commentStyle)
  console.log('%cPlayWell Siteへようこそ', titleStyle)
  console.log('%cこのサイトはReact&Reduxで作製されています', commentStyle)
  console.log('%cサイト作製にあたってのGithub/Storybookも公開しています', commentStyle)
  console.log('%cよろしければ、ご確認の上、コメントなどよろしくお願いいたします', commentStyle)
  console.log('%c---- Links -----------------------------------------------------------------------------------------------------------', commentStyle)
  console.log('%cGithub:_https://github.com/blackraccoon000/react-blog-built-in-microCMS', linkStyle)
  console.log('%cChromium:_https://www.chromatic.com/library?appId=6099f15c1b8f98003be928e5', linkStyle)
  console.log('%cStorybook:_https://6099f15c1b8f98003be928e5-qtvabdmech.chromatic.com/', linkStyle)
  console.log('%c---- Logs ------------------------------------------------------------------------------------------------------------', commentStyle)
}

export default consoleLog
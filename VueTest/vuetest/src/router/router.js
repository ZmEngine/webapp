
const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const minitTest = r => require.ensure([], () => r(require('../pages/minitTest')), 'minitTest')

export default [
  // 地址为空时跳转home页面
  {
    path: '/',
    redirect: '/home'
  },
  // 首页城市列表页
  {
    path: '/home',
    component: home
  },
  // minitTest
  {
    path: '/minitTest',
    component: minitTest
  }
]

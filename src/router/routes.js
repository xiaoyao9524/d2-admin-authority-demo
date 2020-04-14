import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'page1',
        name: 'page1',
        meta: {
          title: '页面 1',
          auth: true
        },
        component: _import('demo/page1')
      },
      {
        path: 'page2',
        name: 'page2',
        meta: {
          title: '页面 2',
          auth: true
        },
        component: _import('demo/page2')
      },
      {
        path: 'page3',
        name: 'page3',
        meta: {
          title: '页面 3',
          auth: true
        },
        component: _import('demo/page3')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  },
  {
    path: '/MovieManager',
    name: 'MovieManager',
    meta: {
      title: '电影管理',
      auth: true
    },
    component: layoutHeaderAside,
    children: [
      {
        path: '/MovieManager/MovieList',
        name: 'MovieList',
        meta: {
          title: '电影列表',
          auth: true
        },
        component: _import('MovieManager/MovieList')
      },
      {
        path: '/MovieManager/MovieTagManager',
        name: 'MovieTagManager',
        meta: {
          title: '电影标签管理',
          auth: true
        },
        component: _import('MovieManager/MovieTagManager')
      },
      {
        path: '/MovieManager/MovieReview',
        name: 'MovieReview',
        meta: {
          title: '电影审核',
          auth: true
        },
        component: _import('MovieManager/MovieReview')
      }
    ]
  },
  {
    path: '/MusicManager',
    name: 'MusicManager',
    meta: {
      title: '音乐管理',
      auth: true
    },
    component: layoutHeaderAside,
    children: [{
      path: '/MusicManager/MusicList',
      name: 'MusicList',
      meta: {
        title: '音乐列表',
        auth: true
      },
      component: _import('MusicManager/MusicList')
    },
    {
      path: '/MusicManager/MusicTagManager',
      name: 'MovieTagManager',
      meta: {
        title: '音乐标签管理',
        auth: true
      },
      component: _import('MusicManager/MusicTagManager')
    },
    {
      path: '/MusicManager/MusicReview',
      name: 'MusicReview',
      meta: {
        title: '音乐审核',
        auth: true
      },
      component: _import('MusicManager/MusicReview')
    }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]

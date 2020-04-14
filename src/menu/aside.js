// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' }
    ]
  },
  {
    title: '电影管理',
    icon: 'folder-o',
    children: [
      { path: '/MovieManager/MovieList', title: '电影列表' },
      { path: '/MovieManager/MovieTagManager', title: '电影标签管理' },
      { path: '/MovieManager/MovieReview', title: '电影审核' }
    ]
  },
  {
    title: '音乐管理',
    icon: 'folder-o',
    children: [
      { path: '/MusicManager/MusicList', title: '音乐列表' },
      { path: '/MusicManager/MusicTagManager', title: '音乐标签管理' },
      { path: '/MusicManager/MusicReview', title: '音乐审核' }
    ]
  }
]

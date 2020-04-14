const userDB = [
  {
    username: 'admin',
    password: 'admin',
    uuid: 'admin-uuid',
    name: 'Admin',
    routers: [
      {
        id: 1,
        pid: 0,
        path: '/MovieManager',
        meta: {
          title: '电影管理',
          auth: true
        }
      },
      {
        id: 2,
        pid: 1,
        path: '/MovieManager/MovieList',
        meta: {
          title: '电影列表',
          auth: true
        }
      },
      {
        id: 3,
        pid: 1,
        path: '/MovieManager/MovieTagManager',
        meta: {
          title: '电影标签管理',
          auth: true
        }
      },
      {
        id: 4,
        pid: 1,
        path: '/MovieManager/MovieReview',
        meta: {
          title: '电影审核',
          auth: true
        }
      },
      {
        id: 5,
        pid: 0,
        path: '/MusicManager',
        meta: {
          title: '音乐管理',
          auth: true
        }
      },
      {
        id: 6,
        pid: 5,
        path: '/MusicManager/MusicList',
        meta: {
          title: '音乐列表',
          auth: true
        }
      },
      {
        id: 7,
        pid: 5,
        path: '/MusicManager/MusicReview',
        meta: {
          title: '音乐审核',
          auth: true
        }
      },
      {
        id: 8,
        pid: 5,
        path: '/MusicManager/MusicTagManager',
        meta: {
          title: '音乐标签管理',
          auth: true
        }
      }
    ]
  },
  {
    username: 'editor',
    password: 'editor',
    uuid: 'editor-uuid',
    name: '电影编辑',
    routers: [
      {
        id: 1,
        pid: 0,
        path: '/MovieManager',
        meta: {
          title: '电影管理',
          auth: true
        }
      },
      {
        id: 2,
        pid: 1,
        path: '/MovieManager/MovieList',
        meta: {
          title: '电影列表',
          auth: true
        }
      },
      {
        id: 3,
        pid: 1,
        path: '/MovieManager/MovieTagManager',
        meta: {
          title: '电影标签管理',
          auth: true
        }
      },
      {
        id: 4,
        pid: 1,
        path: '/MovieManager/MovieReview',
        meta: {
          title: '电影审核',
          auth: true
        }
      }
    ]
  },
  {
    username: 'user1',
    password: 'user1',
    uuid: 'user1-uuid',
    name: '音乐编辑',
    routers: [
      {
        id: 5,
        pid: 0,
        path: '/MusicManager',
        meta: {
          title: '音乐管理',
          auth: true
        }
      },
      {
        id: 6,
        pid: 5,
        path: '/MusicManager/MusicList',
        meta: {
          title: '音乐列表',
          auth: true
        }
      },
      {
        id: 7,
        pid: 5,
        path: '/MusicManager/MusicReview',
        meta: {
          title: '音乐审核',
          auth: true
        }
      },
      {
        id: 8,
        pid: 5,
        path: '/MusicManager/MusicTagManager',
        meta: {
          title: '音乐标签管理',
          auth: true
        }
      }
    ]
  }
]

export default [
  {
    path: '/api/login',
    method: 'post',
    handle({ body }) {
      const user = userDB.find(e => e.username === body.username && e.password === body.password)
      if (user) {
        return {
          code: 0,
          msg: '登录成功',
          data: {
            ...user,
            token: 'token-12345'
          }
        }
      } else {
        return {
          code: 401,
          msg: '用户名或密码错误',
          data: {}
        }
      }
    }
  }
]

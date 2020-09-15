const routes: Array<{
    exact: boolean
    path: string
    name: string
    load: () => Promise<any>
}> = [
        {
            exact: true,
            path: '/',
            name: '首页',
            load: () => import(/* webpackChunkName: 'home' */ './home')
        },
        {
            exact: false,
            path: '/learn',
            name: '五十音学习',
            load: () => import(/* webpackChunkName: 'learn' */ './learn')
        },
        {
            exact: false,
            path: '/practice',
            name: '五十音练习',
            load: () => import(/* webpackChunkName: 'practice' */ './practice')
        }
    ]

export default routes
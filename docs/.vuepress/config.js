module.exports = {
	locales: {
		'/': {
		  lang: 'zh-CN'
		}
	},
	theme: 'reco',
	title: 'trouble maker',
	description: 'the way to make game.',
	base: '/blog/',
	themeConfig: {
        nav: [
            { text: '首页', link: '/' },
        ],
		sidebar: [
		    {
                title: 'oops+tsprc',
                path: '/000_oops/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "centos7.6搭建node最新环境", path: "/000_oops/00_centos7.6搭建node最新环境" },
					{ title: "centos7.6搭建nginx文件服务器", path: "/000_oops/01_centos7.6搭建nginx文件服务器" },
					{ title: "centos7.6安装mongodb", path: "/000_oops/02_centos7.6安装mongodb" },
					{ title: "cocos打包设定远程加载资源", path: "/000_oops/03_cocos打包设定远程加载资源" },
					{ title: "centos7.6使用nginx隐藏服务端口", path: "/000_oops/04_centos7.6使用nginx隐藏服务端口" },
                ]
            },
			{
                title: 'cocos-creator',
                path: '/001_ccc/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "cocos creator 加载扩展库", path: "/001_ccc/00_ccc_加载扩展库" },
					{ title: "cocos creator 安装依赖库", path: "/001_ccc/01_ccc_安装依赖库" },
					{ title: "cocos creator 空工程目录", path: "/001_ccc/02_ccc_空工程目录" },
					{ title: "cocos creator 引入微信api", path: "/001_ccc/03_ccc_引入微信api" },
					{ title: "cocos creator 获取微信openid", path: "/001_ccc/04_ccc_获取微信openid" },
                ]
            },
			{
                title: 'unreal-engine-cpp',
                path: '/002_uec/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "unreal engine 常用代码", path: "/002_uec/00_uec_常用代码" },
					{ title: "unreal engine 引用毛发启动崩溃", path: "/002_uec/01_uec_引用毛发启动崩溃" },
					{ title: "unreal engine ue5导入kbe插件", path: "/002_uec/02_uec_ue5导入kbe插件" },
                ]
            },
			{
                title: 'unity-engine-c#',
                path: '/003_unity/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "motion matching for unity 使用", path: "/003_unity/00_untiy_MotionMatching使用" },
					{ title: "FinalIK 忽略了石头", path: "/003_unity/01_untiy_FinalIK忽略了石头" },
                ]
            },
			{
                title: 'tools-vs',
                path: '/004_vs/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "错误MSB8041", path: "/004_vs/00_vs_错误MSB8041" },
                ]
            },
			{
                title: 'sundry',
                path: '/999_sundry/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "网站合集", path: "/999_sundry/00_网站合集" },
					{ title: "工具合集", path: "/999_sundry/01_工具合集" },
					{ title: "文章合集", path: "/999_sundry/02_文章合集" },
                ]
            },
        ]
	}
}
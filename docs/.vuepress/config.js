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
                collapsable: true, // 是否折叠
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
                collapsable: true, // 是否折叠
                children: [
                    { title: "cocos creator 加载扩展库", path: "/001_ccc/00_ccc_加载扩展库" },
					{ title: "cocos creator 安装依赖库", path: "/001_ccc/01_ccc_安装依赖库" },
					{ title: "cocos creator 空工程目录", path: "/001_ccc/02_ccc_空工程目录" },
					{ title: "cocos creator 引入微信api", path: "/001_ccc/03_ccc_引入微信api" },
					{ title: "cocos creator 获取微信openid", path: "/001_ccc/04_ccc_获取微信openid" },
                ]
            },
        ]
	}
}
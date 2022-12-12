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
                title: 'centos7.6运行ts服务器',
                path: '/chapter_000/',
                collapsable: true, // 是否折叠
                children: [
                    { title: "centos7.6搭建node最新环境", path: "/chapter_000/00_centos7.6搭建node最新环境" },
					{ title: "centos7.6搭建nginx文件服务器", path: "/chapter_000/01_centos7.6搭建nginx文件服务器" },
					{ title: "centos7.6安装mongodb", path: "/chapter_000/02_centos7.6安装mongodb" },
					{ title: "cocos打包设定远程加载资源", path: "/chapter_000/03_cocos打包设定远程加载资源" },
					{ title: "centos7.6使用nginx隐藏服务端口", path: "/chapter_000/04_centos7.6使用nginx隐藏服务端口" },
                ]
            },
			{
                title: 'cocos creator采坑之路',
                path: '/chapter_001/',
                collapsable: true, // 是否折叠
                children: [
                    { title: "cocos creator 加载扩展库", path: "/chapter_001/00_ccc_加载扩展库" },
					{ title: "cocos creator 安装依赖库", path: "/chapter_001/01_ccc_安装依赖库" },
                ]
            },
        ]
	}
}
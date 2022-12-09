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
                ]
            },
            {
                title: '暖男大哥',
                path: '/chapter_999/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "弥天绿帽", path: "/chapter_999/over" }
                ]
            },
        ]
	}
}
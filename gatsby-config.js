require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Web Developer`,
    titleTemplate: `%s | Portfolio%s | ポートフォリオ`,
    description: `こちらは Web Developer \'Yuma Kitamura\' ポートフォリオです。`,
    biography: `ネット上では 自由人、jiyuujin と名乗って生息しています。誕生日は1988年11月04日。大阪府豊中市生まれ。性別は男性。現在は関西圏（京都や大阪）を中心に活動しています。`,
    position: `Front-End Engineer,Web Developer,HR Adviser`,
    workExperience: `自分のキャリアのスタートはiOSネイティブアプリのエンジニアとして。これまでのキャリアの中でiOSネイティブアプリエンジニアとして業務を通じ基礎的なコーディングを取得、Webを扱うサーバサイドで足りていないと言った環境も相まってjQueryを始めとしたCSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み込んでいきました。`,
    author: `Yuma Kitamura`,
    locale: `Osaka, Kyoto in Japan`,
    lonlat: `35.003238° N, 135.750389° E`,
    siteUrl: `https://yuukit.me/`,
    image: `src/images/bakeneko2.png`,
    blogName: `Web猫ブログ`,
    blogUrl: `https://webneko.dev/`,
    twitterUsername: `@jiyuujin`,
    twitterUrl: `https://twitter.com/jiyuujinlab`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ja`],
        defaultLanguage: `ja`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/Redirect/index.tsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://yuukit.me/`,
        policy: [
          {
            userAgent: `*`,
            allow: `/`
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-167986295-1`,
      },
    },
    // `gatsby-plugin-typegen`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Developer - Yuma Kitamura`,
        short_name: `Portfolio`,
        lang: `en`,
        start_url: `/`,
        icon: `src/static/icons/bakeneko2.png`,
        icons: [
          {
            src: `icons/bakeneko2-72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `icons/bakeneko2-96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `icons/bakeneko2-128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: `icons/bakeneko2-144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `icons/bakeneko2-152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `icons/bakeneko2-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icons/bakeneko2-384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `icons/bakeneko2-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          }
        ],
        theme_color: `#ffbb33`,
        background_color: `#ffbb33`,
        display: `standalone`,
      },
    },
  ],
}

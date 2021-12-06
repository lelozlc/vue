export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "navbar": [
    {
      "text": "导航",
      "children": [
        {
          "text": "导航",
          "link": "/guide/"
        }
      ]
    },
    {
      "text": "建站",
      "link": "/buildMywebsite/"
    },
    {
      "text": "note",
      "children": [
        {
          "text": "笔记",
          "link": "/note/",
          "activeMatch": "^/note"
        },
        {
          "text": "Active on /foo/",
          "link": "/not-foo/",
          "activeMatch": "^/foo/"
        }
      ]
    }
  ],
  "sidebar": {
    "collapsable": false,
    "/guide/": [
      {
        "text": "导航",
        "children": [
          "/guide/README.md",
          "/guide/npm常用命令.md"
        ]
      }
    ],
    "/buildMywebsite/": [
      {
        "text": "建站思路",
        "children": [
          {
            "text": "思路",
            "link": "/buildMywebsite/readme.md"
          },
          {
            "text": "vuePress",
            "children": [
              "/buildMywebsite/vuePress/vuePressIssuse.md",
              "/buildMywebsite/vuePress/markDownIssuse.md"
            ]
          },
          {
            "text": "前端",
            "children": [
              "/buildMywebsite/vueIssues/vueIssues.md",
              "/buildMywebsite/vuePress/elementUI.md"
            ]
          }
        ]
      }
    ],
    "/note/": [
      {
        "text": "问题笔记",
        "children": [
          "/note/jvm.md",
          "/note/readme.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

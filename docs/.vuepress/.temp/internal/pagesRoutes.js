import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-19466195","/buildMywebsite/","新建网站流程及思路",["/buildMywebsite/index.html","/buildMywebsite/readme.md"]],
  ["v-2c8e7398","/guide/npm%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","npm常用命令",["/guide/npm常用命令.html","/guide/npm%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4","/guide/npm常用命令.md","/guide/npm%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.md"]],
  ["v-fffb8e28","/guide/","",["/guide/index.html","/guide/README.md"]],
  ["v-59fb4bfc","/note/jvm.html","",["/note/jvm","/note/jvm.md"]],
  ["v-15054f24","/note/","",["/note/index.html","/note/readme.md"]],
  ["v-71750ced","/buildMywebsite/vueIssues/elementUI.html","elementUI",["/buildMywebsite/vueIssues/elementUI","/buildMywebsite/vueIssues/elementUI.md"]],
  ["v-22ec4d9d","/buildMywebsite/vueIssues/vueIssues.html","vueIssuse",["/buildMywebsite/vueIssues/vueIssues","/buildMywebsite/vueIssues/vueIssues.md"]],
  ["v-9c590fe2","/buildMywebsite/vuePress/markDownIssuse.html","markDownIssuse",["/buildMywebsite/vuePress/markDownIssuse","/buildMywebsite/vuePress/markDownIssuse.md"]],
  ["v-24633e01","/buildMywebsite/vuePress/vuePressIssuse.html","vuePressIssuse",["/buildMywebsite/vuePress/vuePressIssuse","/buildMywebsite/vuePress/vuePressIssuse.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

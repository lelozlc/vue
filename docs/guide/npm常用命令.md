---
lang: zh-CN
title: npm常用命令
description: 记录一些npm遇到的问题,方便下次查找
---

### npm常用命令

#### 升级npm

```ts:no-line-numbers question
npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1
```

```ts:no-line-numbers npm
npm install -g npm
```

#### 降级npm

```ts:no-line-numbers question
npm error ERESOLVE unable to resolve dependency tree
```

```ts:no-line-numbers npm
sudo npm install npm@4 -g
```

---

permalinkPattern: :year/:month/:day/:npmIssues.html

---


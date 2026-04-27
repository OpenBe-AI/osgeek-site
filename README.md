# 上海开源极客有限公司官网

Vite + React 单页官网，面向 Vercel 静态部署。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 发布

GitHub 登录恢复后：

```bash
gh auth login -h github.com
gh repo create osgeek-site --public --source=. --remote=origin --push
```

Vercel 登录后：

```bash
npm i -g vercel
vercel
vercel --prod
```

域名建议：

- `osgeek.cn` 和 `www.osgeek.cn` 指向官网
- `api.osgeek.cn` 指向后端 API

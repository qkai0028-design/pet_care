# 毛绒护理屋

宠物洗护与美容门店的单页官网，包含服务介绍、价格套餐和在线预约。

## 技术栈

- [Next.js](https://nextjs.org/) 16（App Router）
- React 19 + TypeScript
- PostgreSQL（Supabase）存储预约数据

## 项目结构

```
pet_care/
├── app/                  # Next.js App Router
│   ├── api/bookings/     # 预约提交 API
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 首页
├── components/           # React 组件
│   └── booking-form.tsx  # 预约表单
├── lib/                  # 服务端工具
│   └── postgres.ts       # 数据库连接
├── public/assets/        # 静态资源
└── supabase/             # 数据库迁移 SQL
    └── appointments.sql
```

## 本地开发

1. 安装依赖：

   ```bash
   npm install
   ```

2. 复制环境变量并按需填写数据库连接：

   ```bash
   cp .env.example .env.local
   ```

3. 在 Supabase（或其他 PostgreSQL）中执行 `supabase/appointments.sql` 创建预约表。

4. 启动开发服务器：

   ```bash
   npm run dev
   ```

   浏览器访问 [http://localhost:3000](http://localhost:3000)。

## 环境变量

| 变量名         | 说明                          |
| -------------- | ----------------------------- |
| `POSTGRES_URL` | PostgreSQL 连接字符串（必填） |

## 常用命令

| 命令           | 说明         |
| -------------- | ------------ |
| `npm run dev`  | 本地开发     |
| `npm run build`| 生产构建     |
| `npm run start`| 启动生产服务 |

## 部署

项目配置了 [Netlify](https://www.netlify.com/) 部署（见 `netlify.toml`）。部署时在 Netlify 后台设置 `POSTGRES_URL` 环境变量即可。

## 许可证

Private

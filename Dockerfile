# 基于Node.js镜像作为基础
FROM node:latest

# 设置工作目录
WORKDIR /app

# 将依赖文件复制到工作目录
COPY package.json package-lock.json ./

# 安装依赖
RUN npm install

# 将应用程序代码复制到工作目录
COPY . .

# 构建应用程序
RUN npm run build

# 暴露端口（如果需要）
EXPOSE 5173

# 运行应用程序
CMD ["npm", "run","dev"]

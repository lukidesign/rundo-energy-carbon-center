# RunDo能碳管理平台   RunDo Energy Carbon Center

**当前版本：** v3.3.0
**主文件：** `index-standalone.html`
**Figma 设计稿：** [Des_CC_FigmaBuilding3D](https://www.figma.com/design/zOsnUZun5PyXPgfz926Agg/)

---

## 项目简介

面向建筑能耗管理场景的智慧城市可视化平台，提供多层级视图（Campus / Building / Floor / Zone）的能耗数据展示与 AI 优化建议。

## 快速启动

无需构建，直接用本地服务器打开主文件：

```bash
python3 -m http.server 8765
# 访问 http://localhost:8765/index-standalone.html
```

## 技术栈

- React 18（Babel Standalone，浏览器端 JSX 编译）
- Three.js（Globe3D 地球仪 + 3D 建筑模型）
- Chart.js 4.4.0 + chartjs-plugin-datalabels
- 单文件 HTML，零构建依赖

## 目录结构

```
smart-city-platform/
├── index-standalone.html   # 主文件（全部代码）
├── build3dimg/             # Zone tab 楼层图片
├── zbuilding3dimg/         # Building tab 楼层图片
├── city-view.mp4           # 启动动画视频
├── city-overview.png       # 启动视频海报帧
├── zone-view.png           # Zone tab 背景图
├── app-icon.png            # 右上角应用图标
└── docs/                   # 开发文档（MD + PDF）
    ├── 开发进度报告.md / .pdf
    └── 需求分析文档.md / .pdf
```

## 文档

- [开发进度报告](./docs/开发进度报告.md)
- [需求分析文档（PRD）](./docs/需求分析文档.md)

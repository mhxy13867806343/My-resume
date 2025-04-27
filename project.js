// 动态渲染项目卡片数据
const projects = [
  {
    title: 'Vant 新手引导组件（newbie-guide）',
    link: 'https://github.com/mhxy13867806343/vant/tree/main/packages/vant/src/newbie-guide',
    stack: 'Vue3, Vant, JavaScript/TypeScript',
    highlights: [
      '个人独立开发，适配 Vant 移动端 UI 框架',
      '支持多步引导、遮罩高亮、弹窗提示等交互',
      '易于集成，适合新手引导、功能教学场景',
      '源码开源，便于二次开发和定制'
    ]
  },
  {
    title: 'React Hooks + Vite Groundhopping',
    link: 'https://mhxy13867806343.github.io/react-hooks.-vite-Groundhopping/',
    stack: 'React Hooks, Vite, JavaScript',
    highlights: [
      '使用 React Hooks 管理组件状态，减少类组件的复杂性',
      '借助 Vite 实现快速打包与热更新，提升开发效率与开发体验',
      '结构清晰，注重交互流畅性，提升了用户体验'
    ]
  },
  {
    title: 'Vue TS WeChat Moments',
    link: 'https://mhxy13867806343.github.io/vue-ts-wechatmoments/#/',
    stack: 'Vue3, TypeScript, Vite',
    highlights: [
      '模拟微信朋友圈功能，涵盖发布、评论、点赞等常见交互',
      '采用 TypeScript 提高类型安全，增强代码的可维护性',
      '与 Vite 配合使用，提供高效的构建与开发体验'
    ]
  },
  {
    title: 'VuePress Blog Demo',
    link: 'https://mhxy13867806343.github.io/vuepressBlogDemo/',
    stack: 'VuePress, Markdown',
    highlights: [
      '使用 VuePress 构建的静态博客，支持 Markdown 写作，适合技术文档或个人博客',
      '高度可定制化，方便添加主题和插件',
      '简单易部署，适合快速搭建知识库或文档平台'
    ]
  },
  {
    title: '前端导航栏（front-end-navigation-bar）',
    link: 'https://mhxy13867806343.github.io/front-end-navigation-bar/',
    stack: 'Vue, JavaScript',
    highlights: []
  },
  {
    title: 'Vue Vite LOL Hero',
    link: 'https://mhxy13867806343.github.io/vue-vite-lol-hreo/#/heroes',
    stack: 'Vue3, Vite',
    highlights: []
  },
  // 公司项目
  {
    title: 'Q店小铺商户管理系统（H5端，微信登录）',
    link: 'https://h5.nbqy.shop/#/login',
    stack: 'Vue 全家桶（Vue.js, Vuex, Vue Router）',
    highlights: [
      '基于 Vue.js 全家桶开发，支持商户管理、商品发布、订单管理等功能',
      '实现微信快捷登录，响应式布局，兼容多设备',
      '负责页面结构与样式、全局状态管理、接口对接与性能优化'
    ]
  },
  {
    title: '忆店思家商户管理系统（H5端，微信登录）',
    link: 'https://h5.sccxzj.com/#/login',
    stack: 'Vue 全家桶（Vue.js, Vuex, Vue Router）',
    highlights: [
      '支持商户商品、订单、账户管理，集成微信登录',
      '负责页面开发、动态路由权限、数据优化与渲染提升'
    ]
  },
  {
    title: '超艺智能（H5端，微信登录）',
    link: 'https://h5.hbg99.cn/#/login',
    stack: 'Vue 全家桶（Vue.js, Vuex, Vue Router）',
    highlights: [
      '智能设备管理系统，支持设备控制与状态监测',
      '微信登录集成，负责设备控制、数据交互与性能优化'
    ]
  },
  {
    title: '房经济微信端小程序（ERP后台管理系统）',
    link: '',
    stack: 'Uni-app、Vue.js',
    highlights: [
      '微信小程序端 ERP，商品、订单、客户管理',
      '负责前端开发与数据同步、优化交互体验'
    ]
  },
  {
    title: '临平大屏项目',
    link: 'https://hczj.lpxxfw.cn:8090/#/',
    stack: 'Vue.js, 大屏可视化',
    highlights: [
      '政务大屏数据可视化项目，负责前端页面与交互开发',
      '多端适配与性能优化'
    ]
  },
  {
    title: '浙江里办微信端',
    link: '',
    stack: 'Vue.js, H5, 微信小程序',
    highlights: [
      '负责微信端和“浙江里办”平台的框架搭建与功能开发',
      '对接微信服务接口，优化页面展示及交互'
    ]
  },
  // ...如需更多公司项目可继续补充
  // ...你可以继续添加更多项目
  {
    title: '工时管理系统',
    link: 'http://47.105.117.180/login',
    stack: '工时管理系统',
    highlights: [
      '工时管理系统',
      '体验账号：admin / 13579admin',
      '可用于演示、对比或业务集成场景'
    ]
  },
  {
    title: '西百购（微信小程序）',
    link: '',
    stack: '微信小程序（第三方系统）',
    highlights: [
      '第三方微信小程序订单系统，需微信搜索“西百购”体验',
      '适合移动端订单管理、业务对接演示',
      '可用于对比、集成或参考第三方小程序业务场景'
    ]
  },
];

function createProjectCard(project, idx) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.style.animationDelay = (idx * 0.06) + 's';

  const dot = document.createElement('div');
  dot.className = 'project-dot';
  card.appendChild(dot);

  const title = document.createElement('div');
  title.className = 'project-title-main';
  title.innerHTML = `<a class="project-link" href="${project.link}" target="_blank">${project.title}</a>`;
  card.appendChild(title);

  if (project.stack) {
    const stack = document.createElement('div');
    stack.className = 'project-stack';
    stack.textContent = project.stack;
    card.appendChild(stack);
  }

  if (project.highlights && project.highlights.length) {
    project.highlights.forEach(h => {
      const desc = document.createElement('div');
      desc.className = 'project-desc';
      desc.textContent = '· ' + h;
      card.appendChild(desc);
    });
  }

  return card;
}

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.project-timeline');
  projects.forEach((p, i) => {
    timeline.appendChild(createProjectCard(p, i));
  });
});

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getMemory, setMemory } from "@/utils/memory.ts";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  cn: {
    translation: {
      end: "",
      "not-found": "页面未找到",
      home: "首页",
      login: "登录",
      "login-require": "您需要登录才能使用此功能",
      logout: "登出",
      quota: "点数",
      "try-again": "重试",
      "invalid-token": "无效的令牌",
      "invalid-token-prompt": "请重试。",
      "login-failed": "登录失败",
      "login-failed-prompt": "登录失败！原因: {{reason}}",
      "login-success": "登录成功",
      "login-success-prompt": "您已成功登录。",
      "server-error": "服务器错误",
      "server-error-prompt": "登录出错，请重试。",
      "request-failed": "请求失败，请检查您的网络并重试。",
      close: "关闭",
      edit: "编辑",
      editor: "文本编辑",
      pricing: "更多计费详情参见模型定价表",
      true: "是",
      false: "否",
      unknown: "未知",
      "scroll-down": "滚至最新",
      broadcast: "公告",
      fatal: "应用崩溃",
      "download-fatal-log": "下载错误日志",
      "fatal-tips":
        "请您先检查您的网络，浏览器兼容性，尝试清除浏览器缓存并刷新页面。如果问题仍然存在，请将日志提供给开发者以便我们排查问题。",
      tag: {
        free: "免费",
        official: "官方",
        unstable: "不稳定",
        web: "联网",
        "high-quality": "高质量",
        "high-context": "高上下文",
        "high-price": "高定价",
        "open-source": "开源",
        "image-generation": "绘图",
        "multi-modal": "多模态",
        fast: "快速",
        "english-model": "英文模型",
      },
      market: {
        title: "模型市场",
        model: "探索更多模型",
        explore: "探索",
        search: "搜索模型名称或者简介",
      },
      conversation: {
        title: "对话",
        empty: "空空如也",
        "refresh-failed": "刷新失败",
        "refresh-failed-prompt": "请求出错，请重试。",
        "remove-title": "是否确定？",
        "remove-description": "此操作无法撤消。这将永久删除对话 ",
        "remove-all-title": "清除历史",
        "remove-all-description":
          "此操作无法撤消。这将永久删除所有对话，是否继续？",
        cancel: "取消",
        delete: "删除",
        "delete-conversation": "删除对话",
        "delete-success": "对话已删除",
        "delete-success-prompt": "对话已删除。",
        "delete-failed": "删除失败",
        "delete-failed-prompt": "删除对话失败，请检查您的网络并重试。",
      },
      chat: {
        web: "联网搜索",
        "web-aria": "切换网络搜索功能",
        placeholder: "写点什么... (Ctrl+Enter 发送)",
        recall: "历史复原",
        "recall-desc": "检测到您上次有未发送的消息，已经为您恢复。",
        "recall-cancel": "取消",
      },
      message: {
        copy: "复制消息",
        save: "保存为文件",
        use: "使用消息",
        stop: "暂停回答",
        restart: "重新回答",
        "copy-area": "复制选中区域",
      },
      "quota-description": "消息的点数支出",
      buy: {
        choose: "选择一个金额",
        other: "其他",
        "other-desc": "多少点数？",
        buy: "购买 {{amount}} 点数",
        dalle: "DALL·E AI 绘图",
        "dalle-free": "DALL·E 2 绘图永久免费",
        flex: "灵活计费",
        input: "输入",
        output: "输出",
        "learn-more": "了解更多",
        "dialog-title": "购买点数",
        "dialog-desc": "您确定要购买 {{amount}} 点数吗？",
        "dialog-cancel": "取消",
        "dialog-buy": "购买",
        success: "购买成功",
        "success-prompt": "您已成功购买 {{amount}} 点数。",
        failed: "购买失败",
        "failed-prompt":
          "购买点数失败。请确保您有足够的余额，您即将跳转到 deeptrain 钱包支付余额。",
        "gpt4-tip": "提示：web 联网版功能可能会带来更多的输入点数消耗",
        go: "前往",
      },
      pkg: {
        title: "礼包",
        go: "前往实名认证",
        cert: "实名认证礼包",
        "cert-desc": "实名认证后可获得 50 点数 （价值 5 元）",
        teen: "未成年人福利",
        "teen-desc":
          "实名认证后未成年人（18 周岁及以下）可额外获得 150 点数 （价值 15 元），并且获得每天 100 次免费使用 Claude 100k 模型额度",
        close: "关闭",
        state: {
          true: "已领取",
          false: "无法领取",
        },
      },
      sub: {
        title: "订阅",
        "quota-link": "寻求弹性计费？购买点数",
        "subscription-link": "寻求固定计费？订阅计划",
        "dialog-title": "订阅计划",
        free: "免费版",
        "free-price": "永久免费",
        pro: "专业版",
        "pro-price": "56 元/月",
        "free-gpt3": "GPT-3.5 (16k) 永久免费",
        "free-dalle": "DALL·E 2 绘图永久免费",
        "free-web": "联网搜索功能",
        "free-conversation": "对话存储记录",
        "free-api": "API 调用",
        "pro-mj": "Midjourney 每日免费绘图 10 次",
        "pro-gpt4": "GPT-4 每日请求 100 次",
        "pro-gpt4-desc": "(包含 GPT 4 Turbo, GPT 4V, GPT 4 DALLE)",
        "pro-claude": "Claude 100k 每日请求 100 次",
        "pro-service": "优先服务支持",
        "pro-thread": "并发数提升",
        enterprise: "企业版",
        "enterprise-service": "优先技术支持",
        "enterprise-sla": "SLA 保障",
        "enterprise-speed": "TPM 速率提升",
        "enterprise-security": "SOC-2 标准数据安全保障",
        "enterprise-data": "异地数据容灾备份",
        "enterprise-deploy": "支持私有化部署",
        "contact-sale": "联系销售",
        current: "当前计划",
        upgrade: "升级",
        renew: "续费",
        "cannot-select": "无法选择",
        "select-time": "选择订阅时间",
        price: "价格 {{price}} 元",
        expired: "订阅剩余天数",
        time: {
          1: "1个月",
          3: "3个月",
          6: "半年",
          12: "1年",
          36: "3年",
        },
        success: "订阅成功",
        "success-prompt": "您已成功订阅 {{month}} 月专业版。",
        failed: "订阅失败",
        "failed-prompt":
          "订阅失败，请确保您有足够的余额，您即将跳转到 deeptrain 钱包支付余额。",
      },
      cancel: "取消",
      confirm: "确认",
      percent: "{{cent}}折",
      file: {
        upload: "上传文件",
        type: "支持 pdf, docx, pptx, xlsx, 图像, 文本等格式",
        drop: "拖拽文件到此处或点击上传",
        "parse-error": "解析失败",
        "parse-error-prompt": "解析失败：{{reason}}",
        "max-length": "内容过长",
        "max-length-prompt": "由于上下文长度限制，内容已被截取",
        "over-size": "文件过大",
        "over-size-prompt": "单个附件大小不能超过 {{size}} MB",
        "large-file": "大文件解析",
        "large-file-prompt": "正在上传并解析大文件中，请耐心等待",
        number: "{{number}} 个文件",
        zipper: "{{filename}} 和其他 {{number}} 个文件",
        "empty-file": "无内容文件",
        "empty-file-prompt": "文件内容为空，已自动忽略",
      },
      generate: {
        title: "AI 项目生成器",
        "input-placeholder": "生成一个python小游戏",
        failed: "生成失败",
        reason: "原因：",
        success: "生成成功",
        "success-prompt": "成功生成项目！请选择下载格式。",
        empty: "生成中...",
        download: "下载 {{name}} 格式",
      },
      api: {
        title: "API 设置",
        copied: "复制成功",
        "copied-description": "API 密钥已复制到剪贴板",
        "learn-more": "了解更多",
      },
      service: {
        title: "发现新版本",
        description: "发现新版本，是否立即更新？",
        update: "更新",
        "offline-title": "离线模式",
        offline: "应用当前处于离线状态。",
        "update-success": "更新成功",
        "update-success-prompt": "您已更新至最新版本。",
      },
      share: {
        title: "分享",
        "share-conversation": "分享对话",
        description: "将此对话与他人分享：",
        "copy-link": "复制链接",
        view: "查看",
        success: "分享成功",
        failed: "分享失败",
        copied: "复制成功",
        "copied-description": "链接已复制到剪贴板",
        "not-found": "对话未找到",
        "not-found-description":
          "对话未找到，请检查链接是否正确或对话是否已被删除",
        manage: "分享管理",
        "sync-error": "同步失败",
        name: "对话标题",
        time: "时间",
        action: "操作",
      },
      docs: {
        title: "开放文档",
      },
      invitation: {
        title: "兑换码",
        "input-placeholder": "请输入兑换码",
        cancel: "取消",
        check: "验证",
        "check-success": "兑换成功",
        "check-success-description":
          "兑换成功！您已获得 {{amount}} 点数，开始您的 AI 之旅吧！",
        "check-failed": "兑换失败",
      },
      contact: {
        title: "联系我们",
      },
      settings: {
        title: "设置",
        description: "偏好设置",
        context: "保留上下文",
        align: "聊天框居中",
        memory: "内存占用",
      },
      article: {
        title: "批量生成文章",
        "input-placeholder": "请输入文章标题（一行一个）",
        "prompt-placeholder":
          "请输入预设（帮助 AI 生成文章，如：学术论文格式，800 字）",
        "web-checkbox": "是否开启联网搜索功能",
        generate: "生成",
        "progress-title": "生成中 （总共 {{total}} 篇， {{current}} 篇已生成）",
        "generate-success": "生成成功",
        "generate-success-prompt": "文章生成成功！请选择下载格式。",
        "generate-failed": "生成失败",
        "generate-failed-prompt": "文章生成失败，请检查您的网络并重试。",
        "download-format": "下载 {{name}} 格式",
      },
      admin: {
        dashboard: "仪表盘",
        users: "用户管理",
        broadcast: "公告管理",
        settings: "设置",
        "billing-today": "今日入账",
        "billing-month": "本月入账",
        "subscription-users": "订阅用户",
        seat: "位",
        "model-chart": "模型使用统计",
        "request-chart": "请求量统计",
        "billing-chart": "收入统计",
        "error-chart": "错误统计",
        requests: "请求量",
        times: "异常次数",
        empty: "无数据",
        cancel: "取消",
        confirm: "确认",
        invitation: "兑换码管理",
        code: "兑换码",
        quota: "点数",
        type: "类型",
        used: "状态",
        number: "数量",
        username: "用户名",
        month: "月数",
        poster: "发布者",
        "post-at": "发布时间",
        "broadcast-content": "公告内容",
        "create-broadcast": "发布公告",
        "broadcast-placeholder": "请输入公告内容",
        post: "发布",
        "post-success": "发布成功",
        "post-success-prompt": "公告发布成功。",
        "post-failed": "发布失败",
        "post-failed-prompt": "发布失败，原因：{{reason}}",
        "is-admin": "管理员",
        "used-quota": "已用点数",
        "is-subscribed": "是否订阅",
        "total-month": "总计订阅月数",
        enterprise: "企业版",
        action: "操作",
        "search-username": "搜索用户名",
        "quota-action": "点数变更",
        "quota-action-desc": "请输入点数变更值（正数为增加，负数为减少）",
        "subscription-action": "订阅管理",
        "subscription-action-desc": "请输入赠送的订阅月数",
        "operate-success": "操作成功",
        "operate-success-prompt": "您的操作已成功执行。",
        "operate-failed": "操作失败",
        "operate-failed-prompt": "操作失败，原因：{{reason}}",
        "updated-at": "领取时间",
        "used-true": "已使用",
        "used-false": "未使用",
        generate: "批量生成",
        "generate-result": "生成结果",
        error: "请求失败",
      },
      mask: {
        title: "预设设置",
        search: "搜索预设名称",
        context: "包含 {{length}} 条上下文",
      },
    },
  },
  en: {
    translation: {
      end: ".", // end of sentence
      "not-found": "Page not found",
      home: "Home",
      login: "Login",
      "login-require": "You need to login to use this feature",
      logout: "Logout",
      quota: "Quota",
      "try-again": "Try again",
      "invalid-token": "Invalid token",
      "invalid-token-prompt": "Please try again.",
      "login-failed": "Login failed",
      "login-failed-prompt": "Login failed! Reason: {{reason}}",
      "login-success": "Login successful",
      "login-success-prompt": "You have been logged in successfully.",
      "server-error": "Server error",
      "server-error-prompt":
        "There was an error logging you in. Please try again.",
      "request-failed":
        "Request failed. Please check your network and try again.",
      close: "Close",
      edit: "Edit",
      editor: "Text Editor",
      pricing: "See model pricing for more details",
      true: "Yes",
      false: "No",
      unknown: "Unknown",
      "scroll-down": "Scroll to latest",
      broadcast: "Broadcast",
      fatal: "App crashed",
      "download-fatal-log": "Download error log",
      "fatal-tips":
        "Please try to check your network, browser compatibility, try to clear the browser cache and refresh the page. If the problem still exists, please provide the log to the developer so that we can troubleshoot the problem.",
      tag: {
        free: "Free",
        official: "Official",
        unstable: "Unstable",
        web: "Web",
        "high-quality": "High Quality",
        "high-context": "High Context",
        "high-price": "High Price",
        "open-source": "Open Source",
        "image-generation": "Image Generation",
        "multi-modal": "Multi Modal",
        fast: "Fast",
        "english-model": "English Model",
      },
      market: {
        title: "Model Market",
        model: "Explore more models",
        explore: "Explore",
        search: "Search model name or description",
      },
      conversation: {
        title: "Conversation",
        empty: "Empty",
        "refresh-failed": "Refresh failed",
        "refresh-failed-prompt":
          "There was an error during your request. Please try again.",
        "remove-title": "Are you absolutely sure?",
        "remove-description":
          "This action cannot be undone. This will permanently delete the conversation ",
        "remove-all-title": "Clear History",
        "remove-all-description":
          "This action cannot be undone. This will permanently delete all conversations, continue?",
        cancel: "Cancel",
        delete: "Delete",
        "delete-conversation": "Delete Conversation",
        "delete-success": "Conversation deleted",
        "delete-success-prompt": "Conversation has been deleted.",
        "delete-failed": "Delete failed",
        "delete-failed-prompt":
          "Failed to delete conversation. Please check your network and try again.",
      },
      chat: {
        web: "Web Searching",
        "web-aria": "Toggle web searching feature",
        placeholder: "Write something... (Ctrl+Enter to send)",
        recall: "History Recall",
        "recall-desc":
          "Detected that you have unsent messages last time, has been restored for you.",
        "recall-cancel": "Cancel",
      },
      message: {
        copy: "Copy Message",
        save: "Save as File",
        use: "Use Message",
        stop: "Pause Answer",
        restart: "Restart Answer",
        "copy-area": "Copy Selected Area",
      },
      "quota-description": "spending quota for the message",
      buy: {
        choose: "Choose an amount",
        other: "Other",
        "other-desc": "How many points?",
        buy: "Buy {{amount}} points",
        dalle: "DALL·E Image Generator",
        "dalle-free": "DALL·E 2 Free Forever",
        flex: "Flexible Billing",
        input: "Input",
        output: "Output",
        "learn-more": "Learn more",
        "dialog-title": "Buy Points",
        "dialog-desc": "Are you sure you want to buy {{amount}} points?",
        "dialog-cancel": "Cancel",
        "dialog-buy": "Buy",
        success: "Purchase successful",
        "success-prompt": "You have successfully purchased {{amount}} points.",
        failed: "Purchase failed",
        "failed-prompt":
          "Failed to purchase points. Please make sure you have enough balance, you will soon jump to deeptrain wallet to pay balance.",
        "gpt4-tip": "Tip: web searching feature may consume more input points",
        go: "Go",
      },
      pkg: {
        title: "Packages",
        go: "Go to Verify",
        cert: "Certification Package",
        "cert-desc":
          "After real-name certification, you can get 50 points (worth 5 CNY)",
        teen: "Teenager Package",
        "teen-desc":
          "After real-name certification, teenagers (18 years old and below) can get an additional 150 points (worth 15 CNY) and 100 times of free use of Claude 100k model per day",
        close: "Close",
        state: {
          true: "Received",
          false: "Not Received",
        },
      },
      sub: {
        title: "Subscription",
        "quota-link": "Seeking flexible billing? Buy points",
        "subscription-link": "Seeking fixed billing? Subscribe",
        "dialog-title": "Subscription Plan",
        free: "Free",
        "free-price": "Free Forever",
        pro: "Pro",
        "pro-price": "56 CNY/Month",
        "free-gpt3": "GPT-3.5 (16k) Free Forever",
        "free-dalle": "DALL·E 2 Free Forever",
        "free-web": "web searching feature",
        "free-conversation": "conversation storage",
        "free-api": "API calls",
        "pro-mj": "Midjourney 10 times free image generation per day",
        "pro-gpt4": "GPT-4 100 requests per day",
        "pro-gpt4-desc": "(including GPT 4 Turbo, GPT 4V, GPT 4 DALLE)",
        "pro-claude": "Claude 100k 100 requests per day",
        "pro-service": "Priority Service Support",
        "pro-thread": "Concurrency Increase",
        enterprise: "Enterprise",
        "enterprise-service": "Priority Service Support",
        "enterprise-sla": "SLA Guarantee",
        "enterprise-speed": "TPM Speed Increase",
        "enterprise-security": "SOC-2 Standard Data Security Guarantee",
        "enterprise-data": "Offsite Data Disaster Recovery Backup",
        "enterprise-deploy": "Support Private Cloud Deployment",
        "contact-sale": "Contact Sales",
        current: "Current Plan",
        upgrade: "Upgrade",
        renew: "Renew",
        "cannot-select": "Cannot Select",
        "select-time": "Select Subscription Time",
        price: "Price {{price}} CNY",
        expired: "Subscription Remaining Days",
        time: {
          1: "1 Month",
          3: "3 Months",
          6: "6 Months",
          12: "1 Year",
          36: "3 Years",
        },
        success: "Subscribe success",
        "success-prompt":
          "You have successfully subscribed to {{month}} months of Pro.",
        failed: "Subscribe failed",
        "failed-prompt":
          "Failed to subscribe, please make sure you have enough balance, you will soon jump to deeptrain wallet to pay balance.",
      },
      cancel: "Cancel",
      confirm: "Confirm",
      percent: "{{cent}}0%",
      file: {
        upload: "Upload File",
        type: "Support pdf, docx, pptx, xlsx, image, text and other formats",
        drop: "Drag and drop files here or click to upload",
        "parse-error": "Parse Error",
        "parse-error-prompt": "Parse Error: {{reason}}",
        "max-length": "Content too long",
        "max-length-prompt":
          "The content has been truncated due to the context length limit",
        "over-size": "File too large",
        "over-size-prompt":
          "The size of a single attachment cannot exceed {{size}} MB",
        "large-file": "Large File Parsing",
        "large-file-prompt":
          "Uploading and parsing large files, please wait patiently",
        number: "{{number}} files",
        zipper: "{{filename}} and {{number}} more ...",
        "empty-file": "Empty File",
        "empty-file-prompt":
          "File content is empty, has been automatically ignored",
      },
      generate: {
        title: "AI Project Generator",
        "input-placeholder": "generate a python game",
        failed: "Generate failed",
        reason: "Reason: ",
        success: "Generate success",
        "success-prompt":
          "Project generated successfully! Please select the download format.",
        empty: "generating...",
        download: "Download {{name}} format",
      },
      api: {
        title: "API Settings",
        copied: "Copied",
        "copied-description": "API key has been copied to clipboard",
        "learn-more": "Learn more",
      },
      service: {
        title: "New Version Available",
        description: "A new version is available. Do you want to update now?",
        update: "Update",
        "offline-title": "Offline Mode",
        offline: "App is currently offline.",
        "update-success": "Update Success",
        "update-success-prompt": "You have been updated to the latest version.",
      },
      share: {
        title: "Share",
        "share-conversation": "Share Conversation",
        description: "Share this conversation with others: ",
        "copy-link": "Copy Link",
        view: "View",
        success: "Share success",
        failed: "Share failed",
        copied: "Copied",
        "copied-description": "Link has been copied to clipboard",
        "not-found": "Conversation not found",
        "not-found-description":
          "Conversation not found, please check if the link is correct or the conversation has been deleted",
        manage: "Share Management",
        "sync-error": "Sync Error",
        name: "Conversation Title",
        time: "Time",
        action: "Action",
      },
      docs: {
        title: "Open Docs",
      },
      invitation: {
        title: "Redeem Code",
        "input-placeholder": "Please enter the redeem code",
        cancel: "Cancel",
        check: "Check",
        "check-success": "Redeem Success",
        "check-success-description":
          "Redeem Success! You have received {{amount}} points, start your AI journey!",
        "check-failed": "Redeem Failed",
      },
      contact: {
        title: "Contact Us",
      },
      settings: {
        title: "Settings",
        description: "Preference Settings",
        context: "Keep Context",
        align: "Chatbox Centered",
        memory: "Memory Usage",
      },
      article: {
        title: "Batch Generate Articles",
        "input-placeholder": "Please enter the article title (one line each)",
        "prompt-placeholder":
          "Please enter the preset (help AI generate articles, such as: academic paper format, 800 words)",
        "web-checkbox": "Whether to enable web search function",
        generate: "Generate",
        "progress-title": "Generating ({{current}}/{{total}})",
        "generate-success": "Generate Success",
        "generate-success-prompt":
          "Article generated successfully! Please select the download format.",
        "generate-failed": "Generate Failed",
        "generate-failed-prompt":
          "Failed to generate article, please check your network and try again.",
        "download-format": "Download {{name}} format",
      },
      admin: {
        dashboard: "Dashboard",
        users: "User Management",
        broadcast: "Broadcast Management",
        settings: "Settings",
        "billing-today": "Billing Today",
        "billing-month": "Billing Month",
        "subscription-users": "Subscription Users",
        seat: "Seat",
        "model-chart": "Model Usage Statistics",
        "request-chart": "Request Statistics",
        "billing-chart": "Revenue Statistics",
        "error-chart": "Error Statistics",
        requests: "Requests",
        times: "Times",
        empty: "Empty",
        cancel: "Cancel",
        confirm: "Confirm",
        invitation: "Invitation Code Management",
        code: "Code",
        quota: "Quota",
        type: "Type",
        used: "Status",
        number: "Number",
        username: "Username",
        month: "Month",
        poster: "Poster",
        "post-at": "Post At",
        "broadcast-content": "Broadcast Content",
        "create-broadcast": "Create Broadcast",
        "broadcast-placeholder": "Please enter the broadcast content",
        post: "Post",
        "post-success": "Post Success",
        "post-success-prompt": "Broadcast posted successfully.",
        "post-failed": "Post Failed",
        "post-failed-prompt": "Post failed, reason: {{reason}}",
        "is-admin": "Admin",
        "used-quota": "Used Quota",
        "is-subscribed": "Subscribed",
        "total-month": "Total Month",
        enterprise: "Enterprise",
        action: "Action",
        "search-username": "Search Username",
        "quota-action": "Quota Change",
        "quota-action-desc":
          "Please enter the quota change value (positive for increase, negative for decrease)",
        "subscription-action": "Subscription Management",
        "subscription-action-desc": "Please enter the gift subscription months",
        "operate-success": "Operate Success",
        "operate-success-prompt":
          "Your operation has been successfully executed.",
        "operate-failed": "Operate Failed",
        "operate-failed-prompt": "Operation failed, reason: {{reason}}",
        "updated-at": "Updated At",
        "used-true": "Used",
        "used-false": "Unused",
        generate: "Generate",
        "generate-result": "Generate Result",
        error: "Request Failed",
      },
      mask: {
        title: "Mask Settings",
        search: "Search Mask Name",
        context: "Contains {{length}} context",
      },
    },
  },
  ru: {
    translation: {
      end: "",
      "not-found": "Страница не найдена",
      home: "Главная",
      login: "Войти",
      "login-require": "Вам нужно войти, чтобы использовать эту функцию",
      logout: "Выйти",
      quota: "Квота",
      "try-again": "Попробуйте еще раз",
      "invalid-token": "Неверный токен",
      "invalid-token-prompt": "Пожалуйста, попробуйте еще раз.",
      "login-failed": "Ошибка входа",
      "login-failed-prompt": "Ошибка входа! Причина: {{reason}}",
      "login-success": "Успешный вход",
      "login-success-prompt": "Вы успешно вошли в систему.",
      "server-error": "Ошибка сервера",
      "server-error-prompt":
        "При входе произошла ошибка. Пожалуйста, попробуйте еще раз.",
      "request-failed":
        "Ошибка запроса. Пожалуйста, проверьте свою сеть и попробуйте еще раз.",
      close: "Закрыть",
      edit: "Редактировать",
      editor: "Текстовый редактор",
      pricing:
        "См. ценообразование моделей для получения дополнительной информации",
      true: "Да",
      false: "Нет",
      unknown: "Неизвестный",
      "scroll-down": "Прокрутите вниз",
      broadcast: "Объявление",
      fatal: "Приложение вылетело",
      "download-fatal-log": "Скачать журнал ошибок",
      "fatal-tips":
        "Пожалуйста, попробуйте проверить свою сеть, совместимость браузера, попробуйте очистить кэш браузера и обновить страницу. Если проблема все еще существует, пожалуйста, предоставьте журнал разработчику, чтобы мы могли устранить проблему.",
      tag: {
        free: "Бесплатно",
        official: "Официальный",
        unstable: "Нестабильный",
        web: "Веб",
        "high-quality": "Высокое качество",
        "high-context": "Высокий контекст",
        "high-price": "Высокая цена",
        "open-source": "Открытый исходный код",
        "image-generation": "Генерация изображений",
        "multi-modal": "Мульти Модальный",
        fast: "Быстрый",
        "english-model": "Английская модель",
      },
      market: {
        title: "Рынок моделей",
        model: "Исследуйте больше моделей",
        explore: "Исследовать",
        search: "Поиск по имени модели или описанию",
      },
      conversation: {
        title: "Разговор",
        empty: "Пусто",
        "refresh-failed": "Ошибка обновления",
        "refresh-failed-prompt":
          "При выполнении запроса произошла ошибка. Пожалуйста, попробуйте еще раз.",
        "remove-title": "Вы уверены?",
        "remove-description":
          "Это действие нельзя отменить. Это навсегда удалит разговор ",
        "remove-all-title": "Очистить историю",
        "remove-all-description":
          "Это действие нельзя отменить. Это навсегда удалит все разговоры, продолжить?",
        cancel: "Отмена",
        delete: "Удалить",
        "delete-conversation": "Удалить разговор",
        "delete-success": "Разговор удален",
        "delete-success-prompt": "Разговор был удален.",
        "delete-failed": "Ошибка удаления",
        "delete-failed-prompt":
          "Не удалось удалить разговор. Пожалуйста, проверьте свою сеть и попробуйте еще раз.",
      },
      chat: {
        web: "Веб-поиск",
        "web-aria": "Переключить веб-поиск",
        placeholder: "Напишите что-нибудь... (Ctrl+Enter для отправки)",
        recall: "История",
        "recall-desc":
          "Обнаружено, что у вас есть неотправленные сообщения в прошлый раз, они были восстановлены для вас.",
        "recall-cancel": "Отмена",
      },
      message: {
        copy: "Копировать сообщение",
        save: "Сохранить как файл",
        use: "Использовать сообщение",
        stop: "Приостановить ответ",
        restart: "Перезапустить ответ",
        "copy-area": "Копировать выбранную область",
      },
      "quota-description": "квота расходов на сообщение",
      buy: {
        choose: "Выберите сумму",
        other: "Другое",
        "other-desc": "Сколько очков?",
        buy: "Купить {{amount}} очков",
        dalle: "Генератор изображений DALL·E",
        "dalle-free": "DALL·E 2 бесплатно навсегда",
        flex: "Гибкая тарификация",
        input: "Вход",
        output: "Выход",
        "learn-more": "Узнать больше",
        "dialog-title": "Купить очки",
        "dialog-desc": "Вы уверены, что хотите купить {{amount}} очков?",
        "dialog-cancel": "Отмена",
        "dialog-buy": "Купить",
        success: "Покупка прошла успешно",
        "success-prompt": "Вы успешно приобрели {{amount}} очков.",
        failed: "Покупка не удалась",
        "failed-prompt":
          "Не удалось приобрести очки. Пожалуйста, убедитесь, что у вас достаточно баланса, вы скоро перейдете в кошелек deeptrain для оплаты баланса.",
        "gpt4-tip":
          "Совет: функция веб-поиска может потреблять больше входных очков",
        go: "Перейти к",
      },
      pkg: {
        title: "Пакеты",
        go: "Перейти к проверке",
        cert: "Пакет сертификации",
        "cert-desc":
          "После сертификации подлинности вы можете получить 100 очков (стоимостью 5 CNY)",
        teen: "Подростковый пакет",
        "teen-desc":
          "После сертификации подлинности подростки (до 18 лет) могут получить дополнительно 150 очков (стоимостью 15 CNY) и 100 раз бесплатно использовать модель Claude 100k в день",
        close: "Закрыть",
        state: {
          true: "Получено",
          false: "Не получено",
        },
      },
      sub: {
        title: "Подписка",
        "quota-link": "Ищете гибкую тарификацию? Купить очки",
        "subscription-link": "Ищете фиксированную тарификацию? Подписаться",
        "dialog-title": "Подписка",
        free: "Бесплатно",
        "free-price": "Бесплатно навсегда",
        pro: "Профессиональный",
        "pro-price": "56 CNY/месяц",
        "free-gpt3": "GPT-3.5 (16k) бесплатно навсегда",
        "free-dalle": "DALE·E 2 бесплатно навсегда",
        "free-web": "веб-поиск",
        "free-conversation": "хранение разговоров",
        "free-api": "API вызовы",
        "pro-mj": "Midjourney 10 раз бесплатно генерировать изображения в день",
        "pro-gpt4": "GPT-4 100 запросов в день",
        "pro-gpt4-desc": "(включая GPT 4 Turbo, GPT 4V, GPT 4 DALLE)",
        "pro-claude": "Claude 100k 100 запросов в день",
        "pro-service": "Приоритетная служба поддержки",
        "pro-thread": "Увеличение параллелизма",
        enterprise: "Корпоративный",
        "enterprise-service": "Приоритетная служба поддержки",
        "enterprise-sla": "Гарантия SLA",
        "enterprise-speed": "Увеличение скорости TPM",
        "enterprise-security": "Гарантия безопасности данных SOC-2",
        "enterprise-data": "Резервное копирование данных в другом месте",
        "enterprise-deploy": "Поддержка частной облачной инфраструктуры",
        "contact-sale": "Связаться с отделом продаж",
        current: "Текущая подписка",
        upgrade: "Обновить",
        renew: "Продлить",
        "cannot-select": "Невозможно выбрать",
        "select-time": "Выберите время подписки",
        price: "Цена {{price}} CNY",
        expired: "Осталось дней подписки",
        time: {
          1: "1 месяц",
          3: "3 месяца",
          6: "6 месяцев",
          12: "1 год",
          36: "3 года",
        },
        success: "Подписка успешна",
        "success-prompt": "Вы успешно подписались на {{month}} месяцев Pro.",
        failed: "Подписка не удалась",
        "failed-prompt":
          "Не удалось подписаться, пожалуйста, убедитесь, что у вас достаточно баланса, вы скоро перейдете в кошелек deeptrain для оплаты баланса.",
      },
      cancel: "Отмена",
      confirm: "Подтвердить",
      percent: "{{cent}}0%",
      file: {
        upload: "Загрузить файл",
        type: "Поддержка pdf, docx, pptx, xlsx, изображений, текста и других форматов",
        drop: "Перетащите файлы сюда или нажмите, чтобы загрузить",
        "parse-error": "Ошибка разбора",
        "parse-error-prompt": "Ошибка разбора: {{reason}}",
        "max-length": "Слишком длинный контент",
        "max-length-prompt":
          "Содержимое было усечено из-за ограничения длины контекста",
        "over-size": "Слишком большой файл",
        "over-size-prompt":
          "Размер одного вложения не может превышать {{size}} MB",
        "large-file": "Большой файл разбора",
        "large-file-prompt":
          "Загрузка и разбор большого файла, пожалуйста, подождите",
        number: "{{number}} файлов",
        zipper: "{{filename}} и другие {{number}} файлов",
        "empty-file": "Пустой файл",
        "empty-file-prompt":
          "Содержимое файла пустое, автоматически проигнорировано",
      },
      generate: {
        title: "Генератор AI проектов",
        "input-placeholder": "сгенерировать python игру",
        failed: "Генерация не удалась",
        reason: "Причина: ",
        success: "Генерация успешна",
        "success-prompt":
          "Проект успешно сгенерирован! Пожалуйста, выберите формат загрузки.",
        empty: "генерация...",
        download: "Загрузить {{name}} формат",
      },
      api: {
        title: "Настройки API",
        copied: "Скопировано",
        "copied-description": "Ключ API скопирован в буфер обмена",
        "learn-more": "Узнать больше",
      },
      service: {
        title: "Доступна новая версия",
        description: "Доступна новая версия. Хотите обновить сейчас?",
        update: "Обновить",
        "offline-title": "Режим оффлайн",
        offline: "Приложение в настоящее время находится в автономном режиме.",
        "update-success": "Обновление успешно",
        "update-success-prompt": "Вы обновились до последней версии.",
      },
      share: {
        title: "Поделиться",
        "share-conversation": "Поделиться разговором",
        description: "Поделитесь этим разговором с другими: ",
        "copy-link": "Скопировать ссылку",
        view: "Посмотреть",
        success: "Поделиться успешно",
        failed: "Поделиться не удалось",
        copied: "Скопировано",
        "copied-description": "Ссылка скопирована в буфер обмена",
        "not-found": "Разговор не найден",
        "not-found-description":
          "Разговор не найден, пожалуйста, проверьте, правильная ли ссылка или разговор был удален",
        manage: "Управление обменом",
        "sync-error": "Ошибка синхронизации",
        name: "Название разговора",
        time: "Время",
        action: "Действие",
      },
      docs: {
        title: "Открыть документы",
      },
      invitation: {
        title: "Код приглашения",
        "input-placeholder": "Введите код приглашения",
        cancel: "Отмена",
        check: "Проверить",
        "check-success": "Успешно",
        "check-success-description":
          "Успешно! Вы получили {{amount}} очков, начните свое путешествие в мир AI!",
        "check-failed": "Не удалось",
      },
      contact: {
        title: "Связаться с нами",
      },
      settings: {
        title: "Настройки",
        description: "Настройки предпочтений",
        context: "Сохранить контекст",
        align: "Выравнивание чата по центру",
        memory: "Использование памяти",
      },
      article: {
        title: "Пакет генерации статей",
        "input-placeholder": "Введите заголовок статьи (одна строка)",
        "prompt-placeholder":
          "Введите предустановку (помогите AI сгенерировать статью, например: формат научной статьи, 800 слов)",
        "web-checkbox": "Включить веб-поиск",
        generate: "Генерировать",
        "progress-title":
          "Генерация (всего {{total}} статей, {{current}} статей сгенерировано)",
        "generate-success": "Успешно",
        "generate-success-prompt":
          "Статья успешно сгенерирована! Пожалуйста, выберите формат загрузки.",
        "generate-failed": "Не удалось",
        "generate-failed-prompt":
          "Не удалось сгенерировать статью. Пожалуйста, проверьте свою сеть и попробуйте еще раз.",
        "download-format": "Загрузить {{name}} формат",
      },
      admin: {
        dashboard: "Панель управления",
        users: "Управление пользователями",
        broadcast: "Управление объявлениями",
        settings: "Настройки",
        "billing-today": "Сегодняшний доход",
        "billing-month": "Доход за месяц",
        "subscription-users": "Подписчики",
        seat: "место",
        "model-chart": "Статистика использования моделей",
        "request-chart": "Статистика запросов",
        "billing-chart": "Статистика доходов",
        "error-chart": "Статистика ошибок",
        requests: "Запросы",
        times: "Количество ошибок",
        empty: "Пусто",
        cancel: "Отмена",
        confirm: "Подтвердить",
        invitation: "Управление кодами приглашений",
        code: "Код",
        quota: "Квота",
        type: "Тип",
        used: "Статус",
        number: "Количество",
        username: "Имя пользователя",
        month: "Месяц",
        poster: "Автор",
        "post-at": "Дата",
        "broadcast-content": "Содержание",
        "create-broadcast": "Создать объявление",
        "broadcast-placeholder": "Введите содержание объявления",
        post: "Отправить",
        "post-success": "Успешно",
        "post-success-prompt": "Объявление успешно отправлено.",
        "post-failed": "Не удалось",
        "post-failed-prompt":
          "Не удалось отправить объявление, причина: {{reason}}",
        "is-admin": "Админ",
        "used-quota": "Использовано",
        "is-subscribed": "Подписан",
        "total-month": "Всего месяцев",
        enterprise: "Корпоративный",
        action: "Действие",
        "search-username": "Поиск по имени пользователя",
        "quota-action": "Изменение квоты",
        "quota-action-desc":
          "Пожалуйста, введите значение изменения квоты (положительное для увеличения, отрицательное для уменьшения)",
        "subscription-action": "Управление подпиской",
        "subscription-action-desc":
          "Пожалуйста, введите количество месяцев подарочной подписки",
        "operate-success": "Успешно",
        "operate-success-prompt": "Ваша операция была успешно выполнена.",
        "operate-failed": "Не удалось",
        "operate-failed-prompt":
          "Не удалось выполнить операцию, причина: {{reason}}",
        "updated-at": "Обновлено",
        "used-true": "Использовано",
        "used-false": "Не использовано",
        generate: "Генерировать",
        "generate-result": "Результат",
        error: "Ошибка запроса",
      },
      mask: {
        title: "Настройки маски",
        search: "Поиск по имени маски",
        context: "Содержит {{length}} контекст",
      },
    },
  },
};

export const supportedLanguages = ["en", "cn", "ru"];

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .then(() => console.debug(`[i18n] initialized (language: ${i18n.language})`));

export default i18n;

export function getLanguage(): string {
  const storage = getMemory("language");
  if (storage && supportedLanguages.includes(storage)) {
    return storage;
  }
  // get browser language
  const lang = navigator.language.split("-")[0];
  if (supportedLanguages.includes(lang)) {
    return lang;
  }
  return "cn";
}

export function setLanguage(i18n: any, lang: string): void {
  if (supportedLanguages.includes(lang)) {
    i18n
      .changeLanguage(lang)
      .then(() =>
        console.debug(`[i18n] language changed (language: ${i18n.language})`),
      );
    setMemory("language", lang);
    return;
  }
  console.warn(`[i18n] language ${lang} is not supported`);
}

import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import './index.css'; // 引入页面样式

export default function HomePage() {
    // 定义背景图片链接数组

    const desktopBackgroundImages = [
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/1.jpg',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/2.png',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/3.png',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/4.png',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/5.png',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/6.png',
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/7.png",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/8.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/9.png",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/10.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/11.png",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/12.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/13.png",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/14.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/15.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/16.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/17.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/18.jpg"
    ];

    const mobileBackgroundImages = [
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/1.jpg',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/2.png',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/3.png',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/4.png',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/5.png',
        'https://rth.direct-rinne.stehp.cn/blog/bg_pic/6.png',
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/7.png",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/8.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/9.png",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/10.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/11.png",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/12.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/13.png",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/14.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/15.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/16.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/17.jpg",
        "https://rth.direct-rinne.stehp.cn/blog/bg_pic/18.jpg"

    ];

    // 判断屏幕比例是否接近手机（高宽比大于1）
    var isMobileRatioOld;
    const isMobileRatio = () => {
        const aspectRatio = window.innerHeight / window.innerWidth;
        return aspectRatio > 1;
    };

    // 定义状态存储背景图片
    const [backgroundImage, setBackgroundImage] = useState('');

    // 随机选择背景图片
    const selectRandomBackgroundImage = () => {
        const images = isMobileRatio() ? mobileBackgroundImages : desktopBackgroundImages;
        const randomIndex = Math.floor(Math.random() * images.length);
        setBackgroundImage(images[randomIndex]);
    };

    // 在组件挂载时选择背景图片
    useEffect(() => {
        // 初始化时选择背景图片
        selectRandomBackgroundImage();
        isMobileRatioOld = isMobileRatio();

        // 监听窗口大小变化，动态调整背景图片
        const handleResize = () => {
            if (isMobileRatio() == isMobileRatioOld) return;
            isMobileRatioOld = isMobileRatio();
            selectRandomBackgroundImage();
        };

        // 添加resize事件监听器
        window.addEventListener('resize', handleResize);

        // 清理事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);





    return (
        <Layout description="猫雨音の小猫窝，猫雨音の个人博客，猫雨音，RainToneH">
            <head>
                <meta name="baidu-site-verification" content="codeva-diMaIqZTcx" />
            </head>
            <div id="index-page-container">

                {/* 背景图片 */}
                <div id="index-page-bg" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div id="index-page-bg-mask"></div>

                {/* 主体内容 */}
                <div id="index-page-main">
                    <div id="logo">
                        <span>猫雨音の小猫窝</span>
                    </div>

                    <div id="index-page-description">
                        欢迎点开咱的网站喵！是要来偷看咱的嘛喵
                    </div>

                    <div id="index-page-button-container">
                        <div id="index-page-button">
                            <Link
                                className="button button--secondary button--lg"
                                to="./blog">
                                看看记事本
                            </Link>
                            <Link
                                className="button button--secondary button--lg"
                                to="./docs/intro">
                                看看猫耳
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{343:function(e,n,t){"use strict";t.r(n);var r=t(1),s=Object(r.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("关于"),t("strong",[e._v("高斯核函数")]),e._v("可以参见阮一峰老师的日志："),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2012/11/gaussian_blur.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("高斯模糊的算法"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("如何使用高斯核进行"),t("strong",[e._v("高斯模糊")]),e._v("可以参见我的另一篇日志："),t("a",{attrs:{href:"https://hypercube.top/2018/05/16/filter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("opencv构建自定义卷积"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-C++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Mat Gaussian_kernal(int kernel_size, int sigma)\n{\n    const double PI = 3.14159265358979323846;\n    int m = kernel_size / 2;\n    Mat kernel(kernel_size, kernel_size, CV_32FC1);\n    float s = 2 * sigma*sigma;\n    for (int i = 0; i < kernel_size; i++)\n    {\n        for (int j = 0; j < kernel_size; j++)\n        {\n            int x = i - m, y=j - m;\n            kernel.ptr<float>(i)[j] = exp(-(x*x + y*y) / s) / (PI*s);\n        }\n    }\n    return kernel;\n}\n")])])])])},[],!1,null,null,null);n.default=s.exports}}]);
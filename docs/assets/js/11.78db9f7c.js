(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{162:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("由于我无法自己维护所有界面语言文件，因此最新版本的最新的界面语言文件可能不会和"),a("code",[t._v("CopyTranslator")]),t._v("一同发布（除了"),a("code",[t._v("en")]),t._v("和"),a("code",[t._v("zh-cn")]),t._v("）。现在，您可以下载本仓库目录"),a("code",[t._v("dist_locales")]),t._v("下的"),a("code",[t._v(t._s(t.locale)+".json")]),t._v("，并将其放在下面"),a("code",[t._v(t._s(t.userDir)+"/copytranslator/locales")]),t._v("，"),a("code",[t._v("CopyTranslator")]),t._v("将在启动时检测它们，然后您可以在设置面板上选择它们。、")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("您可以通过修改"),a("code",[t._v(t._s(t.userDir)+"/copytranslator/styles.css")]),t._v("文件来自定义"),a("code",[t._v("CopyTranslator")]),t._v("的界面风格，样式。")]),t._v(" "),a("p",[t._v("可以修改的属性包括但不限于：字体，颜色，背景，边框。")]),t._v(" "),a("p",[t._v("可以自定义的部分包括但不限于：两大模式的结果框，设置框，状态栏的样式。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("以下是目前所有可用动作的列表。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("对于大多数"),a("a",{attrs:{href:"#%E5%8A%A8%E4%BD%9C%E7%B3%BB%E7%BB%9F"}},[t._v("动作")]),t._v("，您可以通过修改"),a("code",[t._v(t._s(t.userDir)+"/copytranslator/shortcut.json")]),t._v("来绑定全局快捷键。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("以下为一个例子")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("所有可用的加速器，请查看"),a("a",{attrs:{href:"https://electronjs.org/docs/api/accelerator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron Accelerator "),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("当然！您可以自定义"),a("code",[t._v("CopyTranslator")]),t._v("的上下文菜单。只要改变"),a("code",[t._v(t._s(t.userDir)+"/copytranslator/copytranslator.json")]),t._v("中的"),a("code",[t._v("contrastMenu")]),t._v("，"),a("code",[t._v("focusMenu")]),t._v("，"),a("code",[t._v("trayMenu")]),t._v("的值;所有"),a("a",{attrs:{href:"#%E5%8A%A8%E4%BD%9C%E7%B3%BB%E7%BB%9F"}},[t._v("动作")]),t._v("几乎都可以用作菜单项。")]),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"进阶教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶教程","aria-hidden":"true"}},[this._v("#")]),this._v(" 进阶教程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义界面语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义界面语言","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义界面语言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义界面样式-风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义界面样式-风格","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义界面样式/风格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("参考文件中的注释，您可以更改"),s("code",[this._v("CopyTranslator")]),this._v("的部分外观。以下是一个例子。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".focusText")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*modify the style of the focus result textarea*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Monaco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".contrastText")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*modify the style of the contrast src and result textarea*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".contrast")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*modify the style of the contrast mode panel*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".statusBar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"动作系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动作系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 动作系统")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("//down below are status switching action\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"switchActions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoCopy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoPaste"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoPurify"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tapCopy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"detectLanguage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"incrementalCopy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoHide"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoShow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stayTop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listenClipboard"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translatorType"')]),t._v("//|"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("|"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("|"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" change translator，"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" means Google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" means Youdao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" means Baidu\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hideDirect"')]),t._v("//|"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("|"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("|"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("|"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("|"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" //set the hide direction when double click on status bar. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" means Up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Minify.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n//down below are actions that do a specific thing.\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"normalAction"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copySource"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyResult"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusMode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contrastMode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helpAndUpdate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retryTranslate"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义全局快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义全局快捷键","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义全局快捷键")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("注意：当快捷键已被其他应用程序占用时，绑定将失败。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每条记录的形式为："),s("code",[this._v("action:accelerator")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listenClipboard"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CommandOrControl+J"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"translatorType|0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CommandOrControl+T"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("它将切换监听剪贴板的动作绑定到快捷键"),s("code",[this._v("CommandOrControl+J")]),this._v("。并将切换为Google翻译器的操作绑定到快捷键"),s("code",[this._v("CommandOrControl+T")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于所有可用操作，请参看 "),s("a",{attrs:{href:"#%E5%8A%A8%E4%BD%9C%E7%B3%BB%E7%BB%9F"}},[this._v("动作")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义右键菜单-面板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义右键菜单-面板","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义右键菜单/面板")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contrastMenu"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copySource"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyResult"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retryTranslate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusMode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"focusMenu"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copySource"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyResult"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retryTranslate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contrastMode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trayMenu"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translatorType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copySource"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyResult"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retryTranslate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contrastMode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusMode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helpAndUpdate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
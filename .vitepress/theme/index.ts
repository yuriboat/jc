import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const cookieYesSnippet = `(function(w,d,s,u,o){w._cyA11yConfig={"iconId":"default","position":{"mobile":"bottom-right","desktop":"bottom-right"},"language":{"default":"zh","selected":[]},"modules":{"statement":{"enabled":false,"url":""}}};var self=d.currentScript;var boot=function(){if(self&&d.head&&self.parentNode===d.head&&d.body){d.body.appendChild(self);}var js=d.createElement(s);js.src=u;js.async=true;d.body.appendChild(js);};if(d.readyState==='loading'&&!d.body){d.addEventListener('DOMContentLoaded',boot,{once:true});}else{boot();}})(window,document,"script","https://cdn-cookieyes.com/widgets/accessibility.js?id=70fde21c-011c-4c89-a614-36cde84cf8ab")`

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      // layout-bottom 渲染在 body 内、页面内容之后
      'layout-bottom': () => h('script', { innerHTML: cookieYesSnippet }),
    }),
} satisfies Theme

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  head: [
    ['link', { rel: 'stylesheet', href: '/align-img.css' }],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/mojohorizontal.webp'
  }),
  lang: 'en-US',
  title: 'MojoLauncher',
  description: 'MojoLauncher - an Android Minecraft: Java Edition launcher, based on PojavLauncher',
})

<template>
  <div
    v-html="renderedContent"
    class="w-full prose max-w-none
      prose-headings:text-color-1
      prose-headings:m-0
      prose-headings:mb-4
      prose-p:m-0
      prose-p:mb-4
      prose-h1:text-34/[3rem] lg:prose-h1:text-40/[3.30rem]
      prose-h2:text-32/[3rem]
      prose-h3:text-28/[2.75rem]
      prose-h4:text-24/[2.4rem]
      prose-h5:text-22/[2.4rem]
      prose-h6:text-20/[2.4rem]
      prose-p:text-color-2
      prose-p:text-16/7
      lg:prose-p:text-17/8
      prose-hr:m-0
      prose-hr:my-8
      prose-hr:border-gray-900/10 dark:prose-hr:border-gray-50/10
      prose-ul:m-0
      prose-ul:mb-4
      prose-ol:m-0
      prose-ol:mb-4
      prose-li:m-0
      prose-li:mb-2
      prose-ul:list-none prose-li:text-16 lg:prose-li:text-17 prose-li:text-color-2
      prose-a:text-color-1 prose-a:decoration-green-500 prose-a:underline
      prose-strong:text-color-1
      prose-blockquote:border-green-500 prose-blockquote:py-0.5 prose-blockquote:pl-8
      prose-pre:m-0
      prose-pre:mb-4
      prose-pre:bg-gray-800 prose-pre:bdr-2
      prose-th:text-color-1 prose-td:text-color-3
      dark:prose-tr:border-gray-50/[5%] prose-tr:border-gray-900/[5%]
    "
  />
</template>

<style lang="postcss">
.prose ul li::before {
  @apply text-green-brand text-18;
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */ 
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
dt {
  @apply text-color-1;
}
dd {
  @apply text-color-3;
}
p code:not([class^="language-"]),
td code:not([class^="language-"]),
li code:not([class^="language-"]) {
  @apply text-green-700 dark:text-green-500 bg-green-50 dark:bg-green-50/10 font-normal;
  font-size: 80%;
  border-radius: 4px;
  padding: 2px 4px;
}
abbr {
  cursor: help;
}
blockquote p {
  @apply text-gray-800 dark:text-gray-50 !important;
}
</style>

<script setup lang="ts">
import 'highlight.js/styles/stackoverflow-dark.css' //  monokai-sublime
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import sh from 'highlight.js/lib/languages/shell'
// import vue from 'highlight.js/lib/languages/vue'

import MarkdownIt from 'markdown-it'
import markdownEmoji from 'markdown-it-emoji'
import markdownFootnote from 'markdown-it-footnote'
import markdownAbbr from 'markdown-it-abbr'
import markdownDeflist from 'markdown-it-deflist'
import markdownMark from 'markdown-it-mark'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('shell', sh)
// hljs.registerLanguage('vue', vue)

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

const md = new MarkdownIt({
  linkify: true,
  typographer: true,
  html: true,
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, {
          language: lang,
          ignoreIllegals: true
        }).value
      } catch (__) {}
    }
    return ''
  }
})

md.use(markdownEmoji)
md.use(markdownFootnote)
md.use(markdownAbbr)
md.use(markdownDeflist)
md.use(markdownMark)

const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
}

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const aIndex = tokens[idx].attrIndex('target')
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank'])
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank'
  }
  return defaultRender(tokens, idx, options, env, self)
}

const renderedContent = computed(() => {
  return md.render(props.content)
})
</script>

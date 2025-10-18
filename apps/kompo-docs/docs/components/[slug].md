---
title: Dynamic Page
---

<script setup>
import { useData } from 'vitepress';
import blocksToMarkdown from '@sanity/block-content-to-markdown';
import Content from '../.vitepress/theme/components/content/content.vue';
import { ref, watchEffect } from 'vue';

const { page } = useData();
const docs = ref(null);
const markdown = ref('');

async function fetchDoc(slug) {
  try {
    const res = await fetch(`http://localhost:8080/docs/${slug}`);
    const data = await res.json();
    docs.value = data;
    markdown.value = blocksToMarkdown(data.body)
  } catch (err) {
    console.error('Erreur de fetch:', err);
    docs.value = { title: 'Erreur de chargement' };
    markdown.value = 'Une erreur est survenue lors du chargement du document.'
  }
}

watchEffect(() => {
  const slug = page.value.params?.slug;
  if (slug) {
    fetchDoc(slug)
  }
})
</script>

# {{ docs?.title || 'Chargement...' }}

<p style="color: rgba(0,0,0,0.5)">{{ docs?.description || 'Chargement...' }}</p>

<div v-if="markdown">
  <Content :content="markdown" />
</div>
<div v-else>
  <em>Chargement du contenu...</em>
</div>

**Slug actuel** : `{{ page.params?.slug }}`

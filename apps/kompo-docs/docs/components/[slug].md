---
title: Dynamic Page
---

<script setup>
import { useData } from 'vitepress';
const { page } = useData()
</script>

# Page dynamique

Slug actuel : `{{ page.params.slug }}`

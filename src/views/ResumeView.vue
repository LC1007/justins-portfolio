<template>
     <div>
       <XpComp/>
       <SkillComp/>
       <ProjectComp/>
     </div>
</template>

<script>
import XpComp from '@/components/XpComp.vue'
import SkillComp from '@/components/SkillsComp.vue'
import ProjectComp from '@/components/ProjectComp.vue'

export default {
  components: {
    XpComp,
    SkillComp,
    ProjectComp
  }
};
</script>

<style scoped>
</style>

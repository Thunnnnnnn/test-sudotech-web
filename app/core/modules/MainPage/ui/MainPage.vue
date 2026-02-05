<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
onBeforeMount(() => {
    if (window.localStorage.getItem('token')) {
        navigateTo('/')
    } else {
        navigateTo('/login')
    }
})
</script>
<template>
    <UContainer>
        <UButton color="primary">
            First Button
        </UButton>

    </UContainer>

</template>
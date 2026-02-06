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
        <div class="flex flex-col gap-5 items-start justify-start">
            <div class="text-3xl font-semibold">
                Welcome to Sudotech Theater
            </div>

            <UButton color="secondary" @click="navigateTo('/theaters')">Go to Theaters</UButton>
        </div>
    </UContainer>

</template>
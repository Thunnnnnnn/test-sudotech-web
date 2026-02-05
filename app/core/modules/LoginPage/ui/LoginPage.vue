<script lang="ts" setup>
useHead({
    title: 'Login - Sudotect'
})

const show = ref(false);
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-5 items-center justify-center">
            <div class="text-3xl font-semibold">
                Login to your account
            </div>

            <UInput placeholder="Email" type="email" label="Email" class="w-[300px]" color="secondary" />

            <UInput placeholder="Password" :type="show ? 'text' : 'password'" :ui="{ trailing: 'pe-1' }"
                class="w-[300px]" color="secondary">
                <template #trailing>
                    <UButton color="neutral" variant="link" size="sm" :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                        :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show"
                        aria-controls="password" @click="show = !show" />
                </template>
            </UInput>

            <UButton color="secondary" class="w-[300px] flex justify-center">
                <span class="text-[16px]">Login</span>
            </UButton>
            <div class="text-md font-medium or-divider">
                or
            </div>
            <VGoogleLogin />
        </div>
    </UContainer>
</template>
<style>
.or-divider {
    display: flex;
    align-items: center;
    width: 324px;
    color: #6b7280;
}

.or-divider::before,
.or-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #d1d5db;
    margin-inline: 24px;
}

.or-divider span {
    /* padding: 0 18px; */
    font-size: 14px;
    font-weight: 500;
}
</style>
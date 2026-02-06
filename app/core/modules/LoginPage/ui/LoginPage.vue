<script lang="ts" setup>
useHead({
    title: 'Login - Sudotect'
})
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-5 items-center justify-center">
            <div class="text-3xl font-semibold">
                Login to your account
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
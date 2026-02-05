<script setup lang="ts">
const config = useRuntimeConfig()

const loginWithGoogle = () => {
    window.location.href =
        config.public.API_URL + '/auth/google'
}

</script>

<template>
    <ClientOnly>
        <button class="google-login-button" @click="loginWithGoogle">
            <img src="/image/google_logo.png" alt="Google Logo" width="40px" height="40px">
            Login with Google
        </button>
    </ClientOnly>
</template>

<style>
.google-login-button {
    width: 40vw;
    max-width: 300px;
    min-width: 200px;
    height: 60px;
    border: 1px solid #121212;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 500;
    color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
}
</style>

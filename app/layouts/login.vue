<template>
    <div class="flex">
        <div class="w-[60%] h-screen">
            <img src="/image/cinema.jpg" alt="cinema" class="h-screen object-cover">
        </div>
        <div class="w-[40%] h-screen flex items-center justify-center">
            <div class="login-layout">
                <slot />
            </div>
        </div>
    </div>
</template>

<style>
.login-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
</style>
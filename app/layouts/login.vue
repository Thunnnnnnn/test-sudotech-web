<template>
    <div class="layout">
        <div class="w-[60%] hidden-md h-screen overflow-hidden cinema-image">
            <img src="/image/cinema.jpg" alt="cinema" class="h-screen object-cover">
        </div>
        <div class="login-layout h-screen flex items-center justify-center">
            <slot />
        </div>
    </div>
</template>

<style>
.cinema-image img {
    filter: brightness(0.7);
}

.login-layout {
    width: 40%;
}

.layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
}

@media (max-width: 882px) {
    .cinema-image {
       display: none;
    }

    .login-layout {
        width: 100%;
    }

    .layout {
        flex-direction: column;
    }
}
</style>
<script lang="ts" setup>
const isShowMenu = ref(false)

const emit = defineEmits(["toggle-menu"])

const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value;
  emit("toggle-menu", isShowMenu.value);
};
</script>

<template>
  <header class="header">
    <div class="d-flex gap-3 align-items-center">
      <div class="logo mb-6">
        <span class="font-bold ps-3 text-2xl">
          Theater
        </span>

      </div>
    </div>


    <button class="text-white fs-2 cursor-pointer menu ms-2" style="background-color: transparent; border: none;"
      @click="toggleMenu()">
      ☰
    </button>

  </header>
</template>

<style scoped>
@media (min-width: 905px) {
  .header {
    width: calc(100vw - 240px);
    left: 240px;
  }

  .header .logo {
    display: none;
    font-size: 16px;
  }
}

@media (max-width: 905px) {
  .header {
    width: 100vw;
    left: 0;
  }
}

@media (max-width: 460px) {
  .header .text-brand {
    display: none;
  }
}

.logo {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 12px;
}

.header {
  height: 64px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  width: 100vw;
  z-index: 1000;
}

.search {
  max-width: 300px;
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  outline: none;
  height: 44px;
  background-color: #3a3a3a;

}

.search::placeholder {
  color: #b3b3b3;
}

@media (min-width: 905px) {
  .menu {
    display: none;
  }
}
</style>

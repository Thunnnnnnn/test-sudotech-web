<script lang="ts" setup>
const props = defineProps({
  isShowMenu: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <aside class="sidebar" :class="{ 'is-not-show-menu': !props.isShowMenu }">
    <h2 class="logo mb-6">
      <div>
        <img src="/image/theater.png" alt="">
      </div>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="28"
        height="28" fill="white">
        <path
          d="M22.916.691A2.992,2.992,0,0,0,20.447.053L8.448,2.3A3,3,0,0,0,6,5.251V16.556A3.959,3.959,0,0,0,4,16a4,4,0,1,0,4,4V9.42L22,6.8v6.761A3.959,3.959,0,0,0,20,13a4,4,0,1,0,4,4V3A3,3,0,0,0,22.916.691ZM4,22a2,2,0,1,1,2-2A2,2,0,0,1,4,22ZM8,7.386V5.251a1,1,0,0,1,.815-.983l12-2.25A1,1,0,0,1,22,3v1.76ZM20,19a2,2,0,1,1,2-2A2,2,0,0,1,20,19Z" />
      </svg> -->
      <span class="font-bold ps-3 text-2xl">
        Theater
      </span>

    </h2>
    <div class="pt-4">
      <nav class="flex flex-col gap-1 w-full">
        <NuxtLink to="/">
          <div class="items-center gap-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24"
              height="24">
              <path
                d="M22,5.644V2.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5v1.089L15.076,.941c-1.869-1.262-4.283-1.262-6.152,0L2.424,5.327C.906,6.351,0,8.055,0,9.886v8.614c0,3.033,2.468,5.5,5.5,5.5h3c.828,0,1.5-.671,1.5-1.5V14.5c0-.276,.225-.5,.5-.5h3c.275,0,.5,.224,.5,.5v8c0,.829,.672,1.5,1.5,1.5h3c3.032,0,5.5-2.467,5.5-5.5V9.886c0-1.654-.739-3.204-2-4.242Zm-1,12.856c0,1.378-1.121,2.5-2.5,2.5h-1.5v-6.5c0-1.93-1.57-3.5-3.5-3.5h-3c-1.93,0-3.5,1.57-3.5,3.5v6.5h-1.5c-1.379,0-2.5-1.122-2.5-2.5V9.886c0-.833,.412-1.607,1.102-2.073L10.602,3.427c.85-.573,1.947-.573,2.797,0l6.5,4.387c.689,.465,1.102,1.24,1.102,2.072v8.614Z" />
            </svg>
            Home
          </div>
        </NuxtLink>

        <NuxtLink to="/theaters">
          <div class="items-center gap-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 24 24" width="24"
              height="24">
              <path
                d="m19.5,0H4.5C2.019,0,0,2.019,0,4.5v16c0,1.93,1.57,3.5,3.5,3.5h1.95c.421,0,.826-.18,1.109-.494.287-.317.426-.745.382-1.171-.369-3.587-2.341-5.75-3.44-6.696,1.987-.868,6.912-3.549,8.499-9.311,1.587,5.763,6.512,8.443,8.499,9.311-1.098.946-3.071,3.109-3.44,6.696-.044.426.096.854.382,1.171.283.314.688.494,1.109.494h1.95c1.93,0,3.5-1.57,3.5-3.5V4.5c0-2.481-2.019-4.5-4.5-4.5ZM5.946,22.437c.016.148-.031.29-.13.399-.095.105-.225.164-.366.164h-1.95c-1.378,0-2.5-1.121-2.5-2.5v-4.5h1.344c.557.398,3.195,2.476,3.602,6.437Zm-3.526-7.437h-1.42V4.5c0-1.93,1.57-3.5,3.5-3.5h1.476c-.122,3.304-1.394,4.804-2.818,6.135-.202.188-.212.505-.024.707.099.104.232.158.365.158.123,0,.245-.045.341-.135,1.528-1.429,3.006-3.159,3.134-6.865h2.007c-.185,6.018-3.627,8.663-5.706,9.706-.247.124-.347.425-.223.672.088.175.264.275.447.275.075,0,.152-.017.224-.053,2.285-1.147,6.07-4.045,6.258-10.601h1.518v1.5c0,9.167-8.165,12.19-9.08,12.5ZM12.5,2.5v-1.5h1.518c.188,6.556,3.973,9.453,6.258,10.601.072.036.148.053.224.053.183,0,.359-.101.447-.275.124-.247.024-.548-.223-.672-2.08-1.043-5.521-3.688-5.706-9.706h2.007c.128,3.706,1.606,5.437,3.134,6.865.096.09.219.135.341.135.133,0,.267-.054.365-.158.188-.202.178-.519-.024-.707-1.424-1.331-2.696-2.831-2.818-6.135h1.476c1.93,0,3.5,1.57,3.5,3.5v10.5h-1.418c-.841-.294-9.082-3.417-9.082-12.5Zm8,20.5h-1.95c-.141,0-.271-.059-.366-.164-.099-.109-.146-.251-.13-.399.407-3.96,3.045-6.039,3.602-6.437h1.344v4.5c0,1.379-1.122,2.5-2.5,2.5Z" />
            </svg>
            Theaters
          </div>
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
@media (max-width: 905px) {

  .is-not-show-menu {
    display: none;
  }

  .sidebar &.is-not-show-menu {
    display: none;
  }


}

@media (min-width: 768px) {
  .logo {
    display: flex;
    justify-content: start;
    align-items: center;
  }

}

.sidebar {
  width: 240px;
  background: black;
  color: white;
  padding: 16px;
  position: fixed;
  height: 100%;
  z-index: 999;
}

.logo {
  margin-bottom: 24px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-block: 12px;

  img {

    height: 32px;
  }
}

nav a {
  display: block;
  color: #b3b3b3;
  margin-bottom: 12px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  padding: 12px 12px;

  svg {
    fill: #ffffff;
  }
}

nav a.router-link-active {
  color: white;
  border-radius: 8px;
  background-color: #3a3a3a;

  svg {
    fill: white;
  }
}
</style>

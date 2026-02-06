<script lang="ts" setup>
import useTheaterStore from '../store/TheatreStore';

const store = useTheaterStore();
const route = useRoute();

onMounted(async () => {
    await store.getTheaterById(route.params.id! as string);
});
</script>

<template>
    <UContainer>
        <div>
            <span class="text-2xl font-semibold">{{ store.theater.name }}</span>
        </div>


        <div class="flex pt-3" v-for="value in store.theater.all_row" :key="value">
            <div v-for="col in store.theater.all_col" :key="col">
                <UButton v-if="store.theater.seats.find((item: any) => item.row === value && item.col === col)"
                    class="m-1 cursor-pointer" size="sm">
                    {{store.theater.seats.find((item: any) => item.row === value && item.col === col).name}}
                </UButton>
            </div>
        </div>
    </UContainer>
</template>
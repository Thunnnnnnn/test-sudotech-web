<script lang="ts" setup>
import type { TableColumn } from '@nuxt/ui';
import useTheaterStore from '../store/TheatreStore';
import type { Row } from '@tanstack/vue-table';

const store = useTheaterStore()
const UDropdownMenu = resolveComponent('UDropdownMenu')
const UButton = resolveComponent('UButton')

const getRowItems = (row: Row<any>) => {
    return [
        {
            type: 'label',
            label: 'Actions'
        },
        {
            type: 'separator'
        },
        {
            label: 'View',
            onSelect: () => {
                navigateTo(`/theaters/${row.getValue('id')}`)
            }
        },

    ]
}

const columns: TableColumn<any>[] = [
    {
        accessorKey: 'id',
        header: '#',
        cell: ({ row }) => `${row.index + 1}`
    },
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => row.getValue('name')
    },
    {
        id: 'actions',
        meta: {
            class: {
                td: 'text-right'
            }
        },
        cell: ({ row }) => {
            return h(
                UDropdownMenu,
                {
                    content: {
                        align: 'end'
                    },
                    items: getRowItems(row),
                    'aria-label': 'Actions dropdown'
                },
                () =>
                    h(UButton, {
                        icon: 'i-lucide-ellipsis-vertical',
                        color: 'neutral',
                        variant: 'ghost',
                        'aria-label': 'Actions dropdown'
                    })
            )
        }
    }
]

onMounted(async () => {
    await store.getAllTheaters();
})
</script>

<template>
    <UContainer>
        <div class="mt-4">
            <div class="text-3xl font-semibold">
                Theaters
            </div>

        </div>
        <UTable :columns="columns" :data="store.data" class="flex-1" />
    </UContainer>
</template>
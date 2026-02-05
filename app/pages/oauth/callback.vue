<script lang="ts" setup>
const route = useRoute()
onMounted(() => {
    if (route.query.token) {
        const token = route.query.token as string
        window.localStorage.setItem('token', token)
        navigateTo('/')
    } else {
        navigateTo('/login')
    }
})
</script>

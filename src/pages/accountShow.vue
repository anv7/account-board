<template>
    <div>
        <boardHeader></boardHeader>
        <HelloWorld class="show-board" msg=""/>
    </div>
</template>
<script>
	import boardHeader from '../components/boardHeader.vue'
	import HelloWorld from '../components/HelloWorld.vue'

	export default {
		components: {
			boardHeader,
			HelloWorld
		},
		data() {
			return {}
		},
		mounted() {

		}
	}
</script>
<style>

</style>

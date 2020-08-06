<template>
    <div id="app">
        <div class="copy-message" v-show="isCopyRes">{{ copyResMessage }}</div>
        <router-view></router-view>
    </div>
</template>

<script>

	export default {
		name: 'App',
		components: {},
		data() {
			return {
				copyResMessage: '',
				isCopyRes: false,
			}
		},
		methods: {
			// showBird() {
			//     let RandomQiang = Math.random() * 10
			//     if (RandomQiang < 3) {
			//         this.copyResMessage = '谁摸谁怀孕'
			//     } else if (7 > RandomQiang >= 3) {
			//         this.copyResMessage = '哎呦卧槽'
			//     } else {
			//         this.copyResMessage = '别摸强哥的鸟'
			//     }
			//     this.isCopyRes = true
			//     setTimeout(() => {
			//         this.isCopyRes = false
			//     }, 1000)
			// },
		}
	}
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 60px;

        .copy-message {
            width: 100%;
            position: fixed;
            max-width: 100px;
            bottom: 97%;
            left: 50%;
            transform: translate(-50%, 100%);
            z-index: 999;

            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #F4EEED;
            background: #999;
            border-radius: 4px;
        }

        .show-board {
            margin: 130px 0 0 0;
        }

        .logo-pic {
            cursor: pointer;
        }
    }
</style>

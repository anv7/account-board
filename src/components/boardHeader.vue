<template>
    <div class="a-header">
        <div class="logo-content">
            <div class="img-logo">
                <img src="../assets/Hotfood.svg" alt="">
            </div>
            <div class="desc-logo">
                账号快捷展板
            </div>
        </div>
        <div class="func-content">
            <div class="func-item">
                <div class="func-item-name">新版收银机</div>
                <div class="func-item-desc">cloudpos_vue</div>
            </div>
            <div class="func-item" @click="oldPos">
                <div class="func-item-name">老版收银机</div>
                <div class="func-item-desc">cloudpos_h5</div>
            </div>
        </div>
        <div class="add-account" @click="addAccount">
            协助添加账号
        </div>
    </div>
</template>
<script>
	export default {
		data() {
			// eslint-disable-next-line no-mixed-spaces-and-tabs
			return {}
		},
		mounted() {
		},
		methods: {
			addAccount() {
				this.$router.push({
					path: '/addaccount'
				})
			},
			oldPos() {
				this.$message.info('老版收银机暂无账号数据');
			}
		}
	}
</script>
<style lang="scss" scoped>
    .a-header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, .3);
        transition: top .5s;
        padding: 20px 0 20px;

        display: flex;
        justify-content: space-between;

        .logo-content {
            margin: 0 0 0 20px;
            width: 100px;
            display: flex;

            .img-logo {
                text-align: center;
                line-height: 40px;
                vertical-align: middle;
                margin: 0 6px;
                width: 50px;
                height: 50px;

                img {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
            }

            .desc-logo {
                display: inline-block;
                font-size: 12px;
                line-height: 24px;
            }
        }

        .func-content {
            width: 80%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .func-item {
                text-align: center;
                width: 20%;
                height: auto;
                /*line-height: 40px;*/
                color: #999;
                cursor: pointer;
                letter-spacing: 1px;

                .func-item-name {

                }

                .func-item-desc {
                    font-size: 12px;
                }
            }

            .func-item:hover {
                color: #111;
            }
        }

        .add-account {
            font-size: 14px;
            margin: 0 20px 0 0;
            width: 110px;
            height: 40px;
            text-align: center;
            border-radius: 6px;
            line-height: 40px;
            border: 1px #4fc08d solid;
            cursor: pointer;
        }
    }

</style>

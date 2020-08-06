<template>
    <div class="account-block">
        <!--此处:key不应该使用index,因为数据是本地写死，后期接入数据库后，请务必使用固定值 20200730-->
        <div class="account-item" v-for="(acItem, index) in accountList" :key="index">
            <div class="shop-code">
                商户号:{{ acItem.shopCode }}
                <div class="copy-code" :data-clipboard-text="acItem.shopCode"
                     @click="letsCopy()">
                    复制shopCode
                </div>
            </div>
            <div class="shop-name">商户名:{{ acItem.shopName }}</div>
            <div class="shop-pw" v-if="isCanShow">PW:{{ acItem.shopPassWord }}</div>
        </div>
    </div>
</template>
<script>
	import Clipboard from 'clipboard'

	export default {
		name: 'accountItem',
		props: {
			accountList: Array,
			isCanShow: {
				default: true,
				type: Boolean
			},
		},
		data() {
			return {
				btnMessage: '',
			}
		},
		methods: {
			letsCopy() {
				// document.execCommand("Copy", '','codeInfo'); // 浏览器复制命令
				let copyBoard = new Clipboard('.copy-code')
				copyBoard.on('success', () => {
					this.$message.info('复制成功了嘿');
					// 释放内存
					copyBoard.destroy()
				})
				copyBoard.on('error', () => {
					// 不支持复制
					this.$message.info('该浏览器不支持自动复制');
					// 释放内存
					copyBoard.destroy()
				})
			},
		}
	}

</script>
<style lang="scss" scoped>
    .account-block {
        width: 100%;
        height: 100%;

        .account-item {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            letter-spacing: 1px;

            div {
                margin: 0 10px;
            }

            .shop-code {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                .copy-code {
                    font-size: 10px;
                    padding: 4px;
                    border: 1px solid #F4EEED;
                    color: #666;
                    border-radius: 4px;

                }

                .copy-code:hover {
                    cursor: pointer;
                }

                .copy-code:active {
                    background: pink;
                }
            }

        }
    }
</style>

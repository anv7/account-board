<template>
    <div class="hello">
<!--        <h1 class="topic-title">{{ msg }}</h1>-->
        <div class="board-content">
            <h3>sit系统</h3>
            <accountItem :accountList="accountData_sit"/>
        </div>

        <div class="board-content">
            <h3>sim系统</h3>
            <accountItem :accountList="accountData_sim"/>
        </div>

        <div class="board-content">
            <h3>uat系统</h3>
            <accountItem :accountList="accountData_uat"/>
        </div>

        <div class="board-content">
            <h3>pre系统</h3>
            <accountItem :accountList="accountData_pre"/>
        </div>

        <div class="board-content">
            <h3>pro系统</h3>
            <accountItem :accountList="accountData_pro" :isCanShow="false"/>
        </div>

    </div>
</template>

<script>
	import accountItem from './accountItem.vue'
	// import AxiosTools from '../utils/AxiosTools'

	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		components: {
			accountItem
		},
		data() {
			return {
				accountData_source: [],
				accountData_sit: [],
				accountData_sim: [],
				accountData_uat: [],
				accountData_pre: [],
				accountData_pro: [],
			}
		},
		mounted() {
			this.accountDataInit()
			// this.ajaxTest()
		},
		methods: {
			// ajaxTest() {
			// 	AxiosTools.AxiosPost('', {
			// 		name: 'test1',
			// 		email: 'test@test1.com'
			// 	})
			// },
			accountDataInit() {
				this.accountData_source = [
					{
						systemVersion: 'pro',
						shopCode: '125806664',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'pro',
						shopCode: '125806668',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'pro',
						shopCode: '125807169',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'sit',
						shopCode: '125807642',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'sit',
						shopCode: '125807340',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'sim',
						shopCode: '125806668',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'sim',
						shopCode: '125807856',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'sim',
						shopCode: '125807737',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'pre',
						shopCode: '125827134',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'pre',
						shopCode: '125827454',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'pre',
						shopCode: '125827406',
						shopName: '1001',
						shopPassWord: '1x6',
					},
					{
						systemVersion: 'uat',
						shopCode: '125827194',
						shopName: '1001',
						shopPassWord: '1x6',
					},
				]

				this.formatTypeData(this.accountData_source)
			},
			formatTypeData(sourceData = []) {
				if (sourceData.length !== 0) {
					for (let i = 0; i < sourceData.length; i++) {
						switch (sourceData[i].systemVersion) {
							case "sit":
								this.accountData_sit.push(sourceData[i])
								break
							case "sim":
								this.accountData_sim.push(sourceData[i])
								break
							case "uat":
								this.accountData_uat.push(sourceData[i])
								break
							case "pre":
								this.accountData_pre.push(sourceData[i])
								break
							case "pro":
								this.accountData_pro.push(sourceData[i])
								break
						}
					}
				} else {
					console.error('格式化数据为空！')
				}

			},
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .hello {
        text-align: center;

        .board-content {
            width: 100%;
            height: 100%;
            h3 {
                letter-spacing: 2px;
            }
        }
        .topic-title{
            color: #333;
            letter-spacing: 1px;
        }

    }

</style>

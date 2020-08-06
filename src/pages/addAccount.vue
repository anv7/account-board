<template>
    <div class="add-form">
        <h5 style="text-align: center">(后端功能开发中)</h5>

        <h2 class="guide-info">
            准备协助提交账号信息..
        </h2>
        <div class="account-form">
            <a-form-model ref="ruleForm"
                          :model="form"
                          :rules="rules"
                          :label-col="labelCol"
                          :wrapper-col="wrapperCol"
                          class="form-model"
            >
                <a-form-model-item prop="chooseEnv" label="所属系统" :label-col="itemLabelCol" :wrapper-col="itemWrapperCol">
                    <a-select v-model="form.chooseEnv" placeholder="请选择" style="width: 200px" @change="handleChange">
                        <a-select-option  v-for="envItem in sysEnv" :key="envItem" :value="envItem">
                            {{ envItem }}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>

                <a-form-model-item ref="shopCode" prop="shopCode" label="商户号" :label-col="itemLabelCol" :wrapper-col="itemWrapperCol">
                    <a-input placeholder="shopCode.." style="width: 200px" v-model="form.shopCode" @blur="() => {$refs.shopCode.onFieldBlur()}"/>
                </a-form-model-item>

                <a-form-model-item ref="shopName" prop="shopName" label="商户名" :label-col="itemLabelCol" :wrapper-col="itemWrapperCol">
                    <a-input placeholder="shopName.." style="width: 200px" v-model="form.shopName" @blur="() => {$refs.shopName.onFieldBlur()}"/>
                </a-form-model-item>

                <a-form-model-item ref="pw" prop="pw" label="登陆密码" :label-col="itemLabelCol" :wrapper-col="itemWrapperCol">
                    <a-input placeholder="PW.." style="width: 200px" v-model="form.pw" @blur="() => {$refs.pw.onFieldBlur()}"/>
                </a-form-model-item>


                <a-form-model-item class="form-btn" :wrapper-col="{ span: 24 }">
                    <a-button type="primary" @click="onSubmit">
                        Send
                    </a-button>
                    <a-button style="margin-left: 30px;" @click="resetForm">
                        Reset
                    </a-button>
                </a-form-model-item>
            </a-form-model>

        </div>

    </div>
</template>
<script>
	export default {
		data() {
			return {
				labelCol: {span: 12},
				wrapperCol: {span: 8},
				itemLabelCol: {span: 11},
				itemWrapperCol: {span: 13},
				form: {
					shopCode: '',
					shopName: '',
					pw: '',
					chooseEnv: undefined,
				},
				rules: {
					shopCode: [
						{ required: true, message: '请输入商户号', trigger: 'blur' },
						{ min: 3, max: 5, message: 'Length should be 9', trigger: 'blur' },
					],
                    shopName: [
						{ required: true, message: '请输入商户名', trigger: 'blur' },
						{ min: 4, max: 4, message: 'Length should be 4', trigger: 'blur' },
					],
					pw: [
						{ required: true, message: '请输入此账号的登陆密码', trigger: 'blur' },
					],
					chooseEnv: [{ required: true, message: 'Please select Env', trigger: 'change' }],
				},
				sysEnv: ['sit', 'sim', 'uat', 'pre', 'pro'],



			}
		},
		mounted() {

		},
		methods: {
			handleChange() {

			},
			onSubmit() {
				this.$refs.ruleForm.validate(valid => {
					if (valid) {
						this.$message.info('协助收集正在开发中。。');
                        console.info(this.form)
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm() {
				this.$refs.ruleForm.resetFields();
			},

		}



	}
</script>
<style lang="scss" scoped>
    .add-form {
        .guide-info {
            font-size: 26px;
            margin: 20px 0 50px 0;
            text-align: center;
            color: #999;
        }
        .account-form{
            .form-model{
                .form-btn{
                    margin: 30px 0;
                    text-align: center;
                }
            }
        }
    }

</style>

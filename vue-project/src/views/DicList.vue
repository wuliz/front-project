<template>
  <div class="hello">
    <div><h3 style="text-align: left"></h3><br><hr></div>
    <div class="buttonDiv">
      <el-button type="primary"  @click="dialogVisible = true">新增</el-button>
    </div>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="type"
        label="字典类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="pVersion"
        label="产品型号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
    </el-table>
    <p></p>
    <div class="block" style="text-align: right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

    <el-dialog
      title="添加字典"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">

      <el-form ref="form" :model="form" label-width="80px" :rules="rules" >
        <el-form-item label="字典类型"  prop="type">
          <el-select v-model="form.type" placeholder="项目名称">
            <el-option label="项目一" value="1"></el-option>
            <el-option label="项目二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品型号"  prop="pVersion" >
          <el-select v-model="form.pVersion" placeholder="产品型号">
            <el-option label="型号一" value="1"></el-option>
            <el-option label="型号二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称"  prop="name">
          <el-input v-model="form.name"  maxlength="15" minlength="3" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="值"  prop="value">
          <el-input v-model="form.value"  maxlength="15" minlength="3" show-word-limit></el-input>
        </el-form-item>

        <el-form-item label="描述"  prop="description">
          <el-input type="textarea" v-model="form.description" maxlength="30" minlength="1"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>

<script>
import https from "../https";

export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [{
        type: '2016-05-02',
        pVesion: '王小虎',
        name: '上海市普陀区金沙江路 1518 弄',
        description:"no",
        value:"2"
      }],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      dialogVisible: false,
      form: {
        name: '',
        pVersion: '',
        type: '',
        description: '',
        value: ""
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在3 到 15 个字符', trigger: 'blur' }
        ],
        pVersion: [
          { required: true, message: '请选择产品型号', trigger: 'change' }
        ],
        type: [
          {  required: true, message: '请选择字典类型', trigger: 'change' }
        ],
        description: [
          {  required: true, message: '请输入描述', trigger: 'change' }
        ],
        value: [
          {  required: true, message: '请输入值' }
        ],

      }

    }
  },
  methods: {
    handleClose(done) {
     this.dialogVisible = false;
    },
    onSubmit() {
      console.log('submit!');
      this.$axios({
        method: "post",
        url: "task/saveDic",
        data:this.form
      }).then((res) => {
        this.tableData.push(this.form);

      })
      this.tableData.push(this.form);
      this.handleClose();
      this.form = {};
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    get(){
      let params ={"id":"1"}
      https.fetchGet('/task/queryById',params).then((data) => {
        /*this.base.token = data.data.token
        // console.log("this.base.tokenthis.base.token",this.base.token)
        this.indexPost2(this.rres)*/
        console.log("1",data);
      }).catch(err=>{
          console.log(err)
        }
      )
    },
    get1(){
      this.$axios({
        method: "get",
        url: "task/queryById",
        params: {"id":"1"}
      }).then((res) => {
        console.log(res.data);

      })
    }
  },
  created() {
    this.get1();
    console.log("1111")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.el-select {
  display: inline-block;
  position: relative;
  width: 100%;
}
a {
  color: #42b983;
}
  .buttonDiv{
    text-align: left;
  }
</style>

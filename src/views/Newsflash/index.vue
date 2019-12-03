<template>
<el-container>
  <el-header class="elheader">
    <p class="el-header-title">{{$t('message.title.am')}} </p>
    <p class="el-header-subtitle">{{$t('leftnav.newsflash')}}</p>
  </el-header>
  <el-main>
    <!-- Base Info -->
    <el-row>
        <p class="el-row-p">This table displays active news flashes, limited to 10.</p>
        <p class="el-row-p">Use the "Next" and "Previous" links to view other panels.</p>
    </el-row>
    <!-- current page -->
    <el-row>
      <div class="text-grey">
        <p class="el-row-p">News flashes:   1 - 10 of 11 news</p>
      </div>
    </el-row>
    <!-- News Table -->
    <el-row>
        <el-table
          :data="newsflashlist"
          style="width: 90%"
          max-height="500">
          <el-table-column
            fixed
            prop="ID"
            label="No."
            width="60">
          </el-table-column>
          <el-table-column
            prop="DESCRIPTION"
            label="Description"
            width="500">
          </el-table-column>
          <el-table-column
            prop="STARTDATE"
            label="Start Date"
            width="120">
          </el-table-column>
          <el-table-column
            prop="EXPIRYDATE"
            label="End Date"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="Action"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, newsflashs)"
                type="text"
                size="small">
                Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-row>

    <!-- add News button start -->
    <el-row>
      <el-col :span="6" :offset="18">
        <el-button type="text" @click="dialogFormVisible=true">Add News</el-button>
      </el-col>
      <!-- Add news Dialog -->
        <el-dialog title="Add News" :visible.sync="dialogFormVisible" center>
          <el-form :model="addNewsForm">
            <el-form-item :label-width="formLabelWidth">
             <span>Enter the dates to indicate when the news flash will be available</span>
            </el-form-item>
            <el-form-item label="date" :label-width="formLabelWidth" required>
              <el-col :span="8">
                <el-form-item prop="sdate">
                  <el-date-picker type="date" format="MM/dd/yyyy" value-format="MM/dd/yyyy" placeholder="start date" v-model="addNewsForm.startdate" style="width: 80%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="8">
                <el-form-item prop="edate">
                  <el-date-picker type="date" format="MM/dd/yyyy" value-format="MM/dd/yyyy" placeholder="End Date" v-model="addNewsForm.enddate" style="width: 80%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              Please provide a short description to be visible on the sign in panel and the complete details of the news flash in the content section below.
            </el-form-item>
            <el-form-item label="description" :label-width="formLabelWidth" required>
              <el-input type="textarea" v-model="addNewsForm.description"></el-input>
            </el-form-item>
            <el-form-item label="content" :label-width="formLabelWidth" required>
              <el-input type="textarea" v-model="addNewsForm.content"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="submitForm()">Submit</el-button>
          </div>
        </el-dialog>
        <!-- Add news dialog finish -->
    </el-row>
    <!-- Add news button finished -->
  </el-main>
  <el-footer>

  </el-footer>
</el-container>

</template>

<script>
import { get, post } from '../../common/request'
export default {
  name: 'elheader',

  methods: {
    deleteRow (index, rows) {
      console.log('--', index)
      rows.splice(index, 1)
    },
    init () {
      get('/newsflash/list?offset=0&limit=5').then((res) => {
        this.newsflashlist = res.data.newsflashlist
      })
    },

    submitForm () {
      console.log('submit news form====', this.addNewsForm)
      this._submitForm(this.addNewsForm)
      this.dialogFormVisible = false
    },

    async _submitForm (data = {}) {
      const result = await post('/newsflash/add', data, {

      })
      console.log('add news ==== ', result)
    },

    handleClose (done) {
      this.$confirm('Are you sure? ')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },

  data () {
    return {
      // news table
      newsflashlist: [],
      // Add news dialog
      dialogFormVisible: false,
      addNewsForm: {
        startdate: '',
        enddate: '',
        description: '',
        content: ''
      },
      formLabelWidth: '120px'
    }
  },

  created () {
    this.init()
  }
}
</script>
<style scoped>
 .elheader {
   line-height:1.7;
   margin-bottom: 20px;
 }
 .el-header-title {

   font-size: 20px;
   font-style: inherit;
   font-family: Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
 }
 .el-header-subtitle {
   font-size: 18px;
   font-style: italic;
   font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
 }
.el-row-p {
  font-size: 14px;
  font-style: inherit;
  font-family: Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.text-grey {
  background: rgba(0, 0, 0, 0.055);
  width: 90%;
}
</style>

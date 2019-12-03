<template>
    <el-container class="main" direction="vertical">
        <el-header class="elheader">
            <p class="title">{{$t('message.title.am')}} </p>
            <p class="subtitle">review</p>
        </el-header>
        <el-main>
            <el-row>
                <p>You cannot act on this request because it has already been processed/denied. The data contained on this page is presented exactly as it was submitted by the customer, which may have been altered before approval by an administrator.</p>
            </el-row>
            <el-row>
                <el-col class="col" :span="24">
                    <div class="grid-content bg-purple-dark">Profile information</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Name:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">Firstname lastname</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Telephone:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">123123123</div>
                </el-col>
                <!-- <el-col class="row-field" :span="19" prop="email" label="E-mail"><div class="border"></div></el-col> -->
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">E-mail:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">XXX@cn.ibm.com </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Company:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">IBM </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Address:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">US</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">City:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">LA</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">State/Province:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">US</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Country:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">US</div>
                </el-col>
            </el-row>
            </el-main>
            <el-row class="row">
            <el-col class="col" :span="24">
                <div class="grid-content bg-purple-dark">Entitlement Request</div>
            </el-col>
            </el-row>
            <el-main>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Request number: </div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">6349</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Application</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">Order Status Online</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Request Status:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">processed</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Requested Role:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">App Viewer</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Headquarters in:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">China</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">CSO Center:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">Commercial, State and Local government</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Entitlement type:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">All Entitlement</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">Processed Date:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">2019-09XX</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="row-title" :span="5">
                <div class="border">processed by:</div>
                </el-col>
                <el-col class="row-field" :span="19">
                <div class="border">mlisbona@us.ibm.com</div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
</script>
<style scoped>
.elheader {
   line-height:1.7;
   margin-bottom: 20px;
 }
 .title {
   font-size: 30px;
   font-style: inherit;
   font-family: Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
 }
 .subtitle {
   font-size: 18px;
   font-style: italic;
   font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
 }
.el-container {
  background-color: #fafcfd;
}
.el-header {
  color: #333;
  text-align: left;
  line-height: 400% !important;
  height: 12% !important;
}
.big-title {
  text-align: left;
  font-size: 2.5vw;
  font-family: bold !important;
}
.small-title {
  font-size: 1.2vw;
}
.row {
  margin-bottom: 1% !important;
  padding: 2% 2% 0 2% !important;
}
.el-row {
  margin-bottom: 0;
  padding: 0;
  text-align: left;
}
.col {
  border-radius: 2%;
}
.el-col {
  border-radius: 0;
  padding: 0 !important;
  text-align: left;
}
.row-title {
  font-size: 1.1vw;
  font-weight: bold;
  line-height: 200%;
}
.row-field {
  font-size: 1vw;
  /* font-family: bold; */
  /* font-weight: bold; */
}
  .el-main{
    padding:  0% 2% !important;
  }
  .bg-purple-dark {
    font-family: bold !important;
    line-height: 180% !important;
    font-size: 1vw !important;
    background-color: #e5e9f2 !important;
    padding: 0 !important;
    /* box-shadow: 0 2px 4px #9693c5, 0 0 6px #9693c5 */
  }
  .grid-content {
    /* border-radius: 4px !important; */
    min-height: 90% !important;
    text-align: left
  }
  .border{
    background-color: #FAFCFD;
    border-color: #FAFCFD;
    font-size: 1vw
  }
  .el-button{
    /* text-align: center !important; */
    background-color: #99a9bf;
    border-color: #99a9bf;
    color: #333 !important;
    padding: 1% 1%
  }
  .card-content{
     /* min-height: 90% !important; */
     text-align: center;
     padding-left: 0 !important;
     padding-right: 0 !important;
    /* font-size: 1vw */
  }
  .card-bg{
   font-family: bold !important;
    /* line-height: 180% !important; */
    /* font-size: 1vw !important; */
    background-color: #e5e9f2 !important;
}
.bg-purple-dark {
  font-family: bold !important;
  line-height: 180% !important;
  font-size: 1vw !important;
  background-color: #e5e9f2 !important;
  padding: 0 !important;
  /* box-shadow: 0 2px 4px #9693c5, 0 0 6px #9693c5 */
}
.grid-content {
  /* border-radius: 4px !important; */
  min-height: 90% !important;
  text-align: left;
}
.border {
  background-color: #fafcfd;
  border-color: #fafcfd;
  font-size: 1vw;
}
.el-button {
  /* text-align: center !important; */
  background-color: #99a9bf;
  border-color: #99a9bf;
  color: #333 !important;
  padding: 1.2% 1%;
}
.card-content {
  /* min-height: 90% !important; */
  text-align: center;
  padding-left: 0 !important;
  padding-right: 0 !important;
  /* font-size: 1vw */
}
.card-bg {
  font-family: bold !important;
  /* line-height: 180% !important; */
  /* font-size: 1vw !important; */
  background-color: #e5e9f2 !important;
}
.el-card {
  text-align: center;
  padding: 0 !important;
}
.button {
  float: right;
 }
 .updatebutton{
   text-align: center !important;
 }
 .el-card__body {
    padding: 0 !important;
}

/* .dialog-footer {
  background-color: #333;
} */

.dialog-footer .el-button {
  /* background-color: #333; */
  padding: 8px 12px;
}
</style>

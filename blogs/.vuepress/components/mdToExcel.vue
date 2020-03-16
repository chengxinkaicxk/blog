<template>
  <div class="container">
    <div class="u-header">
      <label>项目ID&Issue ID：</label>
      <el-input class="u-proj-id-input" v-model="projId" placeholder="项目id"></el-input>
      <el-input class="u-proj-issue-id-input" v-model="issueId" placeholder="Issue id"></el-input>
      <el-button class="u-conirm-btn" type="primary" @click="confirm">确定</el-button>
    </div>
    <div class="u-content">
      <mavon-editor class="u-markdown-editer" v-model="mdContent" ref="md" @change="change"/>
      <el-button class="u-editor-btn" type="primary" :loading="exportBtn.loading" @click="exportAsExl">
        {{exportBtn.text}}
      </el-button>
    </div>
  </div>
</template>

<script>
  import { getProjIssueDiscuss } from './apis/issues'
  import { table2markdown, mdTable2Excel } from './common/utils'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: 'md-to-excel',
    data() {
      return {
        projId: '',
        issueId: '',
        mdContent: '',
        mdHtml: '',
        exportBtn: {
          text: '导出为Excel',
          loading: false
        }
      }
    },
    components: {
      mavonEditor
    },
    methods: {
      _getMdTable(list) {
        const mdTbPattern = /\|[\s\S]*\|[\s-]+\|[\s\S]*\||<table>[\s\S]*<\/table>/,
          trPattern = /<tr>[\s\S]*?<\/tr>/m
        let mdTbHeader = '',
          md = ''

        list.forEach((item) => {
          const comment = item.body,
            matchRes = mdTbPattern.exec(comment)
          let mdTable = ''

          if(!matchRes) {
            return
          }
          mdTable = matchRes[0]
          if(trPattern.exec(mdTable)){
            // 将html的table转为markdown的table
            mdTable = table2markdown(mdTable)
          }

          let tmp = mdTable.split('\n')
          // 保存一个markdown表格的头
          mdTbHeader = mdTbHeader != '' ? mdTbHeader : tmp[0] + '\n' + tmp[1] + '\n'
          // tmp[2]有可能为undefined
          if(tmp[2]) {
            tmp = tmp.slice(2)
            md += tmp.join('\n') + '\n'
          }
        })

        md = mdTbHeader + md

        this.mdContent = md
      },
      async _getProjIssueDiscuss() {
        let tmpRes = [], totalPage=2, page=1

        while(page <= totalPage){
          await getProjIssueDiscuss(this.projId, this.issueId, {
            per_page: 100,
            page: page
          }).then((res) => {
            totalPage = res.totalPage
            tmpRes = tmpRes.concat(res.data)
            ++page
          })
        }

        this._getMdTable(tmpRes)
      },
      confirm() {
        this._getProjIssueDiscuss()
      },
      change(value, render){
        // render 为 markdown 解析后的结果
        this.mdHtml = render;
      },
      exportAsExl() {
        if(this.mdContent != '') {
          this.exportBtn.loading = true
          this.exportBtn.text = '导出中'
          mdTable2Excel(this.mdContent).then(() => {
            this.exportBtn.text = '导出为Excel'
            this.exportBtn.loading = false
          })
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container
    /*width: 150%*/
    /*margin: 0 auto*/
    .u-header
      .u-proj-id-input
        width: 100px
      .u-proj-issue-id-input
        width: 100px
        margin: 0 20px
    .u-content
      .u-markdown-editer
        margin: 20px 0
        height: 600px
        z-index: 0
      .u-conirm-btn
        margin-left: 20px
</style>

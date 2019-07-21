<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id"
          :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor v-model="model.body" useCustomImageHandler
        @imageAdded="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  props: {
    id:{}
  },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {},
      categories: []
    }
  },
  methods: {
    //自定义图片上传
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url)
      resetUploader()

    },

    // 新建分类并保存时，向服务器发送请求在服务器中保存，并跳转到分类列表
    async save() {
      // eslint-disable-next-line
      let res;
      if(this.id){
        res = await this.$http.put(`rest/articles/${this.id}`, this.model)
      } else { 
        res = await this.$http.post('rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 当编辑分类时，发送请求获取该分类的值
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },

    async fetchCatgories() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    }
  },
  created() {
    this.fetchCatgories()
    this.id && this.fetch()
  }
}
</script>
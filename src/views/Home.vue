<template>
  <n-space vertical size="large">
    <n-layout>

      <n-layout-header>
        <n-layout embedded content-style="padding: 24px;">
          <n-card>
            <n-space>
              <n-button>
                logo
              </n-button>
              <n-button>首页</n-button>
              <n-button>题库</n-button>
              <n-button>比赛</n-button>
              <n-button>用户</n-button>
              <n-button>讨论区</n-button>
              <n-button-group>
                <n-button>登陆</n-button>
                <n-button>注册</n-button>
              </n-button-group>
            </n-space>

          </n-card>
        </n-layout>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        核心部分
      </n-layout-content>
      <n-layout-footer bordered>页尾</n-layout-footer>
    </n-layout>


  </n-space>
</template>

<script lang="ts">
export default {}
</script>
<style>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
  border-width: 20px;
}



.n-layout-content {
  background: rgba(128, 128, 128, 0.2);
  margin-bottom: 10px;
}
</style>
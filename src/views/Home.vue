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
        <n-layout embedded content-style="padding: 24px;">
          <n-card>
            <n-grid cols="4" item-responsive>
              <n-grid-item span="0 400:1 600:2 800:3">
                <div class="light-green">
                  0～400px：不显示<br>
                  400～600px：占据空间 1<br>
                  600～800px：占据空间 2<br>
                  800px 以上：占据空间 3
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="green">
                  2
                </div>
              </n-grid-item>
            </n-grid>
          </n-card>
        </n-layout>
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

.light-green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(0, 128, 0, 0.12);
}

.green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
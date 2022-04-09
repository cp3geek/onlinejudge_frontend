<template>
    my OJ
</template>


<script lang="ts">
import {userlogin}from "@/api/index"
import { onMounted } from 'vue-demi'

export default{
    setup(){
        onMounted(()=>{
            userlogin("胡昌江","123456")
        })
    }
}

</script>

<style></style>
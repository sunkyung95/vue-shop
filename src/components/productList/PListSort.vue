<template>
  <div id="PListSort">
    <span>
        <select name="" id="PListSelect">
            <option value="">최신순</option>
            <option value="">오래된순</option>
        </select>
    </span>
  </div>
</template>

<script>
export default {
  name: "PListSort",
};
</script>

<style>
#PListSort {
    height: 50px;
}
#PListSelect {
    float: right;
    margin-top: 13px;
    margin-right: 50px;
    width: 150px;
}
</style>

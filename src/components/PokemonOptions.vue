<template>
  <div class="options-container">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
ul{
    list-style-type: none;

}

li{
    background: red;
    border: 1px solid;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 5px;
    width: 250px;
}

.options-container{
    display: flex;
    justify-content: center;
}

li:hover{
    background: rgba(0, 0, 0, 0.01);
}


</style>
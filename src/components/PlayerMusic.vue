<template>
  <div class="music-container">
    <div class="music-info">
      <h4 id="title">Back in Black</h4>
      <div class="progress-container">
        <div class="progress">
          
        </div>
      </div>
    </div>

    <audio src="../assets/music/song1.mp3" id="audio"></audio>

    <div class="img-container">
      <img src="../assets/images/song1.jpeg" alt="music-cover" id="cover">
    </div>

    <div class="navigation">
      <button id="prev" class="action-btn"> 
        <font-awesome-icon icon="backward" />
      </button>
      <button id="play" class="action-btn action-btn-big"> 
        <font-awesome-icon icon="play" />
      </button>
      <button id="next" class="action-btn"> 
        <font-awesome-icon icon="forward" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerMusic',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

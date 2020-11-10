<template>
  <div class="footer-content">
    <div class="footer-copy">
      <a
        href="https://github.com/bradleyhop/"
        rel="noopener"
        target="_blank"
      >
        Bradley Smith
      </a>
        &#169; 2020
      <a
        href="https://github.com/bradleyhop/d3-bar-chart"
        rel="noopener"
        target="_blank"
      >
        [ Project GitHub ]
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-content {
  color: $text-gray;
  height: 2.5rem;
  margin: 0;
  padding: 0.5rem;
  text-align: left;
}

.footer-copy {
  float: right;
  line-height: 1.2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  & a {
    color: $text-gray;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & a:active {
    color: $text-gray;
  }
}
</style>

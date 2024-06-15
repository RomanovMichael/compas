<script setup></script>

<template>
  <ui-popup class="layout-popups-video">
    <div class="layout-popups-video__content">
      <iframe src="https://www.youtube.com/embed/bolW0Fhr390?si=QFE-h_tLC9RYA8E_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </ui-popup>
</template>

<style lang="scss">
.layout-popups-video {
  &__content {
    width: 960px;
    height: 532px;

    @include tablets {
      width: 500px;
      max-height: 300px;
    }

    @include phones {
      width: 100%;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
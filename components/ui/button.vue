<script setup>
import ArrowRightIcon from '@/assets/icons/simple/arrow-right.svg?component'
import PlayIcon from '@/assets/icons/simple/play.svg?component'

const props = defineProps({
  label: {
    type: String,
    default: 'Button',
  },
  color: {
    type: String,
    default: 'primary',
  },
  playBtn: {
    type: Boolean,
    required: false, 
  },
  requestBtn: {
    type: Boolean,
    required: false
  },
  action: {
    type: String,
    default: 'button'
  }
})

const emit = defineEmits(['click'])

const clickHandler = () => {
  emit('click')
}
</script>

<template>
  <button
    :type="action"
    @click="clickHandler"
    :class="[
      'ui-button',
      `ui-button--${color}`,
      {'ui-button--request': requestBtn},
      {'ui-button--play': playBtn}
    ]"
  >
    <span v-if="playBtn" class="ui-button__playicon">
      <play-icon/>
    </span>
    <span v-html="label" class="ui-button__text"></span>
    <span v-if="playBtn" class="ui-button__duration"> (2 мин. 36 сек)</span>
    <span v-if="requestBtn" class="ui-button__arrow">
      <arrow-right-icon/>
    </span>
  </button>
</template>

<style lang="scss">
.ui-button {
  height: 45px;
  padding: 0 20px;
  border-radius: 7px;
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  transition: 0.25s ease;

  &:hover {
    &.ui-button--primary {
      opacity: .8;
    }

    &.ui-button--transparent {
      color: var(--orange);
    }

    &.ui-button--request .ui-button__arrow {
      transition: all .25s ease;
      transform: translateX(4px);
    }

    &.ui-button--play {
      opacity: 1;
      transition: all .25s ease;
      box-shadow: var(--smoke);
      background-color: var(--dark);
      border-color: var(--dark);
      color: var(--light);

      & .ui-button__duration {
        color: var(--orange);
      }

      & .ui-button__playicon {
        will-change: transform;

        & path {
          transition: all .25s ease;
          will-change: transform;
        }

        & path.fill {
          color: var(--orange);
          stroke:var(--orange);
          fill: var(--orange);
        }

        & path.thumb {
          color: var(--light);
          fill: var(--light);
        }
      }
    }
  }

  &.ui-button--primary {
    background-color: var(--blue);
    color: var(--light);
  }

  &.ui-button--transparent {
    background-color: transparent;
    color: var(--light);
  }

  &.ui-button--request {

    & .ui-button__arrow {
      position: relative;
      width: 14px;
      height: 12px;
      margin-left: 4px;
      transition: all .25s ease;
      top: 2px;

      & svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &.ui-button--play {
    color: var(--dark);
    background: transparent;
    border: 1px solid rgb(5, 132, 254);
    transition: all .25s ease;

    & .ui-button__duration {
      font-size: 15px;
      color: var(--text-blue);
      margin-left: 4px;
    }

    & .ui-button__playicon {
      will-change: transform;
      position: relative;
      width: 33px;
      height: 32px;
      margin-right: 6px;

      & svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }

      & path {
        transition: all .25s ease;
        transform: translate3d(0,0,0);
      }

      & path.fill {
        color: var(--light);
        fill: var(--light);
      }

      & path.thumb {
        color: #1253A2;
        fill: #1253A2;
      }
    }
  }

  & span {
    flex-shrink: 0;
    display: inline-flex;
  }
}
</style>
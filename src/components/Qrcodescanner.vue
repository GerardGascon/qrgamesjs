<template>
  <div style="height: 100vh">
    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
      <div v-if="validationPending" class="validation-pending">
        Loading...
      </div>
    </qrcode-stream>
  </div>
</template>

<script>
import {QrcodeStream} from 'vue3-qrcode-reader'

export default {
    components: { QrcodeStream },

    data () {
        return {
            isValid: undefined,
            camera: 'auto',
            result: null,
        }
    },

    computed: {
        validationPending () {
          return this.isValid === undefined
            && this.camera === 'off'
        },
    },

    methods: {
        onInit (promise) {
            promise
            .catch(console.error)
            .then(this.resetValidationState)
        },

        resetValidationState () {
            this.isValid = undefined
        },

        async onDecode (content) {
            let res = content.replace("http://", "")

            document.getElementById("app").style = "display: none;"
            document.getElementById("game").innerHTML = res;

            var arr = document.getElementById("game").getElementsByTagName('script')
            for (let i = 0; i < arr.length; i++)
                eval(arr[i].innerHTML)
                
            this.turnCameraOff()
        },

        turnCameraOn () {
          this.camera = 'auto'
        },

        turnCameraOff () {
          this.camera = 'off'
        },

        timeout (ms) {
            return new Promise(resolve => {
                window.setTimeout(resolve, ms)
            })
        }
    }
}

</script>

<style scoped>
.validation-success,
.validation-failure,
.validation-pending {
    position: absolute;
    width: 100%;
    height: 100%;
    
    background-color: rgba(255, 255, 255, .8);
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
    padding: 10px;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
}
.validation-success {
    color: green;
}
.validation-failure {
    color: red;
}
</style>


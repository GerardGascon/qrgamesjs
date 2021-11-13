<template>
    <div>
        <qrcode-capture @decode="onDecode" />
    </div>
</template>

<script>
import { QrcodeCapture } from 'vue3-qrcode-reader'

export default {
    components: { QrcodeCapture },

    data () {
        return {
            result: ''
        }
    },

    methods: {
        onDecode (result) {
            let res = result.replace("http://", "")
            document.getElementById("app").style = "display: none;"
            document.getElementById("game").innerHTML = res;

            var arr = document.getElementById("game").getElementsByTagName('script')
            for (let i = 0; i < arr.length; i++)
                eval(arr[i].innerHTML)
            
            this.result = res
        }
    }
}
</script>

<style scoped>
input::-webkit-file-upload-button {
  visibility: hidden;
  display: none;
}
input::before {
  content: 'Select some files';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
input:hover::before {
  border-color: black;
}
input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>
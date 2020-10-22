import {wx,OnekitComponent} from 'weixin2alipay'

OnekitComponent({
    options: {
        addGlobalClass: true
    },
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        content: {
            type: String,
            value: ''
        }
    }
})

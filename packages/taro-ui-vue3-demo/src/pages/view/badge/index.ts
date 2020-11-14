
import { h, defineComponent, resolveComponent } from 'vue'
import { AtBadge, AtButton } from "taro-ui-vue3"
import { Page, Panel } from '@/components/index'
import './index.scss'

export default defineComponent({
  name: "BadgeDemo",

  setup() {

    return () => {
      const dot = '···'
      const View = resolveComponent(process.env.TARO_ENV === 'h5' ? 'taro-view' : 'view')
      const Text = resolveComponent(process.env.TARO_ENV === 'h5' ? 'taro-text' : 'text')

      return (
        h(Page, { headerTitle: 'Badge 徽标' }, {
          default: () => [

            /* 数字*/
            h(Panel, { title: '数字' }, {
              default: () => [
                h(View, { class: 'badge-item' }, {
                  default: () => [
                    h(View, { class: 'subitem' }, {
                      default: () => [
                        h(AtBadge, { value: 10, maxValue: 99, }, {
                          default: () => [
                            h(AtButton, { size: 'small', circle: true }, {
                              default: () => [
                                h(Text, null, { default: () => '按钮' })
                              ]
                            }),
                          ]
                        }),
                      ]
                    }),
                    h(View, { class: 'subitem' }, {
                      default: () => [
                        h(AtBadge, { value: 100, maxValue: 99, }, {
                          default: () => [
                            h(AtButton, { size: 'small', }, {
                              default: () => [
                                h(Text, null, { default: () => '按钮' })
                              ]
                            }),
                          ]
                        }),
                      ]
                    })
                  ]
                })
              ]
            }),

            /* 小红点*/
            h(Panel, { title: '小红点' }, {
              default: () => [
                h(View, { class: 'badge-item' }, {
                  default: () => [
                    h(View, { class: 'subitem' }, {
                      default: () => [
                        h(AtBadge, { dot: true }, {
                          default: () => [
                            h(AtButton, {
                              size: 'small',
                              circle: true
                            }, {
                              default: () => [
                                h(Text, null, { default: () => '按钮' })
                              ]
                            }),
                          ]
                        }),
                      ]
                    }),
                    h(View, { class: 'subitem' }, {
                      default: () => [
                        h(AtBadge, { dot: true }, {
                          default: () => [
                            h(AtButton, { size: 'small', }, {
                              default: () => [
                                h(Text, null, { default: () => '按钮' })
                              ]
                            }),
                          ]
                        }),
                      ]
                    }),
                  ]
                }),
              ]
            }),

            /* 文本*/
            h(Panel, { title: '文本' }, {
              default: () => [
                h(View, { class: 'badge-item' }, {
                  default: () => [
                    h(View, { class: 'subitem' }, {
                      default: () => [
                        h(AtBadge, { value: 'NEW', }, {
                          default: () => [
                            h(AtButton, {
                              size: 'small', circle: true
                            }, {
                              default: () => [
                                h(Text, null, { default: () => '按钮' })
                              ]
                            }),
                          ]
                        }),
                      ]
                    }),
                    h(View, { class: 'subitem' }, {
                      default: () => [
                        h(AtBadge, { value: 'NEW', }, {
                          default: () => [
                            h(AtButton, { size: 'small', }, {
                              default: () => [h(Text, null, { default: () => '按钮' })]
                            }),
                          ]
                        }),
                      ]
                    }),
                  ]
                }),
              ]
            }),

            /* 省略号*/
            h(Panel, { title: '省略号' }, {
              default: () => [
                h(View, { class: 'badge-item' }, {
                  default: () => [
                    h(View, { class: 'subitem' }, {
                      default: () => [
                        h(AtBadge, { value: dot, }, {
                          default: () => [
                            h(AtButton, {
                              size: 'small', circle: true
                            }, {
                              default: () => [
                                h(Text, null, { default: () => '按钮' })
                              ]
                            }),
                          ]
                        }),
                      ]
                    }),
                    h(View, { class: 'subitem' }, {
                      default: () => [
                        h(AtBadge, { value: dot, }, {
                          default: () => [
                            h(AtButton, { size: 'small', }, {
                              default: () => [
                                h(Text, null, { default: () => '按钮' })
                              ]
                            }),
                          ]
                        }),
                      ]
                    }),
                  ]
                }),
              ]
            })
          ]
        })
      )
    }
  }
})

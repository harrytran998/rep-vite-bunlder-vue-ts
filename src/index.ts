import type { App } from 'vue'
import _Button from './Button.vue'
import { SFCWithInstall } from './types'

const Button = _Button as SFCWithInstall<typeof _Button>

Button.install = (vue: App) => {
  vue.component(_Button.name, _Button)
}

export default Button
export * from './types'

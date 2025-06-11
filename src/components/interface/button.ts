import { withDefaults } from "vue"
import { defineProps } from "vue"

export interface Props{
    text?: string
    type: 'button' | 'submit' |'reset'
}
export const props = withDefaults(defineProps<Props>(),{
    text:  "",
    type: "submit"
})
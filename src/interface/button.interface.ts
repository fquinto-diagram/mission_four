import { withDefaults } from "vue"
import { defineProps } from "vue"

export interface Button{
    text?: string,
    type?: 'button' | 'submit' |'reset',
}
export const props = withDefaults(defineProps<Button>(),{
    text:  "",
    type: "submit",
})
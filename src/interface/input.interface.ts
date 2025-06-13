import { withDefaults } from "vue"
import { defineProps } from "vue"

export interface Input{
    placeholder?: string
    label?: string
    modelValue?: string
    required?: boolean
}
export const propsInput = withDefaults(defineProps<Input>(),{
    placeholder: '',
    modelValue: '',
    required: false
})
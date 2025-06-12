import { watch, ref } from "vue";

export function useFieldWatcher(field: any, validationFn: (value: any) => boolean, errorMessage: string) {
    const error = ref("");

    watch(field, (newValue) => {
        error.value = validationFn(newValue) ? "" : errorMessage;
    });

    return { error };
}

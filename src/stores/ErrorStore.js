import { defineStore } from 'pinia';

export const ErrorStore = defineStore('error', {
    state: () => {
        return {
            isError: false,
            statusCode: null,
        }
    },
    actions: {
        showError(statusCode) {
            this.statusCode = statusCode,
                this.isError = true
        },
    }
})
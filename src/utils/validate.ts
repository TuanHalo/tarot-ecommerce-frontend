const REGEXP: { [ key: string]: RegExp } = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
} 

const ERROR_MESSAGE = {
    required: 'Please fill in this field',
    regexp: 'Field not like format'
}

type ErrorObjectType = {
    [key: string]: string
}

type RulesType = {
    [name: string]: {
        [key: string]: any
    }[]
}

export const validate = (rules: RulesType, forms: any) => {
    const errorObject: ErrorObjectType = {}

    for (let name in rules) {
        for (let rule of rules[name]) {
            if (rule.required) {
                if (!forms[name]?.trim()) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.required
                }
            }

            if (rule.regexp && forms[name]) {
                let regexp = rule.regexp
                if (regexp in REGEXP) {
                    regexp = REGEXP[regexp]
                } else if (!(regexp instanceof RegExp)) {
                    regexp = new RegExp('')
                }

                if (!regexp.test(forms[name])) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.regexp
                }
            }
        }
    }

    return errorObject;
}

export const required = (message?: string) => ({
    required: true,
    message
})

export const regexp = (pattern: string, message?: string) => ({
    regexp: pattern,
    message
})
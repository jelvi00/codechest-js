
const PROPS = {
    PLAN: { name: 'plan', initial: [] },
    AFFILIATE: { name: 'affiliate', initial: {} },
    PHONE_NUMBER: { name: 'phoneNumber', initial: '' },
    IMAGES: { name: 'images', initial: [] }
}

Object.values(PROPS).reduce((a, v) => ({ ...a, [v.name]: v.initial}), {});
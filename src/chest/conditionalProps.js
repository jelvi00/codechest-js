const moreInfo = {
    info: 'Please go to desk'
}

const info = {
    address: 'Carretera Mella',
    postCode: '11011',
    ...(Object.keys(moreInfo || {}).length && {moreInfo})
}
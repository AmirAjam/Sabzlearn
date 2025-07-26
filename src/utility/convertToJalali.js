import moment from 'jalali-moment'

const convertToJalali = (dateStr) => {
    if (!dateStr) return ''
    return moment(dateStr).locale('en').format('jYYYY/jMM/jDD')
}

export default convertToJalali
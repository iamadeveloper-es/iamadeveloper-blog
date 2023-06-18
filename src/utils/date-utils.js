export class DateUtils{

    static toLocaleDateString(date, locale = 'es-ES') {
        return new Date(date).toLocaleDateString(locale)
    }
    static getYear(date = new Date()) {
        return date.getFullYear()
    }
}
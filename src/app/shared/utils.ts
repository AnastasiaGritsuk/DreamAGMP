export class Utils {
    public static uniqueId(): string {
        const date = Date.now();
        const random = Math.random() * Math.random();

        return Math.floor(date * random).toString();
    }
}

class AppError {
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

// I made this to dont have to write this object on response for every response return and prevent errors
const AppErrorObj = (message: string) => ({
    message
})

export { AppError, AppErrorObj }
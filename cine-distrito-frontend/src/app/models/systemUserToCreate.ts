export class SystemUserToCreate{
    constructor(
        public username: string,
        public email: string,
        public password: number,
        public role: []
    ){}

}
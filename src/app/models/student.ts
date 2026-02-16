export class Student{
       id: string;
       name: string;
       age: string;
       gender:string;
       class: string;
       email:string;
       password:string

    constructor(args: any) {
        args = args ?? {};
        this.id = args.id;
        this.name = args.name;
        this.age = args.age;
        this.gender =args.gender;
        this.class = args.class;
        this.email =args.email;
        this.password=args.password
    }
}
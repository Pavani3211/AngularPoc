export class Student{
       id: string;
       studentname: string;
       age: string;
       gender:string;
       class: string;
       email:string;
       password:string

    constructor(args: any) {
        args = args ?? {};
        this.id = args.id;
        this.studentname = args.studentname;
        this.age = args.age;
        this.gender =args.gender;
        this.class = args.class;
        this.email =args.email;
        this.password=args.password
    }
}
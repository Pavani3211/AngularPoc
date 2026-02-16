export class Teacher {
    id: string;
    name: string;
    subjectId: string;
    subjectName: string;

    constructor(args: any) {
        args = args ?? {};
        this.id = args.id;
        this.name = args.name;
        this.subjectId = args.subjectId;
        this.subjectName = args.subjectName;
    }
}

export class Subject {
    id: string;
    name: string;

    constructor(args: any) {
        args = args ?? {};
        this.id = args.id;
        this.name = args.name;
    }
}
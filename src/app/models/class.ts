export class Class {
    id: string;
    classname: string;
    sectionId: string;
    sectionName: string;
    roomno:string;

    constructor(args: any) {
        args = args ?? {};
        this.id = args.id;
        this.classname = args.classname;
        this.sectionId = args.sectionId;
        this.sectionName = args.sectionName;
        this.roomno =args.roomno
    }
}

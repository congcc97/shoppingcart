export class Item{
    // thuoc tinh
    private _id : number;
    private _ten : string;
    private _nsx :string;
    private _gia : number;
    private _tinhtrang : boolean;
    private _anh : string;

    // get and set _id
    public get id() : number {
        return this._id;
    }

    public set id(v : number) {
        this._id = v;
    }
    // get and set _ten
    public get ten() : string {
        return this._ten;
    }

    public set ten(v : string) {
        this._ten = v;
    }
    // get and set _nsx
    public get nsx() : string {
        return this._nsx;
    }

    public set nsx(v : string) {
        this._nsx = v;
    }
    // get and set _gia
    public get gia() : number {
        return this._gia;
    }

    public set gia(v : number) {
        this._gia = v;
    }
    // get and set _tinhtrang
    public get tinhtrang() : boolean {
        return this._tinhtrang;
    }

    public set tinhtrang(v : boolean) {
        this._tinhtrang = v;
    }
    // get and set _anh
    public get anh() : string {
        return this._anh;
    }

    public set anh(v : string) {
        this._anh = v;
    }


    //Constructor
    constructor(id:number, ten:string, nsx:string, gia:number, tinhtrang:boolean, anh:string) {
        this.id = id;
        this.ten = ten;
        this.nsx = nsx;
        this.gia = gia;
        this.tinhtrang = tinhtrang;
        this.anh = anh;
    }
}



export class Task {
    public d:number=0;

    constructor (public unit_Name: string,
        public unit_Price : number,
    public unit_Count : number,
     
    public sum : number
    
)
    
    {
       
      
       
    }

    toString () {
       this.d=this.d+this.sum;
        return `Unit , unit_Name : ${this.unit_Name}, unit_Price : ${this.unit_Price}, unit_Count : ${this.unit_Count}, sum : ${this.sum}.`
    }

    setCompleted(){
        this.d += this.sum;
   }

   toString2 () {
    return `Unit  sum : ${this.sum}.`
}
    
}

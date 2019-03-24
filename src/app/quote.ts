export class Quote {

    public showDetails: boolean;
    public submitDate: Date;

    constructor(
        public id: number,
        public enterQuote: string,
        public author: string,
        public upVote: number,
         public downVote:number,
        public submitter: string,) {

            this.submitDate = new Date();
    }

}

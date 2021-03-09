export class GridResponse {
    public AggregationPayload: Record<string, number>;
    public Counter: number;
    public CurrentPage = 0;
    public FilteredRecordCount: number;
    public Payload: any;
    public TotalPages = 1;
    public TotalRecordCount: number;

    constructor(Counter = 0) {
        this.Counter = isNaN(Counter) ? 0 : Counter;
    }
}

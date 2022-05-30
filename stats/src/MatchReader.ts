import {MatchData} from "./MatchData";
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";
import {CsvFileReader} from "./CsvFileReader";

export interface DataReader {
    read(): void
    data: string[][]
}

export class MatchReader {
    matches: MatchData[] = [];

    static fromCsv(file: string): MatchReader {
        return new MatchReader(new CsvFileReader(file))
    }

    constructor(public reader: DataReader) {
        this.reader = reader;
    }

    load(){
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            }
        );
    }
}

import {MatchData} from "./MatchData";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {HtmlReport} from "./reportTargets/HtmlReports";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    printReport(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)
        this.outputTarget.printReport(output)
    }

    static buildAndPrintHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis('Man United'),
            new HtmlReport()
        )
    }
}

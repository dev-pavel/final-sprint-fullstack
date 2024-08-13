import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

type Props = {
    title: string;
    company: string;
    location: string;
    description: string;
    minSalary: string;
    maxSalary: string;
    jobType: string;
}

function formatNumberWithCommas(number: string): string {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Vacancy(props: Props) {

    return (
        <Card>
            <CardContent className="grid gap-2">
                <div className="flex items-center justify-between">
                    <div className="font-semibold text-lg">{props.title}</div>
                    <Badge variant="secondary">{props.jobType}</Badge>
                </div>
                <div className="text-muted-foreground">{props.company}</div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    {props.location}
                </div>
                <p>
                    {props.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="font-semibold">
                        ${formatNumberWithCommas(props.minSalary.toString())} - ${formatNumberWithCommas(props.maxSalary.toString())}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

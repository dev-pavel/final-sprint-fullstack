import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

export default function Vacancy() {

    return (
        <Card>
            <CardContent className="grid gap-2">
                <div className="flex items-center justify-between">
                    <div className="font-semibold text-lg">Software Engineer</div>
                    <Badge variant="secondary">Full-time</Badge>
                </div>
                <div className="text-muted-foreground">Acme Inc</div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    San Francisco, CA
                </div>
                <p>
                    We are looking for an experienced software engineer to join our team and help build our
                    next-generation platform.
                </p>
                <div className="flex items-center justify-between">
                    <div className="font-semibold">$120,000 - $150,000</div>
                    <Button variant="outline">Apply</Button>
                </div>
            </CardContent>
        </Card>
    )
}

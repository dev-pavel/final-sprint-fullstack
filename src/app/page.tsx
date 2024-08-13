import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination"

export default function Component() {
  return (
      <div className="flex flex-col min-h-dvh">
        <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Find your next job</h1>
              <p className="text-lg">Search millions of jobs from thousands of companies.</p>
            </div>
            <form className="w-full max-w-md flex items-center">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search jobs"
                    className="w-full rounded-l-full bg-primary-foreground/10 pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary-foreground/20"
                />
              </div>
              <Button variant="outline" className="rounded-r-full">
                <div className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>
        </header>
        <main className="container mx-auto py-10 px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-8">
          <div className="space-y-6">
            <div className="grid gap-2">
              <h3 className="font-semibold">Job Type</h3>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="job-type-fulltime" /> Full-time
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="job-type-parttime" /> Part-time
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="job-type-contract" /> Contract
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="job-type-internship" /> Internship
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="job-type-temporary" /> Temporary
                </Label>
              </div>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Salary Range</h3>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="salary-range-0-50k" /> $0 - $50,000
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="salary-range-50-100k" /> $50,000 - $100,000
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="salary-range-100-150k" /> $100,000 - $150,000
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="salary-range-150k-plus" /> $150,000+
                </Label>
              </div>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Job Category</h3>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-technology" /> Technology
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-healthcare" /> Healthcare
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-finance" /> Finance
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-marketing" /> Marketing
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-education" /> Education
                </Label>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Jobs</h2>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <div className="w-4 h-4" />
                      Sort by
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuRadioGroup value="relevance">
                      <DropdownMenuRadioItem value="relevance">Relevance</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="salary">Salary</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-lg">Software Engineer</div>
                      <Badge variant="secondary">Full-time</Badge>
                    </div>
                    <div className="text-muted-foreground">Acme Inc</div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-4 h-4" />
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
                <Card>
                  <CardContent className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-lg">Marketing Manager</div>
                      <Badge variant="secondary">Full-time</Badge>
                    </div>
                    <div className="text-muted-foreground">Acme Corp</div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-4 h-4" />
                      New York, NY
                    </div>
                    <p>
                      We are seeking a talented marketing manager to lead our digital marketing efforts and drive growth.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">$80,000 - $100,000</div>
                      <Button variant="outline">Apply</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-lg">Registered Nurse</div>
                      <Badge variant="secondary">Full-time</Badge>
                    </div>
                    <div className="text-muted-foreground">Acme Healthcare</div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-4 h-4" />
                      Chicago, IL
                    </div>
                    <p>We are looking for a compassionate and experienced registered nurse to join our growing team.</p>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">$60,000 - $80,000</div>
                      <Button variant="outline">Apply</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-lg">Financial Analyst</div>
                      <Badge variant="secondary">Full-time</Badge>
                    </div>
                    <div className="text-muted-foreground">Acme Finance</div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-4 h-4" />
                      Boston, MA
                    </div>
                    <p>
                      We are seeking a detail-oriented financial analyst to join our team and help drive strategic
                      decision-making.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">$90,000 - $120,000</div>
                      <Button variant="outline">Apply</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Pagination className="justify-self-center">
              <PaginationContent>
                <PaginationItem>
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4" />
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4" />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>
  )
}

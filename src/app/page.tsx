'use client';

import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import {Checkbox} from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"
import Vacancy from "@/components/vacancy";
import {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface Filters {
    jobType: string[];
    salaryRange: string[];
    category: string[];
}

export default function Page() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const [search, setSearch] = useState<string>(searchParams.get('search') as string || '');
    const [filters, setFilters] = useState<Filters>({
        jobType: (searchParams.get('jobType') as string)?.split(',') || [],
        salaryRange: (searchParams.get('salaryRange' as string))?.split(',') || [],
        category: (searchParams.get('category') as string)?.split(',') || [],
    });
    const [dataBase, setDataBase] = useState<string>(searchParams.get('database') as string || 'mongo');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleCheckboxChange = (checked: boolean, key: keyof Filters, param: string) => {
        setFilters((prev) => {
            const updatedFilters = {...prev};
            if (checked) {
                updatedFilters[key] = [...updatedFilters[key], param];
            } else {
                updatedFilters[key] = updatedFilters[key].filter((item) => item !== param);
            }
            return updatedFilters;
        })
    }

    const applyFilters = () => {
        const params = new URLSearchParams();

        params.set('search', search);
        params.set('jobType', filters.jobType.join(','));
        params.set('salaryRange', filters.salaryRange.join(','));
        params.set('category', filters.category.join(','));
        params.set('database', dataBase);

        router.push(pathname + '?' + params.toString());
    }

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
                            <Input
                                type="search"
                                placeholder="Search jobs"
                                className="w-full rounded-l-full bg-primary-foreground/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary-foreground/20"
                                value={search}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button
                            className="rounded-r-full border border-input"
                            onClick={applyFilters}
                            type={'button'}
                        >
                            Search
                        </Button>
                    </form>
                </div>
            </header>
            <main className="container mx-auto py-10 px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-8">
                <div className="space-y-6">
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Job Type</h3>
                        </div>
                        <div className="grid gap-2">
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="job-type-fulltime"
                                    checked={filters.jobType.includes('fulltime')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'jobType', 'fulltime')}
                                /> Full-time
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="job-type-parttime"
                                    checked={filters.jobType.includes('parttime')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'jobType', 'parttime')}
                                /> Part-time
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="job-type-contract"
                                    checked={filters.jobType.includes('contract')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'jobType', 'contract')}
                                /> Contract
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="job-type-internship"
                                    checked={filters.jobType.includes('internship')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'jobType', 'internship')}
                                /> Internship
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="job-type-temporary"
                                    checked={filters.jobType.includes('temporary')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'jobType', 'temporary')}
                                /> Temporary
                            </Label>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Salary Range</h3>
                        </div>
                        <div className="grid gap-2">
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="salary-range-0-50k"
                                    checked={filters.salaryRange.includes('0-50k')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'salaryRange', '0-50k')}
                                /> $0 - $50,000
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="salary-range-50-100k"
                                    checked={filters.salaryRange.includes('50-100k')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'salaryRange', '50-100k')}
                                /> $50,000 - $100,000
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="salary-range-100-150k"
                                    checked={filters.salaryRange.includes('100-150k')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'salaryRange', '100-150k')}
                                /> $100,000 - $150,000
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="salary-range-150k-plus"
                                    checked={filters.salaryRange.includes('150k-plus')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'salaryRange', '150k-plus')}
                                /> $150,000+
                            </Label>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Job Category</h3>
                        </div>
                        <div className="grid gap-2">
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="category-technology"
                                    checked={filters.category.includes('technology')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'category', 'technology')}
                                /> Technology
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="category-healthcare"
                                    checked={filters.category.includes('healthcare')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'category', 'healthcare')}
                                /> Healthcare
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="category-finance"
                                    checked={filters.category.includes('finance')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'category', 'finance')}
                                /> Finance
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="category-marketing"
                                    checked={filters.category.includes('marketing')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'category', 'marketing')}
                                /> Marketing
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox
                                    id="category-education"
                                    checked={filters.category.includes('education')}
                                    onCheckedChange={(checked) => handleCheckboxChange(!!checked, 'category', 'education')}
                                /> Education
                            </Label>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={applyFilters}
                    >
                        Apply Filters
                    </Button>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Jobs</h2>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-2">
                                        Data Base
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuRadioGroup value={dataBase} onValueChange={setDataBase}>
                                        <DropdownMenuRadioItem value="mongo">MongoDB</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="postgresql">PostgreSQL</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="both">MongoDB & PostgreSQL</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Vacancy/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export function parseSalaryRange(salaryRange: string): [number, number][] {
    if (!salaryRange) return [];

    return salaryRange.split(',').map(range => {
        if(!range) {
           return null
        }
        if (range === '150k-plus') {
            return [150000, Infinity];
        }
        const [min, max] = range.split('-').map(value => parseInt(value.replace('k', '000')));
        return [min, max];
    }).filter(Boolean) as [number, number][];
}
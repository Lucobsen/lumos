import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import IframeResizer from '@iframe-resizer/react';
import * as z from "zod";

const genreCodes: Record<string, string> = {
    salsa: '5206',
    bachata: '5207'
};

// const locationCodes = {
//     komp: '1441',
//     veem: '1470'
// }

const searchSchema = z.object({
    genre: z.string().optional(),
    currentDate: z.string().optional().default(''),
    skipEmptyWeeksOnFirstLoad: z.string().optional().default('YES')
})


const Schedule = () => {
    useEffect(() => { document.title = 'Lumos - Schedule'; }, []);

    const { genre, currentDate, skipEmptyWeeksOnFirstLoad } = Route.useSearch();
    const selectedCode = genre ? genreCodes[genre] : '';

    const scrollSchedule = () => {
        document.getElementById('bueno-schedule')?.scrollIntoView({ behavior: 'smooth' });
        return false;
    };

    return (
        <PageContainer disableBorders>
            <IframeResizer
                src={`https://www.bueno.nu/webshop/school/764/schedule?currentDate=${currentDate ?? ''}&skipEmptyWeeksOnFirstLoad=${skipEmptyWeeksOnFirstLoad ?? 'YES'}&calendarEntryTypes=&locations=&genres=${selectedCode}&levels=&employees=`}
                style={{ width: '100%', minHeight: '100vh' }}
                log={false}
                onScroll={() => scrollSchedule()}
                license='GPLv3'
                checkOrigin={false} />
        </PageContainer>
    );
}

export const Route = createFileRoute('/schedule')({
    component: Schedule,
    validateSearch: searchSchema,
})
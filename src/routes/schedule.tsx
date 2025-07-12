import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import IframeResizer from '@iframe-resizer/react';

const Schedule = () => {
    useEffect(() => { document.title = 'Lumos - Schedule'; }, []);

    const scrollSchedule = () => {
        document.getElementById('bueno-schedule')?.scrollIntoView({ behavior: 'smooth' });
        return false;
    };

    return (
        <PageContainer disableBorders>
            <IframeResizer
                src="https://www.bueno.nu/webshop/school/764/schedule?currentDate=&skipEmptyWeeksOnFirstLoad=YES&calendarEntryTypes=&locations=&genres=&levels=&employees="
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
})
import React from 'react';

export interface TimelineItemProps {
    title: string;
    date: string;
    content: string;
}



const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, content }) => {
    return (
        <div className='relative'>
            <div className='dot absolute top-5 -left-3 bg-primary h-5 w-5 rounded-full border-4 border-white'></div>
            <div className='pl-10'>
                <span className='timeline-date text-xxs font-bold opacity-40 tracking-widest'>{date}</span>
                <h3 className='timeline-title text-lg text-gray-600 font-semibold tracking-widest mb-2'>{title}</h3>
                <p className='text-gray-500 text-sm'>
                    {content}
                </p>
            </div>
        </div>
    );
};

interface TimelineProps {
    items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="border-l-4 border-gray-200 py-6 space-y-6">
            {items.map((item) => <TimelineItem title={item.title} date={item.date} content={item.content} />)}
        </div>
    );
};

export default Timeline;

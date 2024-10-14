import { Scheduler } from "@aldabil/react-scheduler";
import { View } from "@aldabil/react-scheduler/components/nav/Navigation";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { useState } from "react";


const SchedulePage = () => {
    const events = [
        {
            event_id: 1,
            title: "Event 1",
            start: new Date("2024-08-24T10:00:00"),
            end: new Date("2024-08-24T12:00:00"),
        },
        {
            event_id: 2,
            title: "Event 2",
            start: new Date("2024-08-25T14:00:00"),
            end: new Date("2024-08-25T16:00:00"),
        },
    ];

    const [currentView, setCurrentView] = useState<View>("week");

    const handleViewChange = (view: View) => {
        setCurrentView(view);
        console.log("View changed to:", view);
    };

    const handleEventClick = (event: ProcessedEvent) => {
        alert(`Event clicked: ${event.title}`);
    };

    // const handleEventAdded = (event: ProcessedEvent) => {
    //     console.log("Event added", event);
    // };

    // const handleEventDeleted = (eventId: number) => {
    //     console.log("Event deleted", eventId);
    // };

    // const handleEventUpdated = (event: ProcessedEvent) => {
    //     console.log("Event updated", event);
    // };

    return (
        <div style={{ height: "600px", width: "100%" }}>
            <Scheduler
                events={events}
                view={currentView}
                onViewChange={handleViewChange}
                onEventClick={handleEventClick}
            // onDelete={() => handleEventDeleted(1)}
            // onEventUpdated={handleEventUpdated}
            />
        </div>
    );
}

export default SchedulePage
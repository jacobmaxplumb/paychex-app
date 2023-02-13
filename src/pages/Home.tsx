import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useEffect, useState } from "react"
import { clockIn, clockOut, endBreak, endLunch, getMostRecentEntry, startBreak, startLunch } from "../actions/entries";
import { getDate } from "../actions/helper";
import { EntryInfo } from "../components/EntryInfo";

export const Home = () => {
    const [entry, setEntry] = useState<any>(null);

    const getEntry = () => {
        getMostRecentEntry().then(entry => {
            setEntry(entry);
        })
    }

    const clockUserIn = () => {
        clockIn().then(entry => {
            setEntry(entry);
        })
    }

    const clockUserOut = () => {
        clockOut(entry).then(entry => {
            setEntry(entry);
        })
    }

    const startUserBreak = () => {
        startBreak(entry).then(entry => setEntry(entry));
    }

    const endUserBreak = () => {
        endBreak(entry).then(entry => setEntry(entry));
    }

    const startUserLunch = () => {
        startLunch(entry).then(entry => setEntry(entry));
    }

    const endUserLunch = () => {
        endLunch(entry).then(entry => setEntry(entry));
    }

    const showStartBreak = (entry: any) => {
        if (entry.breaks.length) {
            const lastBreak = entry.breaks[entry.breaks.length - 1];
            if (lastBreak.endTime) return true;
            else return false;
        } else return true;
    }

    const showStartLunch = (entry: any) => {
        if (entry.lunch) {
            if (entry.lunch.endTime) return true;
            else return false;
        } else return true;
    }

    useEffect(() => {
        getEntry();
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
            <Card>
                <CardContent>
                    {entry && entry.clockOutTime ? (
                        <>{entry.owner} clocked out at: {getDate(entry.clockOutTime)}</>
                    ) : (
                        <>{entry && entry.clockInTime ? (
                            <>{entry.owner} clocked in at: {getDate(entry.clockInTime)}</>
                        ) : (
                            <>User does not have any entries</>
                        )}</>
                    )}
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    {!entry || entry.clockOutTime ? (
                        <Button variant="contained" onClick={clockUserIn}>Clock In</Button>
                    ) : (
                        <>
                            <Button color="error" disabled={!showStartBreak(entry) || !showStartLunch(entry)} variant="contained" onClick={clockUserOut}>Clock Out</Button>
                            {showStartBreak(entry) ? (
                                <Button disabled={!showStartLunch(entry)} variant="contained" onClick={startUserBreak}>Start Break</Button>
                            ) : (
                                <Button color="error" variant="contained" onClick={endUserBreak}>End Break</Button>

                            )}
                            {!entry.lunch?.endTime && (
                                <>
                                    {showStartLunch(entry) ? (
                                        <Button disabled={!showStartBreak(entry)} variant="contained" onClick={startUserLunch}>Start Lunch</Button>
                                    ) : (
                                        <Button color="error" variant="contained" onClick={endUserLunch}>End Lunch</Button>
                                    )}
                                </>
                            )}



                        </>
                    )}
                </CardActions>

            </Card>
            {(entry && !entry?.clockOutTime) && (
                <EntryInfo entry={entry} />
            )}
            
        </div>
    )
}
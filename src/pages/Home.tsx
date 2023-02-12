import { Flex } from "@aws-amplify/ui-react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useEffect, useState } from "react"
import { clockIn, clockOut, getMostRecentEntry } from "../actions/entries";

export const Home = (props: any) => {
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

    const getDate = (isoDate: string) => {
        const timeStamp = Date.parse(isoDate);
        return new Date(timeStamp).toUTCString();
    }

    useEffect(() => {
        getEntry();
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
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
                <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                    {!entry || entry.clockOutTime ? (
                        <Button variant="contained" onClick={clockUserIn}>Clock In</Button>
                    ) : (
                        <Button color="error" variant="contained" onClick={clockUserOut}>Clock Out</Button>
                    )}
                </CardActions>

            </Card>

        </div>
    )
}
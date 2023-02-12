import { Button } from "@mui/material";
import { API } from "aws-amplify"
import { useEffect, useState } from "react"
import { addEntry } from "../actions/entries";
import { searchEntries } from "../graphql/queries"
import { STATUS } from "../models/entries.models";

export const Home = (props: any) => {
    const [status, setStatus] = useState(STATUS.CLOCK_OUT);

    const addNewEntry = async () => {
        const onSuccess = (entry: any) => {
            setStatus(entry.status);
        }
        addEntry(status === STATUS.CLOCK_OUT ? STATUS.CLOCK_IN : STATUS.CLOCK_OUT, onSuccess);
    }

    const fetchEntries = async () => {
        const result: any = await API.graphql({
            query: searchEntries,
            variables: {
                sort: {
                    field: 'dateTime',
                    direction: 'desc'
                }
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        const entries = result.data.searchEntries.items;
        setStatus(entries[0].status)
    }

    useEffect(() => {
        fetchEntries();
    }, [])
    return (
        <div>
            {status === STATUS.CLOCK_IN  ? 'You are clocked in' : 'You are not clocked In'}
            <Button variant="contained" onClick={addNewEntry}>Click</Button>
        </div>
    )
}
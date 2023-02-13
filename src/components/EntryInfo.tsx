import { Card, CardContent, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { getDate } from "../actions/helper"

export const EntryInfo = ({ entry }: any) => {
    return (
        <div style={{marginTop: '10px'}}>
            <Card>
                <CardContent>
                    <List>
                        {entry?.clockInTime && (<ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Clock In Time" secondary={getDate(entry.clockInTime)} />
                            </ListItemButton>
                        </ListItem>)}
                        {entry?.lunch && entry.lunch.startTime && (<ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Lunch Start Time" secondary={getDate(entry.lunch.startTime)} />
                            </ListItemButton>
                        </ListItem>)}
                        {entry?.lunch && entry.lunch.endTime && (<ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Lunch End Time" secondary={getDate(entry.lunch.endTime)} />
                            </ListItemButton>
                        </ListItem>)}
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}
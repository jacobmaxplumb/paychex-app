import { API } from "aws-amplify"
import { createStatus } from "../graphql/mutations";
import { listStatuses } from "../graphql/queries"

export const getStatus = async (onSuccess: (statues: any) => void) => {
    try {
        const listStatusesData: any = await API.graphql({query: listStatuses, authMode: 'AMAZON_COGNITO_USER_POOLS'});
        const statues = listStatusesData.data.listStatuses.items;
        if (!statues.length) {
            const status = {isClockedIn: false};
            const createStatusData: any = await API.graphql({query: createStatus, variables: {input: status}, authMode: 'AMAZON_COGNITO_USER_POOLS'});
            onSuccess(createStatusData.data.createStatus);
        } else onSuccess(statues[0]);
    } catch(e: any) {
        // need to set up state for getting list status stuff
        console.log(e);
    }
}
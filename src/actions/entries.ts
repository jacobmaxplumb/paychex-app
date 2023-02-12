import { API } from "aws-amplify";
import { createEntry } from "../graphql/mutations";

export const addEntry = async (status: any, onSuccess: (entry: any) => void) => {
    const input = {
        dateTime: new Date().toISOString(),
        status: status
    }

    try {
        const result: any = await API.graphql({
            query: createEntry,
            variables: {input},
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        onSuccess(result.data.createEntry);
    } catch(e: any) {
        console.log(e);
    }
}
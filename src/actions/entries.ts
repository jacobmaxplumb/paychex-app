import { API } from "aws-amplify";
import { createEntry, updateEntry } from "../graphql/mutations";
import { searchEntries } from "../graphql/queries";

export const clockOut = async (entry: any) => {
	try {
        if (entry.clockOutTime) throw new Error('Clock Out Time Already Exists on Entry')
		const input = {
			id: entry.id,
			clockInTime: entry.clockInTime,
			clockOutTime: new Date().toISOString(),
		};
		const result: any = await API.graphql({
			query: updateEntry,
			variables: { input },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		});
		return result.data.updateEntry;
	} catch (e: any) {
		console.error(e);
	}
};

export const clockIn = async () => {
	const input = {
		clockInTime: new Date().toISOString(),
	};

	try {
		const result: any = await API.graphql({
			query: createEntry,
			variables: { input },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		});
		return result.data.createEntry;
	} catch (e: any) {
		console.error(e);
	}
};

export const addEntry = async (
	status: any,
	onSuccess: (entry: any) => void
) => {
	const input = {
		dateTime: new Date().toISOString(),
		status: status,
	};

	try {
		const result: any = await API.graphql({
			query: createEntry,
			variables: { input },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		});
		onSuccess(result.data.createEntry);
	} catch (e: any) {
		console.error(e);
	}
};

export const getMostRecentEntry = async () => {
	try {
		const result: any = await API.graphql({
			query: searchEntries,
			variables: {
				sort: {
					field: "clockInTime",
					direction: "desc",
				},
			},
			authMode: "AMAZON_COGNITO_USER_POOLS",
		});
		const entries = result.data.searchEntries.items;
		return entries[0];
	} catch (e: any) {
		console.error(e);
	}
};

export const getStatus = () => {};

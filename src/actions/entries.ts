import { inputUnstyledClasses } from "@mui/base";
import { API } from "aws-amplify";
import { createEntry, updateEntry } from "../graphql/mutations";
import { searchEntries } from "../graphql/queries";

const buildEntryObject = (entry: any) => {
    return {
        id: entry.id,
		clockInTime: entry.clockInTime,
		breaks: entry.breaks,
		clockOutTime: entry.clockOutTime,
        lunch: entry.lunch
    }
}

export const clockOut = async (entry: any) => {
	try {
		if (entry.clockOutTime)
			throw new Error("Clock Out Time Already Exists on Entry");
		const input = buildEntryObject(entry);
        input.clockOutTime = new Date().toISOString();
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

export const startBreak = async (entry: any) => {
	try {
		const input = buildEntryObject(entry);
		const newBreak: any = { startTime: new Date().toISOString() };
		input.breaks.push(newBreak);
		console.log(input);
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

export const startLunch = async (entry: any) => {
	try {
		const input = buildEntryObject(entry);
		const newLunch: any = { startTime: new Date().toISOString() };
		input.lunch = newLunch;
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

export const endBreak = async (entry: any) => {
	try {
		const lastBreak = {
			startTime: entry.breaks[entry.breaks.length - 1].startTime,
			endTime: new Date().toISOString(),
		};
		const input = buildEntryObject(entry);
		input.breaks[input.breaks.length - 1] = lastBreak;
		console.log(input);
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

export const endLunch = async (entry: any) => {
	try {
		const input = buildEntryObject(entry);
        input.lunch.endTime = new Date().toISOString();;
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
		clockOutTime: null,
		breaks: [],
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

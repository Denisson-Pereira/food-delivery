import { Connection } from "./Connection";

export async function GetAll(entity: string) {
    try {
        const response = await Connection.get(`${entity}`);
        const dataResponse = response.data;
        if (!dataResponse || dataResponse.length === 0) {
            return "No data!"
        }
        return dataResponse;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
import { Connection } from "./Connection";

export async function GetAll(entity: string) {
    try {
        const response = await Connection.get(`/${entity}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
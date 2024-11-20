import { Connection } from "./Connection";

export async function GetById(entity: string, id: number) {
    try {
        const reponse = await Connection.get(`${entity}/${id}`);
        if (!reponse.data) {
            return "No data!"
        }
        return reponse.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
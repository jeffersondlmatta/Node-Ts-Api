import fs from 'fs'; 
import path from 'path';
import { PodCastModel } from '../models/podcastModel';



const pathData = path.join(__dirname, "../data/podcast.json");

export const repoPodcast = async (
    podcastName?: string):Promise<PodCastModel[]> => 
    {
    const rawData = fs.readFileSync(pathData, "utf-8"); 
    let jsonFile = JSON.parse(rawData);
    
    if(podcastName){
        jsonFile = jsonFile.filter((PodCast: { podcastName: string; }) => PodCast.podcastName === podcastName)
    }


    return jsonFile;
}
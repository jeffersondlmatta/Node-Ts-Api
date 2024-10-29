import { repoPodcast } from "../data/podcast-app";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/statusCode";

export const serviceListEpsodes = async () => {

    let responseFormat: FilterPodcastModel = {
        statusCode:0,
        body:[],
    }   
    
    const data = await repoPodcast();

    responseFormat.statusCode = data.length !==0 ? StatusCode.OK : StatusCode.NoContent;

    responseFormat.body = data;

    return data;


}
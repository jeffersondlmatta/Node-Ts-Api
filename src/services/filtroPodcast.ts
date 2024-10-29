import { repoPodcast } from "../data/podcast-app";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/statusCode";


export const  serviceFilterEp  = async (podcastName: string | undefined 

): Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
        statusCode:0,
        body:[],
    }   
    

    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repoPodcast(queryString);

    responseFormat.statusCode = data.length !==0 ? StatusCode.OK : StatusCode.NoContent;

/*  if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }else {
        responseFormat.statusCode = StatusCode.NoContenct;
    }
*/
    responseFormat.body = data;

    return responseFormat;

}
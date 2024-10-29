import *  as http from "http";
import { HttpMethods } from "./utils/httpMethods";
import { getFilterEp, getListEpsodes } from "./controllers/podcastsController";
import { Routes } from "./routes/routes";


export const app = async(
    request: http.IncomingMessage,
    response: http.ServerResponse
    ) => {

    const baseUrl  = request.url?.split("?")[0];


    if(request.method === HttpMethods.GET && baseUrl === Routes.LIST){
        await getListEpsodes(request, response); 
    }
    if(request.method === HttpMethods.GET && baseUrl === Routes.EPISODE){
        await getFilterEp(request,response);
    }
}
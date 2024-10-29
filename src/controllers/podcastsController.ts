import {IncomingMessage, ServerResponse} from 'http';
import { serviceListEpsodes } from '../services/listEpsodesServices';
import { StatusCode } from '../utils/statusCode';
import { ContentType } from '../utils/contentType';
import { serviceFilterEp } from '../services/filtroPodcast';
import { FilterPodcastModel } from '../models/filter-podcast-model';



export const getListEpsodes = async(
    req:IncomingMessage, 
    res: ServerResponse) => {

    const content = await serviceListEpsodes();

    res.writeHead(StatusCode.OK,{'Content-Type': ContentType.JSON });
    //res.write(JSON.stringify(content.body));
    res.end(JSON.stringify(content)
    ); 
    
};

export const getFilterEp = async(
    req:IncomingMessage, 
    res: ServerResponse) => {

        const content: FilterPodcastModel = await serviceFilterEp(req.url);

        res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON });
        res.end(JSON.stringify(content.body)
    );

}
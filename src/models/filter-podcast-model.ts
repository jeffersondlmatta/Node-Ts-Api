import { PodCastModel } from "./podcastModel";

export interface FilterPodcastModel {
    statusCode: number,
    body:PodCastModel[],
}
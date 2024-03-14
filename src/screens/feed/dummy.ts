// need to do properly
export interface IFeed {
  id: any;
  name?: string;
  profilePic?: string;
  time: string;
  lastLikedBy?: string;
  allResponsesCount: number;
  respondedProfile: string[];
  likeCount: number;
  postType: 'Image' | 'Text';
  feed?: string;
  feedImage?: string;
  index?: number;
}

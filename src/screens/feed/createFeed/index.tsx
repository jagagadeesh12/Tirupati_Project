import React from 'react';
import {CreateFeedTemplate} from '../../../template';

const CreateFeed = (props: any) => {
  return <CreateFeedTemplate feed={props?.route?.params?.feed} />;
};

export default CreateFeed;

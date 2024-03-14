// test env
// const BASE_URL = 'https://perch-test-auth.smartgig.tech';
// const UPLOAD_BASE_URL = 'https://perch-test-document.smartgig.tech/upload/';
// const GRAPHQL_END_POINT = 'https://perch-test-api.smartgig.tech/gateway';
// const POLICY_URL =
//   'https://perch-images-test.s3.ap-south-1.amazonaws.com/Policies/SG_Leave+Policy+(1).pdf';

// dev env
const BASE_URL = 'https://perch-dev-auth.smartgig.tech';
const UPLOAD_BASE_URL = 'https://perch-dev-document.smartgig.tech/upload/';
const GRAPHQL_END_POINT = 'https://perch-dev-api.smartgig.tech/gateway';
// const POLICY_URL =
//   'https://perch-images-dev.s3.ap-south-1.amazonaws.com/Policies/SG_Leave+Policy+(1).pdf';

// prod
// const BASE_URL = 'https://perch-auth.smartgig.tech';
// const UPLOAD_BASE_URL = 'https://perch-document.smartgig.tech/upload/';
// const GRAPHQL_END_POINT = 'https://perch-api.smartgig.tech/gateway';
// const POLICY_URL =
//   'https://perch-prod.s3.ap-south-1.amazonaws.com/Policies/SG_Leave+Policy.pdf';
// const POLICY_URL = 'https://drive.google.com/file/d/1wP_lFJygYXhScGtn_ivyLuyVyytdKAzh/view?usp=sharing'

const POLICY_URL = [
  'https://perch-prod.s3.ap-south-1.amazonaws.com/Policies/SG_Leave+Policy.pdf',
  'https://perch-prod.s3.ap-south-1.amazonaws.com/Policies/SmartGig+Lunch+Policy_VerSION+1.pdf',
  'https://perch-prod.s3.ap-south-1.amazonaws.com/Policies/SmartGig_Conference+Room+(1).pdf',
  'https://perch-prod.s3.ap-south-1.amazonaws.com/Policies/SmartGig_Course+Reimbursement+Policy.pdf',
  'https://perch-prod.s3.ap-south-1.amazonaws.com/Policies/SmartGig_POSH.pdf',
  'https://perch-prod.s3.ap-south-1.amazonaws.com/Policies/SmartGig_Transport+Policy..pdf',
  'https://perch-prod.s3.ap-south-1.amazonaws.com/Policies/WORK+FROM+OFFICE+POLICY+FINAL+(1).pdf',
];

const API_URL = {
  login: '/auth/api/v1/login',
  refreshToken: '/auth/api/v1/refreshToken',
  magicLink: '/auth/api/v1/callback?token=',
};

export {BASE_URL, UPLOAD_BASE_URL, GRAPHQL_END_POINT, API_URL, POLICY_URL};

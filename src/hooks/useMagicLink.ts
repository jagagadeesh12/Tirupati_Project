// import {useEffect} from 'react';
// import {useRoute} from '@react-navigation/native';
// import {useBearAuth, useBearMagicLink} from '../data/slices';

// const useMagicLink = () => {
//   const {path} = useRoute();
//   const {isVerified, verifyMagicLink} = useBearMagicLink();
//   const setSignIn = useBearAuth((state) => state.setSignIn);
//   // const {setSignIn} = useBearAuth();

  

//   // useEffect(() => {
//   //   console.log('useEffec useMagicLinkt');
//   //   if (path && path.length > 5) {
//   //     const token = path.slice(path.indexOf('=') + 1);
//   //     verifyMagicLink(token);
//   //   }
//   // }, [path, verifyMagicLink]);

//   useEffect(() => {
//     if (path && path.length > 5) {
//       const token = path.slice(path.indexOf('=') + 1);
//       // verifyMagicLink(token);
//       setSignIn(token)
//     }
//     // setSignIn(token)
//     // if (isVerified) {
//     //   setSignIn(true);
//     // } else {
//     // }
//   }, [path]);
//   return {};
// };

// export default useMagicLink;

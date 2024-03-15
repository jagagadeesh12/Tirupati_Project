// import {SetStateAction, useEffect, useRef, useState} from 'react';
// import {AppState} from 'react-native';

// import createApolloClient from '../graphql';
// import {useBearAuth} from '../data/slices';
// import {getToken} from '../utils';

// const useMainStack = () => {
//   const [client, setClient] = useState<any>(null);
//   const appState = useRef(AppState.currentState);
//   const [appStateVisible, setAppStateVisible] = useState(appState.current);
//   const {setSignIn, logout} = useBearAuth();

//   const setUpApolloClient = async () => {
//     const token = await getToken();
//     if (token) {
//       createApolloClient(token, logout).then(newClient => setClient(newClient));
//     } else {
//       // setSignIn('');
//     }
//   };

//   useEffect(() => {
//     const subscription = AppState.addEventListener('change', nextAppState => {
//       if (
//         appState.current.match(/inactive|background/) &&
//         nextAppState === 'active'
//       ) {
//         setUpApolloClient();
//       }

//       appState.current = nextAppState;
//       setAppStateVisible(appState.current);
//     });

//     return () => {
//       subscription.remove();
//     };
//   }, []);

//   useEffect(() => {
//     setUpApolloClient();
//   }, []);

//   return {client};
// };

// export default useMainStack;

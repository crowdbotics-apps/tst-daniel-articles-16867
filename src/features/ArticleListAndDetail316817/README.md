# Article List and Detail

## Setup

Open "/src/navigator/mainNavigator.js" and add the the stack navigator defined in "navigator.js".

Open "/src/store/services.js" and update the `baseURL` with your application's URL.

Add the module reducer and saga to your "/src/store/index.js" file:
1. Add the imports
```
import articlesReducer from "../features/Articles/store/reducers"
import articlesSagas from "../features/Articles/store/sagas"
```
2. Add the reducer
```
   combineReducers({
     apiReducer: apiReducer,
     customReducer: customReducer,
+   articlesReducer: articlesReducer
   }),
```
3. Add the root saga
```
   sagaMiddleware.run(rootSaga);
   sagaMiddleware.run(customRootSaga);
+ sagaMiddleware.run(articlesSagas);
```
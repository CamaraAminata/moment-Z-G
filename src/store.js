import { createStore } from 'redux';
import rootReducer from './reducers';

// Créer le store Redux avec le reducer racine
export const store = createStore(rootReducer);
